const express = require('express');
const router = express.Router();
const ApplicantRoute = require('../../../controllers/ApplicantRegistation.controller');


    router.post('/newApplicant',ApplicantRoute.registerApplicant);
    router.post("/activate-email", ApplicantRoute.activateEmail);
    router.post("/applicant-login", ApplicantRoute.StudentLogin);
    router.get("/getAllApplicant", ApplicantRoute.getAllApplicant);
    router.delete("/DeleteAllApplicant/:id", ApplicantRoute.DeleteByID);
    router.get("/getAllApplicantByID/:id", ApplicantRoute.getApplicantDetailsById);

    module.exports = router;
  