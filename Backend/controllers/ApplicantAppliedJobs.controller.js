const applicantAppliedJobsModel = require("../models/ApplicantAppliedJobs.mode");
const messages = require("../messages/messages");
const path = require('path');

const ApplicantAppliedJobsControllers = {
  setApplicantAppliedJobs: async function (req, res) {
    const {
      Applicant_Name,
      Email,
      Contact_Number,
      Description,
      CV_Link
    } = req.body;
    if (
      !Applicant_Name ||
      !Email ||
      !Contact_Number ||
      !Description ||
      !CV_Link
    ) {
      console.log("2" + messages.NotSuccess);
      return res.status(200).json({
        code: messages.BadCode,
        success: messages.NotSuccess,
        status: messages.BadStatus,
        message: messages.ContentEmpty,
      });
    }
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


  DeleteByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          isOpen

        } = req.body;

        const Job = await applicantAppliedJobsModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Job Request is deleted!",
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


  getJobDetailsByJobName: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const jobs = await applicantAppliedJobsModel.find({ JobId: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: jobs,
          message: "The Applications detail recieved",
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


  ApproveforJob: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const { IsApprove } = req.body;

        await applicantAppliedJobsModel.findByIdAndUpdate(req.params.id, { IsApprove });

        const applicantAppliedJobsModels = await applicantAppliedJobsModel.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: applicantAppliedJobsModels,
          message: "Approved",
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

  getApproedAllApplications: async (req, res) => {
    await applicantAppliedJobsModel.find({ IsApprove: 1 })
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Approved Applications are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  getRejectedAllApplications: async (req, res) => {
    await applicantAppliedJobsModel.find({ IsApprove: 2 })
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Approved Applications are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  SearchJobDetail: async (req, res) => {
    console.log("req.params.id", req.params.id);

    id = req.params.id;

    console.log("id", id);

    if (id) {
      await applicantAppliedJobsModel
        .find({ Applicant_Name: id })

        .then((data) => {
          res.status(200).send({ data: data });
        });
      console.log("S3");

    }
  },



  viewPDF: async (req, res) => {
    console.log(req.params.id);

    try {
      const file = await applicantAppliedJobsModel.findById(req.params.id);
      console.log("stage 01",file);

      res.set({
        'Content-Type': "application/pdf"
      });

      console.log("Path join ",path.join(__dirname, '..', file.CV_Link))
      res.sendFile(path.join(__dirname, '..', file.CV_Link));

    } catch (error) {
      console.log("stage 02");
      res.status(400).send('Error while loading file. Try again later.');
    }
  }
}

module.exports = ApplicantAppliedJobsControllers;