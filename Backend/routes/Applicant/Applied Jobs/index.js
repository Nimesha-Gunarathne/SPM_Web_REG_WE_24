const routes = require("express").Router();
const ApplicantRoutes = require("../../../controllers/ApplicantAppliedJobs.controller");

routes.post("/JobApply", ApplicantRoutes.setApplicantAppliedJobs);
routes.get("/getAppliedJob/:id", ApplicantRoutes.getAppliedJob);
routes.get("/getJobAppliedDetailsBYJOBID/:id", ApplicantRoutes.getJobDetailsByJobName);
routes.get("/getAppliedJobByJobID/:id", ApplicantRoutes.getJobDetailsByJobID);
routes.put("/update-appliedJob/:id",ApplicantRoutes.UpdateAppliedJobDetailsByJobID);
routes.put("/approveforjob/:id",ApplicantRoutes.ApproveforJob);
routes.get("/approvedApplication", ApplicantRoutes.getApproedAllApplications);
routes.get("/rejectedApplication", ApplicantRoutes.getRejectedAllApplications);
routes.delete("/deleteappliedJob/:id",ApplicantRoutes.DeleteByID);
routes.get("/searchJob/:id",ApplicantRoutes.SearchJobDetail);
routes.get('/viewPDF/:id', ApplicantRoutes.viewPDF);  

module.exports = routes;
