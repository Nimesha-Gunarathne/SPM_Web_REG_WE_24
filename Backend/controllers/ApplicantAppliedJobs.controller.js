const applicantAppliedJobsModel = require("../models/ApplicantAppliedJobs.mode");
const messages = require("../messages/messages");

const ApplicantAppliedJobsControllers = {
    setApplicantAppliedJobs: async function (req, res) {
    if (req.body) {
      const setApplicantAppliedJob = new applicantAppliedJobsModel(req.body);
      setApplicantAppliedJob
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    }
  },

  getAppliedJob: async (req, res) => {
    console.log("req.params.id", req.params.id);

    id = req.params.id;

    console.log("id", id);

    if (id) {
      await applicantAppliedJobsModel
        .find({ UserID: id })

        .then((data) => {
          res.status(200).send({ data: data });
        });
      console.log("S3");
    
    }
  },
  getJobDetailsByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const JobDetails = await applicantAppliedJobsModel.findById({ _id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: JobDetails,
          message: "The Job detail recieved",
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

  UpdateAppliedJobDetailsByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          Applicant_Name,
          Email,
          Contact_Number,
          Description,
          CV_Link,
         
        } = req.body;

        await applicantAppliedJobsModel.findByIdAndUpdate(req.params.id, {
          Applicant_Name,
          Email,
          Contact_Number,
          Description,
          CV_Link,
        });

        const Jobs = await applicantAppliedJobsModel.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Jobs,
          message: "Job Details is Updated.",
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

module.exports = ApplicantAppliedJobsControllers;