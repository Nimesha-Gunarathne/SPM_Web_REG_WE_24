const routes = require("express").Router();
const EventsRoutes = require("../../controllers/Event.controller");

routes.post("/create-event", EventsRoutes.createEvents);
routes.get("/getAllEvents", EventsRoutes.getAllEvents);
routes.get("/getEventByid/:id", EventsRoutes.getEventDetailsByEventID);
routes.put("/update-event/:id",EventsRoutes.UpdateEventDetailsByEventID);

module.exports = routes;
