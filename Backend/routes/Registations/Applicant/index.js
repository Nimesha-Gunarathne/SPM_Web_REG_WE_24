const express = require('express');
const router = express.Router();
const ApplicantRoute = require('../../../controllers/ApplicantRegistation.controller');


    router.post('/newApplicant',ApplicantRoute.registerApplicant);
    router.post("/activate-email", ApplicantRoute.activateEmail);
    // router.post("/student-login", StudentRoutes.StudentLogin);
    // router.put("/changeProfileStatus/:id", StudentRoutes.updateProfile_Status);
  

    module.exports = router;
