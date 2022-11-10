const conexion = require('../database/conexionDB');
const multer= require('multer-js');

const controlador={};



// vista del incio de administrador

controlador.incioAdmin=(req,res)=> {

    let user = req.session.usuario;
    if(user)res.render('index_admin.ejs',{user:user});
    else res.redirect('/')

    console.log(user);

};

// // IMAGENES 
// const storage= multer.diskStorage(
//     {
//         destination: function(req,img,cb){
//             cb(null,"public/img");
//         },
//         filename: function(req,img,cb){
//             const datoahora = Date.now();
//             req.fileNewName= datoahora + img.originalname;
//             cb(null,req.fileNewName);
//          }
//     }
// );

// const upload = multer({storage: storage});
// controlador.CargarImagen=upload.single("img");

// // controlador para registrar una imagen

// controlador.registrarImagen=(req,res)=>{
//     const{nombreimg,producto}=req.body;
//     let nameimgs=req.fileNewName;
//     const sql= `INSERT INTO imagen( nombreImagen,FK_idProducto ) 
//                     VALUES
//                 ('${nombreimg}','${producto}')`

//                 console.log(sql);
//                 conexion.query(sql,(error,result)=> {
//                     if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                     else return res.json({mensaje:'Imagen registrada con éxito'});
//             })
// };

// controlador para listar imagenes

// controlador.adminImg=(req,res)=>{
//     res.render('plantillaCompra.ejs')
// }
// controlador.listarImagen=(req,res)=>{
//     let sql="SELECT `PK_idImagen`, `nombreImagen`, `nombreProducto`, `fotos` FROM `imagen` JOIN producto on FK_idProducto = PK_codigoProducto;";
   
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

// };

// controlador para eliminar imagenes

// controlador.EliminarImagen=(req,res)=>{
//     let id = req.params.ident;

//    const sql=`DELETE FROM imagen WHERE PK_idImagen=${id}`
//    console.log(sql)
//     conexion.query(sql,(error,result) => {
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//      else return res.json({mensaje:'Imagen eliminada con éxito'});
//    });
// }



// // eliminar usuario

// controlador.Eliminar=(req,res)=>{
//     const id=req.params.ident;

//     const sql=`delete from usuario where PK_id_usuario=${id}`

//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Usuario eliminado con éxito'});
//     });
// }

// // eliminar producto

// controlador.eliminarPdto=(req,res)=>{
//     let id = req.params.ident;

//     const sql=`delete from producto where PK_codigoProducto =${id}`

//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Producto eliminado con éxito'});
//     });
// }

// // eliminar categoria

// controlador.eliminarCategoria=(req,res)=>{
//     let id=req.params.ident;
//     const sql= `delete from categoria where PK_idCategoria =${id}`

//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Categoria eliminada con éxito'});
//     });
// }

// // eliminar empresa

// controlador.eliminarEmpresa=(req,res)=>{
//     let id=req.params.ident;
//     const sql=`delete from empresa where PK_nitEmpresa =${id}`
//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Empresa eliminada con éxito'});
//     });
// }

// // eliminar assesoria

// controlador.eliminarAssesoria=(req,res)=>{
//     let id = req.params.ident;
//     const sql = `delete from asesoria where PK_idAsesoria  =${id}`

//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Asesoria eliminada con éxito'});
//     });
// }



// // eliminar compra
// controlador.EliminarCompra=(req,res)=>{
//     let id= req.params.ident;
//     const sql= `delete from compra where PK_idCompra =${id}`

//     conexion.query(sql,(error,result) => {
//         console.log(sql)
//         if(error) return res.json({mensaje:'Error al eliminar en la bd...'+error});
//         else return res.json({mensaje:'Compra eliminada con éxito'});
//     });
// }

// // vista administrador lista de usuarios

// controlador.listarUsuario=(req,res)=>{
    


//     let sql= `SELECT * FROM usuario`;
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

    
// };

// controlador.adminUsuario=(req,res)=>{
//     let user = req.session.usuario;
//     if(user)res.render('plantillaUsuario.ejs',{user:user});
//     else res.redirect('/')
// }

// // vista administrador lista de productos

// controlador.adminPdto=(req,res)=>{

//     let user = req.session.usuario;
//     if(user)res.render('plantillaProducto.ejs',{user:user});
//     else res.redirect('/')
// }

// controlador.ListarProducto=(req,res)=>{
    

