const routes = require("express").Router();
const ApplicantRoutes = require("../../../controllers/ApplicantAppliedJobs.controller");

routes.post("/JobApply", ApplicantRoutes.setApplicantAppliedJobs);

routes.get("/getAppliedJob/:id", ApplicantRoutes.getAppliedJob);

routes.get("/getAppliedJobByJobID/:id", ApplicantRoutes.getJobDetailsByJobID);

routes.put("/update-appliedJob/:id",ApplicantRoutes.UpdateAppliedJobDetailsByJobID);






module.exports = routes;
