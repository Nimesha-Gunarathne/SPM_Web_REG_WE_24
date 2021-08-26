const routes = require("express").Router();
const jobsRoutes = require("../../../controllers/JobVacancy.controller");

routes.post("/create-jobs", jobsRoutes.createJobs);

routes.get("/getAllJobs", jobsRoutes.getAllJobs);
routes.get("/get-jobs-by-id/:id",jobsRoutes.getJobDetailsByJobId);

routes.get("/get-jobs-by-name/:id",jobsRoutes.getJobDetailsByJobName);


routes.get("/get-jobs-by-employer-id/:id",jobsRoutes.getJobDetailsByEmployerId);

routes.put("/UpdateCreatedJobDetails/:id",jobsRoutes.UpdateJobsDetailsByJobID);


  



module.exports = routes;
