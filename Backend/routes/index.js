const routes = require("express").Router();
const ApplicantRoute = require("./Registations/Applicant");


routes.use("/applicant", ApplicantRoute);

module.exports = routes;
