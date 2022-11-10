const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlAsesoria')


app.get('/listarAsesoria', controlador.render_inicio)
app.get('/mostrarAsesoria',controlador.ListarAseoria)
app.post('/registrarAsesoria', controlador.registrarAsesorias)
app.get('/identAsesoria/:PK_idAsesoria', controlador.buscarAsesoria)
app.post('/actualizarAsesoria', controlador.actualizarAsesoria) 
app.get('/eliminarAsesoria/:PK_idAsesoria', controlador.eliminarAsesoria)

module.exports = app;