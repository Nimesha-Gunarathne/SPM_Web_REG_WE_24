const mongoose = require("mongoose");

const ApplicantAppliedJobsSchema = new mongoose.Schema(
    {
           
            Applicant_Name: {type: String, requried: true, trim: true},
            Email: {type: String, requried: true, trim: true},
            Contact_Number:{type: Number, requried: true, trim: true},
            Description:{type: String, requried: true, trim: true}, 
            CV_Link:{type: String, requried: true, trim: true},

            JobId:{type: String, requried: true, trim: true},
            Jobclosing_date:{type: String, requried: true, trim: true},
            JobcreatedAt:{type: String, requried: true, trim: true},
            JobemployerID:{type: String, requried: true, trim: true},
            JobemployerName:{type: String, requried: true, trim: true},
            job_category:{type: String, requried: true, trim: true},
            job_description:{type: String, requried: true, trim: true},
            job_title:{type: String, requried: true, trim: true},
            job_type:{type: String, requried: true, trim: true},

            UserID:{type: String, requried: true, trim: true},
            IsApprove:{type: Number, requried: true, trim: true},
    });

module.exports = mongoose.model("ApplicantAppliedJobs", ApplicantAppliedJobsSchema);