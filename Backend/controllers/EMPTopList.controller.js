const TopList = require("../models/EMPTopList.model");
const messages = require("../messages/messages");

const TopListController = {
  createTopList: async (req, res) => {

    try {
      const {
        employerID,
        description,
        EmpName,
        email,
        mobile,
        weblink,
        IsApprove,
      } = req.body;

      if (
        !employerID ||
        !description ||
        !EmpName ||
        !email ||
        !mobile ||
        !weblink
      ) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }
      const newTopList = new TopList({
        employerID,
        description,
        EmpName,
        email,
        mobile,
        weblink,
        IsApprove,
      });

      console.log("TopList Details : ", newTopList);
      await newTopList.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTopList,
        message: "EMPTopList is created successfully.",
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
  getAllTopList: async (req, res) => {
    await TopList.find({ IsApprove: 0 })
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All TopList are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  getApproedAllTopList: async (req, res) => {
    await TopList.find({ IsApprove: 1 })
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All Approved TopList are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  ApproveTopListReq: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const { IsApprove } = req.body;

        await TopList.findByIdAndUpdate(req.params.id, { IsApprove });

        const TopListReq = await TopList.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: TopListReq,
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

  DeleteByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          isOpen

        } = req.body;

        const Job = await TopList.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "TopList is deleted!",
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

module.exports = TopListController;
