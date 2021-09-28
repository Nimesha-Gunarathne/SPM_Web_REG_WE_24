const Event = require("../models/Event.model");
const messages = require("../messages/messages");

const JobsController = {
    createEvents: async (req, res) => {
      
      try {
        const {
          eventTitle,
          companyName,
          shortDescription,
          location,
          closingDate,
          eventType,
          startingDate,
          CreatedBy,
        } = req.body;
  
        if (
          !eventTitle ||
          !companyName ||
          !shortDescription ||
          !location ||
          !closingDate||
          !eventType ||
          !startingDate ||
          !CreatedBy

        ) {
          return res.status(200).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.ContentEmpty,
          });
        }  
        const newEvent = new Event({
          eventTitle,
          companyName,
          shortDescription,
          location,
          closingDate,
          eventType,
          startingDate,
          CreatedBy
        });
  
        console.log("Events Details : ", newEvent);
        await newEvent.save();
  
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: newEvent,
          message: "Event is created successfully.",
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

    getAllEvents: async (req, res) => {
      await Event.find()
        .then((data) => {
          const count = data.length;
          res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            data: data,
            message: "All Event are Received " + count,
          });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    },

    getEventDetailsByEventID: async (req, res) => {
      try {
        if (req.params && req.params.id) {
          const Events = await Event.findById({ _id: req.params.id });
  
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: Events,
            message: "The Event detail recieved",
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

    UpdateEventDetailsByEventID: async (req, res) => {
      try {
        if (req.params && req.params.id) {
          console.log("Stage 01: update event details");
          const {
            eventTitle,
            companyName,
            shortDescription,
            location,
            closingDate,
            eventType,
            startingDate,
            CreatedBy
          } = req.body;
  
          await Event.findByIdAndUpdate(req.params.id, {
            eventTitle,
            companyName,
            shortDescription,
            location,
            closingDate,
            eventType,
            startingDate,
            CreatedBy
          });
  
          const events = await Event.findById(req.params.id);
  
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: events,
            message: events.eventTitle + " is Updated.",
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
  
          const Job = await Event.findByIdAndDelete(req.params.id);
  
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: Job,
            message: "Event is deleted!",
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
