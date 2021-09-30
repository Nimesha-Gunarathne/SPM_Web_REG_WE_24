const routes = require("express").Router();
const ApplicantRegRoute = require("./Registations/Applicant");
const JobRoute = require("./Employer CreateVacancy/Create vacancies/index");
const ApplicantRoute = require("./Applicant/Applied Jobs/index");
const EmployerRoute = require("./Registations/Employer/index");
const EventRoute = require("./Event/index");
const TopListRoute = require("./TOPList/index");
const EMPTopListRoute = require("./Emp TopList/index");

routes.use("/applicantReg", ApplicantRegRoute);
routes.use("/vacancy", JobRoute);
routes.use("/Applicant", ApplicantRoute);
routes.use("/Employer", EmployerRoute);
routes.use("/Events", EventRoute);
routes.use("/TopList", TopListRoute);
routes.use("/EMPTopList", EMPTopListRoute);

module.exports = routes;
