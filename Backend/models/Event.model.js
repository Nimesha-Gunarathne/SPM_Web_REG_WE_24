const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    job_title: {type: String,trim: true,requried: true},
    eventTitle: {type: String,trim: true,requried: true},
    companyName: {type: String,trim: true,requried: true},
    shortDescription: {type: String,trim: true,requried: true},
    location: {type: String,trim: true,requried: true},
    closingDate: {type: Date,trim: true,requried: true},
    eventType: {type: String,trim: true,requried: true},
    startingDate: {type: Date,trim: true,requried: true},
    CreatedBy: {type: String,trim: true,requried: true},
  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PublishedEvents", EventSchema);
