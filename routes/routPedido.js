const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlPedido')


/* app.get('/p', controlador.render_inicio)
app.get('/pedido',controlador.ListarPedido) */
app.get('/pPendiente', controlador.render_inicioP)
app.get('/pedidosPendientes',controlador.pedidosPendientes)
app.get('/pedidoP', controlador.ListarPedidoPendiente)


module.exports = app;