const express = require('express');
const router = express.Router();

const controladorHome = require('../controller/controllerHome');
const controladorUsuario = require('../controller/controllerUsuario')

router.get('/', (req,res)=>{res.render('login')})  
router.get('/registro',(req,res)=>{res.render('registro')})  
router.post('/registro',controladorUsuario.RegistrarCliente)
router.get('/Home',controladorHome.abrirHome)      
router.get('/store', controladorHome.abrirstore)  
router.get('/telefono', controladorHome.abrirtelefono)    
router.get('/camara', controladorHome.abrircamara)  



module.exports = router;