//     let sql="SELECT `PK_codigoProducto`, `nombreProducto`, `referencia`,`descripcion`, `tipoProducto`,`estadoProducto`, `precioCompra`,`precioVenta`, `stock`, `nombreCategoria`, `nombre`, `img` FROM `producto` INNER JOIN categoria ON Pk_idCategoria=FK_idCategoria INNER JOIN empresa on PK_nitEmpresa=FK_idEmpresa;";
//    conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

    
// }

// // vista de administrador lista de categorias

// controlador.adminCategoria=(req,res)=>{

//     let user = req.session.usuario;
//     if(user)res.render('plantillaCategoria.ejs',{user:user});
//     else res.redirect('/')

// }

// controlador.listarCategoria=(req,res)=>{
//     let sql = "SELECT * FROM categoria"
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

// }

// // vista de administrador lista de Empresas

// controlador.adminEmpresa=(req,res)=>{

//     let user = req.session.usuario;
//     if(user)res.render('plantillaEmpresa.ejs',{user:user});
//     else res.redirect('/')
    
// }
// controlador.listarEmpresa=(req,res)=>{
//     let sql="SELECT `PK_nitEmpresa`,`nombre`,`ubicacion`,`nombreUsuario` FROM `empresa` INNER JOIN usuario on usuario.PK_id_usuario=empresa.FK_propietario;"
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

// }

// // vista de administrador lista de assesorias

// controlador.listarAssesoria=(req,res)=>{
//     let sql= "SELECT `PK_idAsesoria`, `fechaAsesoria`, `duracion`, `tema`,`Calificacion`, `nombreUsuario`,`correoCliente`,`idUcliente`,`nombreCliente` FROM `asesoria` inner join usuario on usuario.PK_id_usuario=asesoria.FK_idUasesor;"
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })

// }

// controlador.adminAssesoria=(req,res)=>{

//     let user = req.session.usuario;
//     if(user)res.render('plantillaAssesoria.ejs',{user:user});
//     else res.redirect('/')
// }



// // vista administrador de compras
// controlador.listarCompra=(req,res)=>{
//     let sql = "SELECT * from compra"
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al consultar en la bd...'});
//         else return res.json(datos);
//     })
    
// }

// controlador.adminCompra=(req,res)=>{

//     let user = req.session.usuario;
//     if(user)res.render('plantillaCompra.ejs',{user:user});
//     else res.redirect('/')
// }


// // controlador para registrar un usuario nuevo

// controlador.registrarUsuario=(req,res)=>{
    

//     const{identificacion,nombre,fechaNacimiento,estadoU,contrasenia,correo,telefono,tipoU}= req.body;
    
//     const sql = `insert into usuario (identificacion, nombreUsuario, fechaNacimiento, estadoUsuario, contrasenia, correo, telefono, TipoUsuario)
//                 values
//                 (${identificacion},'${nombre}',${fechaNacimiento},'${estadoU}','${contrasenia}','${correo}','${telefono}','${tipoU}');`;

//                 console.log(sql);
//                 conexion.query(sql,(error,result)=>{
//                     if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                     else return res.json({mensaje:'Usuario registrado con éxito'});
//                 })
    
                
// }



// // controlador para registrar un producto nuevo


// controlador.registroPdto=(req,res)=>{
    
//     const{nombrePdto,referencia,descripcion,tipoPdto,estadoPdto,precioC,precioV,cantidad,categoria,empresa}=req.body;

//     const sql= `insert into producto(nombreProducto,referencia,descripcion,tipoProducto,estadoProducto,precioCompra,precioVenta,stock,FK_idCategoria,FK_idEmpresa)
//                 values
//                 ('${nombrePdto}','${referencia}','${descripcion}','${tipoPdto}','${estadoPdto}','${precioC}','${precioV}','${cantidad}','${categoria}','${empresa}')`
              
//                 console.log(sql);
//                     conexion.query(sql,(error,result)=>{
//                         if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                         else return res.json({mensaje:'Producto registrado con éxito'});
//                     })
    
                    
// };

// // controlador para el registro de una nueva categoria

//  controlador.registrarCategorias=(req,res)=>{
//     const{nombreCategoria}=req.body;
//     const sql=`insert into categoria (nombreCategoria)
//                 values
//                 ('${nombreCategoria}')`
//                 console.log(sql);
//                     conexion.query(sql,(error,result)=>{
//                         if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                         else return res.json({mensaje:'Categoria registrada con éxito'});
//                     })

                    
//  }

// // controlador registrar una empresa nueva

