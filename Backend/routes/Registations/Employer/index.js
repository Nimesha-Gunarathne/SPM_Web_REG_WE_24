const routes = require("express").Router();
const employerRoutes = require("../../../controllers/employerRegistaion.controller");

routes.post("/register-employer", employerRoutes.registerEmployer);
routes.post("/activate-email", employerRoutes.activateEmail);
routes.put("/approve-employer/:id", employerRoutes.AproveEmployer);
routes.get("/get-all-employer", employerRoutes.getAllEmployerDetails);
routes.get("/getAllEmp", employerRoutes.getAllEmp);
routes.delete("/deleteEmp/:id", employerRoutes.DeleteByID);
routes.get("/getemployerByID/:id",employerRoutes.getEmployerDetailsById);
routes.put("/set-employer-password", employerRoutes.SetPassword);
routes.post("/login-employer", employerRoutes.EmployerLogin);

module.exports = routes;
