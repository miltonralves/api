const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsControle = new SessionsController();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsControle.create);

module.exports = sessionsRoutes;
