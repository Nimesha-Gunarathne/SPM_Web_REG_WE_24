const Employer = require("../models/EmploerRegistation.model");
const messages = require("../messages/messages");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendMail = require("./Mails/sendMail");
const sendMailToClerk = require("./Mails/sendMailToClerk");
const sendMailToEmployer = require("./Mails/sendMailToEmployer");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const EmployerControllers = {
  registerEmployer: async (req, res) => {
    try {
      const {
        employer_name,
        email,
        description,
        weblink,
        location,
        mobileNumber,
    
        userRoleStatus,
        accountStatus,
      } = req.body;

      if (
        !employer_name ||
        !email ||
        !description ||
        !weblink ||
        !location ||
        !mobileNumber ||
        !userRoleStatus ||
        !accountStatus
      ) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }

      if (!validateEmail(email)) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ValidEmail,
        });
      }

      const employerMail = await Employer.findOne({ email });
      if (employerMail) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.AlreadyExistEmail,
        });
      }

      const newEmployer = {
        employer_name,
        email,
        description,
        weblink,
        location,
        mobileNumber,
    
        userRoleStatus,
        accountStatus,
      };

      const activation_token = createActivationToken(newEmployer);

      const url = `${CLIENT_URL}/employer/activate/${activation_token}`;
      sendMail(email, url, "Verify your email address", employer_name);

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newEmployer,
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
      const newEmployers = jwt.verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );

      const {
        employer_name,
        email,
        description,
        weblink,
        location,
        mobileNumber,
    
        userRoleStatus,
        accountStatus,
      } = newEmployers;

      const check = await Employer.findOne({ email });
      if (check) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.AlreadyExistEmail,
        });
      }

      const newEmployer = new Employer({
        employer_name,
        email,
        description,
        weblink,
        location,
        mobileNumber,
    
        userRoleStatus:"Employer",
        accountStatus,
      });

      await newEmployer.save();

      const url = `${CLIENT_URL}/employerTopVacancyReqList`;
      sendMailToClerk(
        "email-y3s2grp@gmail.com",
        url,
        "Aprove the Employer",
        "Clerk"
      );

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newEmployer,
        token: activation_token,
        message:
          "Account has been activated successfully. This account is under aproval from the clerk.",
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

  AproveEmployer: async (req, res) => {
    try {
      const { isActive } = req.body;
      await Employer.findByIdAndUpdate(req.params.id, {
        isActive,
      });

      const employer = await Employer.findById(req.params.id);

      if (isActive == 1) {
        const url = `${CLIENT_URL}/SetPassword`;
        sendMailToEmployer(
          employer.email,
          url,
          "Set Password",
          employer.employer_name
        );

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: employer,
          message: employer.employer_name + " is Active.",
        });
      }

      if (isActive == 0) {
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: employer,
          message: employer.employer_name + " is Reject.",
        });
      }

      if (isActive == 2) {
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: employer,
          message: employer.employer_name + " is Pending.",
        });
      } else {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: "Select only one",
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

  SetPassword: async (req, res) => {
    try {
      const { email, password, confirm_password } = req.body;
      console.log(req.body);

      if (!email || !password || !confirm_password) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }

      if (confirm_password != password) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: "Confirm Password does not match with the password.",
        });
      }

      if (!validatePassword(password)) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess, 
          status: messages.BadStatus,
          message: messages.PasswordValidate,
        });
      }

      const newEmployer = await Employer.findOne({ email });
      if (!newEmployer) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.EmailDoesNotExist,
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);
      console.log(passwordHash);

      await Employer.findByIdAndUpdate(newEmployer._id, {
        password: passwordHash,
      });

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newEmployer,
        message:
          "Your account is created. You can login using your user email and password.",
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

  EmployerLogin: async (req, res) => {
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

      const employers = await Employer.findOne({ email });
      if (!employers) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.EmailDoesNotExist,
        });
      } else {
        if (employers.isActive == 1) {
          const isMatchUserPassword = await bcrypt.compare(
            password,
            employers.password
          );
          if (!isMatchUserPassword) {
            return res.status(200).json({
              code: messages.BadCode,
              success: messages.NotSuccess,
              status: messages.BadStatus,
              message: messages.PasswordDoesNotMatch + email,
            });
          } else {
            const access_token = createAccessToken({ id: employers._id });
            res.cookie("access_token", access_token, {
              httpOnly: true,
              path: "/users/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            return res.status(200).json({
              code: messages.SuccessCode,
              success: messages.Success,
              status: messages.SuccessStatus,
              data: employers,
              token: access_token,
              message: "Login successfully.",
            });
          }
        } else {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: "You have to get approve from the clerck. Register Now.",
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

  UpdateDetailsByEmployer: async (req, res) => {
    try {
      const {
        employer_name,
        OIB,
        number_of_subjects,
        reg_no_of_citizen_owners,
        headquarters_streat_no,
        postalCode_place,
        IBAN,
        email,
        mobile_number,
        contact_person,
      } = req.body;

      await Employer.findOneAndUpdate(
        { _id: req.employer.id },
        {
          employer_name,
          OIB,
          number_of_subjects,
          reg_no_of_citizen_owners,
          headquarters_streat_no,
          postalCode_place,
          IBAN,
          email,
          mobile_number,
          contact_person,
        }
      );

      const employer = await Employer.findById(req.employer.id);

      
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: employer,
        message: employer.employer_name + " is Updated.",
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

  getEmployerDetails: async (req, res) => {
    try {
      const employer = await Employer.findById({ _id: req.employer.id }).select(
        "-password"
      );

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: employer,
        message: "Employer details recieved",
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

  getAllEmployerDetails: async (req, res) => {
    try {
      const employer = await Employer.find({ isActive: 3 }).select("-password");
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: employer,
        message: "Employer list recieved",
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

  getAllEmp: async (req, res) => {
    await Employer.find()
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Employers are Received " + count,
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

        const Job = await Employer.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Employer is deleted!",
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
  getEmployerDetailsById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const Employers = await Employer.findById({ _id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Employers,
          message: "The Employer detail recieved",
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
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
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
module.exports = EmployerControllers;
