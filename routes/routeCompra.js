const express= require('express');
const rutaCompra= express.Router();

const controladorCompra=require('../controller/controllerCompra');

 rutaCompra.post('/registroDeCompras',controladorCompra.registrarCompra);
 rutaCompra.post('/registroDeCarrito',controladorCompra.registrarCarrito);

 rutaCompra.get('/cantidadComprada',controladorCompra.cantidadComprada);

 rutaCompra.get('/listarCompra',controladorCompra.listarCompra);

 //rutaCompra.get('/EliminarCompra/:ident',controladorCompra.EliminarCompra);

rutaCompra.get('/listarTodosLosProductos',controladorCompra.listarTodosProductos);
rutaCompra.get('/listarTodosLosProductosDelCarrito',controladorCompra.listarTodosProductosCarrito);




module.exports=rutaCompra;