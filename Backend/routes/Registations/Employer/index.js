const routes = require("express").Router();
const employerRoutes = require("../../../controllers/employerRegistaion.controller");
// const auth_middleware = require("../../middlewares/auth");

routes.post("/register-employer", employerRoutes.registerEmployer);

routes.post("/activate-email", employerRoutes.activateEmail);

routes.put("/approve-employer/:id", employerRoutes.AproveEmployer);

// routes.get("/get-employer", auth_middleware, employerRoutes.getEmployerDetails);

routes.get("/get-all-employer", employerRoutes.getAllEmployerDetails);

// routes.put("/update-employer",auth_middleware, employerRoutes.UpdateDetailsByEmployer);

routes.put("/set-employer-password", employerRoutes.SetPassword);

routes.post("/login-employer", employerRoutes.EmployerLogin);

module.exports = routes;
