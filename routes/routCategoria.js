const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlCategoria')


app.get('/listarCategoria', controlador.render_inicio)
app.get('/mostrarCategoria', controlador.ListarCategorias)
app.post('/registrarCategoria', controlador.registrarCategoria)
app.get('/identCategoria/:PK_idCategoria', controlador.buscarCategoria)
app.post('/actualizarCategoria', controlador.actualizarCategoria) 

module.exports = app;