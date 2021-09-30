const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstName:{type: String, requried: true, trim: true},
    lastName: {type: String, requried: true, trim: true},
    Field: {type: String, requried: true, trim: true},
    email:{type: String, requried: true,trim: true},
    password: {type: String,required: false,},
    mobileNumber:{type: Number, requried: true,trim: true},
    userRoleStatus:{type: String, requried: true,trim: true},
    accountStatus:{type: String, requried: true,trim: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Students", StudentSchema);