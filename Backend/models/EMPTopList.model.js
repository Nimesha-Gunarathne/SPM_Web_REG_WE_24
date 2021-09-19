const mongoose = require("mongoose");

const EMPTopListSchema = new mongoose.Schema(
  {
    EmpName: {type: String,trim: true,requried: true},
    description: {type: String,trim: true,requried: true},
    email: {type: String,trim: true,requried: true},
    mobile: {type: Number,trim: true,requried: true},
    weblink: {type: String,trim: true,requried: true},
    employerID: {type: String,trim: true,requried: true},
    IsApprove: {type: Number,trim: true,requried: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EMPTopList", EMPTopListSchema);
