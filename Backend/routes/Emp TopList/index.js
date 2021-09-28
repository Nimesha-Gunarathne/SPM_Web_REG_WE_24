const routes = require("express").Router();
const TopListRoutes = require("../../controllers/EMPTopList.controller");

routes.post("/create-TopList", TopListRoutes.createTopList);
routes.get("/getAllTopList", TopListRoutes.getAllTopList);
routes.put("/approveTopListReq/:id", TopListRoutes.ApproveTopListReq);
routes.get("/getApproedAllTopList", TopListRoutes.getApproedAllTopList);
routes.delete("/DeleteTopList/:id", TopListRoutes.DeleteByID);

module.exports = routes;
