const express = require('express')
const app = express.Router();
const controlador = require('../controller/controlUSuario')


app.get('/listarUsuario', controlador.render_inicio)
app.get('/mostrarUsuario',controlador.ListarUsuario)
app.post('/registrarUsuario', controlador.registrarUsuario)
app.get('/identUsuario/:PK_id_usuario', controlador.buscarusuario)
app.post('/actualizarUsuario', controlador.actualizarUsuario) 
/*app.get('/eliminarAsesoria/:PK_idAsesoria', controlador.eliminarAsesoria) */

module.exports = app;