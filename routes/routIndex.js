const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlIndex')

app.get('/InicioAdmin',controlador.incioAdmin);

module.exports = app;