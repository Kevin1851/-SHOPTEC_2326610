const express= require("express");
const rutaAdmin = express.Router();

const controladorAdmin = require('../controller/controllerAdmin');

//inicio de sesion
rutaAdmin.get('/InicioAdmin',controladorAdmin.incioAdmin);


// //rutas para eliminar
// rutaAdmin.get('/EliminarUsuario/:ident',controladorAdmin.Eliminar);
// rutaAdmin.get('/EliminarPdtos/:ident', controladorAdmin.eliminarPdto);
// rutaAdmin.get('/EliminarCategorias/:ident',controladorAdmin.eliminarCategoria);
// rutaAdmin.get('/EliminarEmpresas/:ident',controladorAdmin.eliminarEmpresa);
// rutaAdmin.get('/EliminarAsesorias/:ident',controladorAdmin.eliminarAssesoria);
// rutaAdmin.get('/EliminarCompra/:ident',controladorAdmin.EliminarCompra);
// // rutaAdmin.get('/EliminarImg/:ident',controladorAdmin.EliminarImagen);

// // rutas de administradoe de usuarios
// rutaAdmin.get('/adminUsuarios',controladorAdmin.adminUsuario);
// rutaAdmin.get('/listarUsuario',controladorAdmin.listarUsuario);
// rutaAdmin.post('/RegistrarUsuario',controladorAdmin.registrarUsuario);
// // rutas Actualizar Usuario
// rutaAdmin.get('/buscar_Usuarios/:ident',controladorAdmin.buscarUsuario);
// rutaAdmin.get('/frmUsuario',controladorAdmin.Abrir_frm_Usuario);
// rutaAdmin.post('/Actualizar_Usuarios',controladorAdmin.Actualizar_Usuario);
// // rutas de administrador de producto
// rutaAdmin.get ('/adminProductos',controladorAdmin.adminPdto);
// rutaAdmin.get('/ListarProducto',controladorAdmin.ListarProducto);
// rutaAdmin.post('/registrarProducto',controladorAdmin.registroPdto);
// // rutas actualizar producto
// rutaAdmin.get('/buscarProducto/:ident',controladorAdmin.buscarProducto);
// rutaAdmin.get('/frmRegistar',controladorAdmin.Abrir_frm_Pdto);
// rutaAdmin.post('/Actualizar_Producto',controladorAdmin.Actualizar_Producto);
// // rutas de administrador de categorias
// rutaAdmin.get('/adminCategorias', controladorAdmin.adminCategoria);
// rutaAdmin.get('/listarCategoria', controladorAdmin.listarCategoria);
// rutaAdmin.post('/registrarCategorias',controladorAdmin.registrarCategorias);
// //rutas actualizar categoria
// rutaAdmin.get('/buscar_Categorias/:ident',controladorAdmin.buscarCategoria);
// rutaAdmin.get('/frmCategoria',controladorAdmin.Abrir_frm_Categoria);
// rutaAdmin.post('/Actualizar_Categorias',controladorAdmin.Actualizar_categoria);
// // rutas de administrador de empresa
// rutaAdmin.get('/adminEmpresas',controladorAdmin.adminEmpresa);
// rutaAdmin.get('/listarEmpresas',controladorAdmin.listarEmpresa);
// rutaAdmin.post('/registrarEmpresas',controladorAdmin.registrarEmpresas)
// // controlador actualizar wempresa
// rutaAdmin.get('/buscar_Empresas/:ident',controladorAdmin.buscarEmpresa);
// rutaAdmin.get('/frmEmpresa',controladorAdmin.Abrir_frm_Empresa);
// rutaAdmin.post('/Actualizar_Empresas',controladorAdmin.Actualizar_Empresa);
// // rutas de administrador de Asesoria
// rutaAdmin.get('/adminAssesorias',controladorAdmin.adminAssesoria);
// rutaAdmin.get('/listarAsesoria',controladorAdmin.listarAssesoria);
// rutaAdmin.post('/registrarAssesorias',controladorAdmin.RegistrarAssesorias)
// // rutas actualizar asesoria
// rutaAdmin.get('/buscarAsesorias/:ident',controladorAdmin.buscarAsesoria);
// rutaAdmin.get('/frmAsesoria',controladorAdmin.Abrir_frm_Asesoria);
// rutaAdmin.post('/Actualizar_Asesorias',controladorAdmin.Actualizar_Asesoria);
// // rutas administrador de compra
// rutaAdmin.get('/adminCompras',controladorAdmin.adminCompra);
// rutaAdmin.get('/listarCompra',controladorAdmin.listarCompra);
// rutaAdmin.post('/RegistrarCompra',controladorAdmin.RegistrarCompra);
// // rutas actualizar compra
// rutaAdmin.get('/buscar_Compras/:ident',controladorAdmin.buscarCompra);
// rutaAdmin.get('/frmCompra',controladorAdmin.Abrir_frm_Compra);
// rutaAdmin.post('/Actualizar_Compras',controladorAdmin.Actualizar_Compra);
// // rutas administrador de imagenes
// rutaAdmin.post('/registrarImg',controladorAdmin.CargarImagen,controladorAdmin.registrarImagen);
// // rutaAdmin.get('/adminVentas',controladorAdmin.adminImg);
// // rutaAdmin.get('/Listarimg',controladorAdmin.listarImagen);
// // rutas actualizar imagenes
// // rutaAdmin.get('/buscarImg/:ident',controladorAdmin.buscarImagen);
// // rutaAdmin.get('/frmImagen',controladorAdmin.Abrir_frm_Imagen);
// // rutaAdmin.post('/Actualizar_img',controladorAdmin.Actualizar_Imagen);

module.exports= rutaAdmin;