// controlador.registrarEmpresas=(req,res)=>{
//     const{nitEmpresa,nombreEmpresa,ubicacion,Propietario}=req.body;
//     const sql=`insert into empresa (PK_nitEmpresa, nombre, ubicacion, FK_propietario)
//                 values
//                 ('${nitEmpresa}','${nombreEmpresa}','${ubicacion}','${Propietario}')`
//                 console.log(sql);
//                     conexion.query(sql,(error,result)=>{
//                         if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                         else return res.json({mensaje:'Categoria registrada con éxito'});
//                     })

   
// }

// // controlador registrar nueva assesoria

// // 

// controlador.RegistrarAssesorias=(req,res)=>{
//     const{fecha,tema,duracion,calificacion,idAss,idcliente,gmail,nombre}=req.body;
//     const sql=`INSERT INTO asesoria( fechaAsesoria, tema, duracion, Calificacion, FK_idUasesor, idUcliente, correoCliente, nombreCliente) 
//                     VALUES
//                 ('${fecha}','${tema}','${duracion}','${calificacion}','${idAss}','${idcliente}','${gmail}','${nombre}')`;
//                 console.log(sql);
//                 conexion.query(sql,(error,result)=>{
//                     if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                     else return res.json({mensaje:'Asesoria registrada con éxito'});
//                 })

    
// }



// // controlador para registrar nueva compra
// controlador.RegistrarCompra=(req,res)=>{
//     const {fecha,idUsuario}=req.body;
//     const sql = `insert into compra (fechaCompra,FK_idUsuario )
//                 values
//                 ('${fecha}','${idUsuario}')`
//                 console.log(sql);
//                 conexion.query(sql,(error,result)=>{
//                     if(error) return res.json({mensaje:'Error al registrar en a bd...'+error});
//                     else return res.json({mensaje:'Compra registrada con éxito'});
//                 })

              
// }

// // controladores de Actualizacion

// // controlador actualizar usuario

// controlador.buscarUsuario=(req,res) => {
    
//     const id=req.params.ident;

//     const sql = `SELECT PK_id_usuario, identificacion, nombreUsuario, fechaNacimiento, estadoUsuario, contrasenia, correo, telefono, TipoUsuario FROM usuario WHERE PK_id_usuario=${id}`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });

    
// }

// controlador.Abrir_frm_Usuario=(req,res)=>{

//     res.render('plantillaUsuario.ejs')
// }

// controlador.Actualizar_Usuario=(req,res)=>{

//     const{identificacion,nombre,fechaNacimiento,estadoU,contrasenia,correo,telefono,tipoU} = req.body;

//     const sql = `update usuario set identificacion='${identificacion}',nombreUsuario='${nombre}',fechaNacimiento='${fechaNacimiento}',estadoUsuario='${estadoU}',contrasenia='${contrasenia}',correo='${correo}',telefono='${telefono}',TipoUsuario='${tipoU}'
//                 where identificacion='${identificacion}'`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'USuario actualizado con exito'});
//     });
    
   
// }

// // controlador actualizar producto

// controlador.buscarProducto=(req,res) => {

//     const id=req.params.ident;

//     const sql = `SELECT PK_codigoProducto, nombreProducto, referencia, descripcion, tipoProducto, estadoProducto, precioCompra,precioVenta, stock, FK_idCategoria, FK_idEmpresa FROM producto WHERE PK_codigoProducto =${id}`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });

    
// }

// controlador.Abrir_frm_Pdto=(req,res)=>{

//     res.render('plantillaProducto.ejs')
// }

// controlador.Actualizar_Producto=(req,res)=>{

//     const{nombrePdto,referencia,descripcionpdto,tipoPdto,estadoPdto,precioC,precioV,cantidad,categoria,empresa} = req.body;

//     const sql = `update producto set nombreProducto='${nombrePdto}',referencia='${referencia}',descripcion='${descripcionpdto}',tipoProducto='${tipoPdto}',estadoProducto='${estadoPdto}',precioCompra='${precioC}',precioVenta='${precioV}',stock='${cantidad}',FK_idCategoria ='${categoria}',FK_idEmpresa ='${empresa}'
//                 where nombreProducto='${nombrePdto}'`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'producto actualizado con exito'});
//     });

    
// }

// // controlador actualizar categorias

// controlador.buscarCategoria=(req,res) => {
//     const id=req.params.ident;

//     const sql = `SELECT PK_idCategoria, nombreCategoria FROM categoria WHERE PK_idCategoria=${id}`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });

    
// }

// controlador.Abrir_frm_Categoria=(req,res)=>{
//     res.render('plantillaCategoria.ejs')
// }

