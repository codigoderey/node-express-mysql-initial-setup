const express = require('express');

const router = express.Router();

const proyectosController = require('../controllers/proyectosControllers');

module.exports = function () {
  // home route
  router.get('/', proyectosController.proyectosHome);
  router.get('/nuevo-proyecto', proyectosController.formularioNuevoProyecto);
  router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

  return router;
};
