const registationStudent = require("../models/ApplicantRegistation.model");
const messages = require("../messages/messages");
const jwt = require("jsonwebtoken");
const sendMail = require("./Mails/sendMail");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const { CLIENT_URL } = process.env;

const STUDENTControllers = {
    registerApplicant: async function (req, res) {
      console.log("1");
      try {
        const {
          firstName,
          lastName,
          Field,
          email,
          password,
          mobileNumber,
          userRoleStatus,
          accountStatus,
        } = req.body;
  
        if (
          !firstName ||
          !lastName ||
          !Field ||
          !email ||
          !password ||
          !mobileNumber
        ) {
          console.log("2");
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.ContentEmpty,
          });
        }
        console.log("validemail");
        if (!validateEmail(email)) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.ValidEmail,
          });
        }
        console.log("email");
        const studentMail = await registationStudent.findOne({ email });
        console.log("email2");
        if (studentMail) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.AlreadyExistEmail,
          });
        }
  
        const studentMobile = await registationStudent.findOne({ mobileNumber });
        if (studentMobile) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: "Mobile Number Alrady exits",
          });
        }
        console.log("3");
  
        const newStudent = {
          firstName,
          lastName,
          Field,
          email,
          password,
          mobileNumber,
          userRoleStatus,
          accountStatus,
        };
  
        const activation_token = createActivationToken(newStudent);
  
        const url = `${CLIENT_URL}/applicant/activate/${activation_token}`;
        console.log(url);
  
        sendMail(email, url, "Verify your email address", firstName);
  
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: newStudent,
          token: activation_token,
          message: messages.ActiveAccount,
        });
      } catch (err) {
        return res.status(500).json({
          code: messages.InternalCode,
          success: messages.NotSuccess,
          status: messages.InternalStatus,
          message: err.message,
        });
      }
    },
  
    activateEmail: async (req, res) => {
      try {
        const { activation_token } = req.body;
        const newStudents = jwt.verify(
          activation_token,
          process.env.ACTIVATION_TOKEN_SECRET
        );  
  
        const {
          firstName,
          lastName,
          Field,
          email,
          password,
          mobileNumber,
          userRoleStatus,
          accountStatus,
        } = newStudents;
  
        const check = await registationStudent.findOne({ email });
        if (check) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.AlreadyExistEmail,
          });
        }
  
        const newStudent = new registationStudent({
          firstName,
          lastName,
          Field,
          email,
          password,
          mobileNumber,
          userRoleStatus:"Applicant",
          accountStatus:"approved",
        });
  
        await newStudent.save();
  
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: newStudent,
          token: activation_token,
          message:
            "Account has been activated successfully.",
        });
      } catch (err) {
        return res.status(500).json({
          code: messages.InternalCode,
          success: messages.NotSuccess,
          status: messages.InternalStatus,
          message: err.message,
        });
      }
    },

    StudentLogin: async (req, res) => {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.ContentEmpty,
          });
        }
  
        const students = await registationStudent.findOne({ email });
        if (!students) {
          return res.status(400).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.EmailDoesNotExist,
          });
        } else {
          if (password != students.password) {
            return res.status(200).json({
              code: messages.BadCode,
              success: messages.NotSuccess,
              status: messages.BadStatus,
              message: messages.PasswordDoesNotMatch + email,
            });
          } else {
            const access_token = createAccessToken({ id: students._id });
            res.cookie("access_token", access_token, {
              httpOnly: true,
              path: "/users/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });
  
            return res.status(200).json({
              code: messages.SuccessCode,
              success: messages.Success,
              status: messages.SuccessStatus,
              data: students,
              token: access_token,
              message: "Login successfully.",
            });
          }
        }
      } catch (err) {
        return res.status(500).json({
          code: messages.InternalCode,
          success: messages.NotSuccess,
          status: messages.InternalStatus,
          message: err.message,
        });
      }
    },

    getAllApplicant: async (req, res) => {
      await registationStudent.find()
        .then((data) => {
          const count = data.length;
          res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            data: data,
            message: "All Applicant are Received " + count,
          });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    },

    DeleteByID: async (req, res) => {
      try {
        if (req.params && req.params.id) {
          console.log("Stage 01");
          const {
            isOpen
  
          } = req.body;
  
          const Job = await registationStudent.findByIdAndDelete(req.params.id);
  
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: Job,
            message: "Applicant is deleted!",
          });
        }
      } catch (err) {
        return res.status(500).json({
          code: messages.InternalCode,
          success: messages.NotSuccess,
          status: messages.InternalStatus,
          message: err.message,
        });
      }
    },

    getApplicantDetailsById: async (req, res) => {
      try {
        if (req.params && req.params.id) {
          const registationStudents = await registationStudent.findById({ _id: req.params.id });
  
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: registationStudents,
            message: "The Applicant detail recieved",
          });
        }
      } catch (err) {
        return res.status(500).json({
          code: messages.InternalCode,
          success: messages.NotSuccess,
          status: messages.InternalStatus,
          message: err.message,
        });
      } 
    },
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "10m",
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = STUDENTControllers;