// controlador.Actualizar_categoria=(req,res)=>{
    
    

//     const{id,nombreCategoria} = req.body;

//     const sql = `update categoria set nombreCategoria='${nombreCategoria}'
//                 where PK_idCategoria='${id}'`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'categoria actualizado con exito'});
//     });

    
// }

// // controlador actualizar empresa

// controlador.buscarEmpresa=(req,res) => {
    
   

//     const id=req.params.ident;

//     const sql = `SELECT PK_nitEmpresa, nombre, ubicacion, FK_propietario FROM empresa WHERE PK_nitEmpresa=${id}`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });
    
// }
// controlador.Abrir_frm_Empresa=(req,res)=>{

    
//     res.render('frmEmpresa.ejs')
// }
// controlador.Actualizar_Empresa=(req,res)=>{

//     const{nitEmpresa,nombreEmpresa,ubicacion,Propietario} = req.body;

//     const sql = `update empresa set nombre='${nombreEmpresa}',ubicacion='${ubicacion}',FK_propietario='${Propietario}'
//                 where PK_nitEmpresa='${nitEmpresa}'`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'empresa actualizado con exito'});
//     });

// }

// // controlador actualizar asesoria

// controlador.buscarAsesoria=(req,res) => {
//     const id=req.params.ident;
//     const sql = `SELECT PK_idAsesoria, fechaAsesoria, tema, duracion, Calificacion, FK_idUasesor, idUcliente, correoCliente, nombreCliente FROM asesoria WHERE PK_idAsesoria =${id}`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });

// }

// controlador.Abrir_frm_Asesoria=(req,res)=>{
   
//     res.render('plantillaAssesoria.ejs')
// }

// controlador.Actualizar_Asesoria=(req,res)=>{

//     const{id,fecha,tema,duracion,calificacion,idAss,idcliente,gmail,nombre} = req.body;

//     const sql = `update asesoria set fechaAsesoria='${fecha}',tema='${tema}',duracion='${duracion}',Calificacion='${calificacion}',FK_idUasesor='${idAss}',idUcliente='${idcliente}',correoCliente='${gmail}',nombreCliente='${nombre}'
//                 where PK_idAsesoria='${id}'`;

//     console.log(sql)
    
//     conexion.query(sql,(error,datos)=>{
        
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'Asesoria actualizado con exito'});
//     });

// }


// //controlador para actualizar una compra
// controlador.buscarCompra=(req,res) => {
//     const id=req.params.ident;
//     const sql = `SELECT PK_idCompra, fechaCompra, FK_idUsuario FROM compra WHERE PK_idCompra=${id}`;

//     console.log(sql)
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
//         else return res.json(datos);
//     });

   
// }
// controlador.Abrir_frm_Compra=(req,res)=>{

//     res.render('plantillaCompra.ejs')
// }

// controlador.Actualizar_Compra=(req,res)=>{
//     const{id,fecha,idUsuario} = req.body;

//     const sql = `update compra set fechaCompra='${fecha}',FK_idUsuario='${idUsuario}'
//                 where PK_idCompra='${id}'`;

//     console.log(sql)
//     conexion.query(sql,(error,datos)=>{
//         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
//         else return res.json({mensaje:'Compra actualizada con exito'});
//     });

// }


// // controlador para actualizar imagenes

// // controlador.buscarImagen=(req,res) => {
// //     const id=req.params.ident;
// //     const sql = `SELECT PK_idImagen, nombreImagen, FK_idProducto FROM imagen WHERE  PK_idImagen=${id}`;

// //     console.log(sql) 
// //     conexion.query(sql,(error,datos)=>{      
// //         if(error) return res.json({mensaje:'Error al buscar en a bd...'+error}) ;
// //         else return res.json(datos);
// //     });
// // }

// // controlador.Abrir_frm_Imagen=(req,res)=>{
// //     res.render('plantillProducto.ejs')
// // }

// // controlador.Actualizar_Imagen=(req,res)=>{
// //     const{id,nombreimg,producto} = req.body;
// //     const sql = `update imagen set nombreImagen='${nombreimg}',FK_idProducto='${producto}'
// //                 where PK_idImagen='${id}'`;

// //     console.log(sql) 
// //     conexion.query(sql,(error,datos)=>{        
// //         if(error) return res.json({mensaje:'Error al actualizar en a bd...'+error});
// //         else return res.json({mensaje:'Imagen actualizada con exito'});
// //     });
// // }

module.exports=controlador;