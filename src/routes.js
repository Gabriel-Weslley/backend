const express = require("express");

const routes = express.Router();
const UsuariosController = require("./controllers/UsuariosControllers");

routes.post("/Usuario", UsuariosController.store);

routes.get("/Usuario/:email", UsuariosController.index);

module.exports = routes;
