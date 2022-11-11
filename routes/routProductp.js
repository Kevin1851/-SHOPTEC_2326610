const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlProducto')


app.get('/listarProducto', controlador.render_inicio)
app.get('/mostrarProducto',controlador.ListarProducto)
app.post('/registrarProducto', controlador.cargarImagen, controlador.registrarProducto)
app.get('/identProducto/:PK_codigoProducto', controlador.buscarProducto)
app.post('/actualizarProducto', controlador.actualizarProducto)
/*app.get('/eliminarAsesoria/:PK_idAsesoria', controlador.eliminarAsesoria) */

module.exports = app;