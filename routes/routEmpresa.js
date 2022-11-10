const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlEmpresa')


app.get('/listarEmpresa', controlador.render_inicio)
app.get('/mostrarEmpresa',controlador.ListarEmpresa)
app.post('/registrarEmpresa', controlador.registrarEmpresa)
app.get('/identEmpresa/:PK_nitEmpresa', controlador.buscarEmpresa)
app.post('/actualizarEmpresa', controlador.actualizarEmpresa)
/*app.get('/eliminarAsesoria/:PK_idAsesoria', controlador.eliminarAsesoria) */

module.exports = app;