const Jobs = require("../models/CreateJobVacancy.model");
const messages = require("../messages/messages");

const JobsController = {
  createJobs: async (req, res) => {

    try {
      const {
        job_title,
        job_description,
        job_category,
        job_type,
        closing_date,
        employerID,
        employerName,
        isOpen
      } = req.body;

      if (
        !job_title ||
        !job_description ||
        !job_category ||
        !job_type ||
        !closing_date
      ) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }
      const newJobs = new Jobs({
        job_title,
        job_description,
        job_category,
        job_type,
        closing_date,
        employerID,
        employerName,
        isOpen
      });

      console.log("Jobs Details : ", newJobs);
      await newJobs.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newJobs,
        message: "Job is created successfully.",
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

  getAllJobs: async (req, res) => {
    await Jobs.find()
      .then((data) => {
        // console.log("Len: ", data.length)
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Jobs are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  getJobDetailsByJobId: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const jobs = await Jobs.findById({ _id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: jobs,
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

  getJobDetailsByEmployerId: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const jobs = await Jobs.find({ employerID: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: jobs,
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

  UpdateJobsDetailsByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          job_title,
          job_description,
          job_category,
          job_type,
          closing_date,

        } = req.body;

        await Jobs.findByIdAndUpdate(req.params.id, {
          job_title,
          job_description,
          job_category,
          job_type,
          closing_date,
        });

        const Job = await Jobs.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
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

  ReopenrouteByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          isOpen

        } = req.body;

        await Jobs.findByIdAndUpdate(req.params.id, {
          isOpen
        });

        const Job = await Jobs.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Reopen Process successfully completed",
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

        // await Jobs.findByIdAndDelete(req.params.id, {
        //   isOpen
        // });

        const Job = await Jobs.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Vacancy is deleted!",
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
        const jobs = await Jobs.find({ job_title: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: jobs,
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


}

module.exports = JobsController;
