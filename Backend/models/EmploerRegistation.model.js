const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema(
  {
    
    employer_name:{type: String, requried: true, trim: true},
    email: {type: String, requried: true, trim: true},
    description: {type: String, requried: true, trim: true},
    weblink:{type: String, requried: true,trim: true},
    location: {type: String,required: false,},
    mobileNumber:{type: Number, requried: true,trim: true},
    password: {type: String,default: "employer",required: false},

    userRoleStatus:{type: String, requried: true,trim: true},
    accountStatus:{type: String, requried: true,trim: true},

    isActive: {type: Number,default: 3,},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employers", EmployerSchema);