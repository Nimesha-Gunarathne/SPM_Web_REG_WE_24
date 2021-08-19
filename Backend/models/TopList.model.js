const mongoose = require("mongoose");

const TopListSchema = new mongoose.Schema(
  {
    job_title: {type: String,trim: true,requried: true},
    job_description: {type: String,trim: true,requried: true},
    job_category: {type: String,trim: true,requried: true},
    job_type: {type: String,trim: true,requried: true},
    closing_date: {type: Date,trim: true,requried: true},
    employerID: {type: String,trim: true,requried: true},
    employerName: {type: String,trim: true,requried: true},
    IsApprove: {type: Number,trim: true,requried: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TopList", TopListSchema);
