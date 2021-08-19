const routes = require("express").Router();
const TopListRoutes = require("../../controllers/TopList.controller");


routes.post("/create-TopList", TopListRoutes.createTopList);
routes.get("/getAllTopList", TopListRoutes.getAllTopList);




  



module.exports = routes;
