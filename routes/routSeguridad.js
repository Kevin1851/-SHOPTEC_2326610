const express=require('express');
const routerSeguridad =express.Router();

const controladorSeguridad = require('../controller/controlAutentica');

routerSeguridad.get('/', controladorSeguridad.render_inicio)
routerSeguridad.post('/validar',  controladorSeguridad.validarUsuario);
routerSeguridad.post('/auth/lagout',controladorSeguridad.lagOut)

module.exports=routerSeguridad;