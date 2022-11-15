const conexion = require('../database/conexionDB')
let controlador={};

// controlador.EliminarCompra=(req,res)=>{
//  let id=req.params.ident;
//     const sql=`delete from carrito where PKIdCarrito=${id}`
// console.log(sql)
//     conexion.query(sql,(error,data) => {
//         if(error) {
//             console.log(error);
//         }else {
//             res.redirect('/Home')
//         }
//     });
// }

controlador.registrarCompra = (req, res) => {
    let usuario = req.session.usuario.idUsuario ;
    let sql=`insert into venta (fechaCompra,estadoVenta,FK_idUsuario)
    values (curdate(),'Pendiente',${usuario});`;
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json({idCompra : datos.insertId})
        }
        else{
            res.send("Error al consultar la venta :"+error);
        }
    });
}


 controlador.registrarDetalle=(req,res)=>{
    let idProducto= req.body.PK_codigoProducto 
    let idCompra = req.body.idCompra;
    let cantidad = req.body.cantidadPdto;
    console.log(req.body);
    let insert_detalle_venta = `insert into detalleventa (cantidadProducto,FK_idCompra,FK_idProducto)
                            values (${cantidad}, ${idCompra},${idProducto})`;
    conexion.query(insert_detalle_venta,(errorDV,datosDV)=>{
        if(!errorDV){
            res.send('detalle de la venta exitoso')
        }
        else{
            console.log("error en detalle venta: " + errorDV)
        }
    })    

 };

 controlador.registrarCarrito=(req,res)=>{
    let productoCantidad= req.body.productoCantidad
    let idProducto= req.body.idProducto 
    let user = req.session.usuario.idUsuario 

    let cuenta_stock = `SELECT stock FROM producto WHERE PK_codigoProducto = '${idProducto}'`;
    conexion.query(cuenta_stock, (error3, datosCuenta)=> {
        if(datosCuenta[0].stock - productoCantidad < 0) return res.json({status: 'error', message: 'Stock del producto superado'});
        
        let sql=`insert into carrito (cantidadPdto,idUsuarioC,idProductoC)
        values (${productoCantidad},${user},${idProducto});`;
        conexion.query(sql,(error,datos)=>{
            if(!error){
                let restar_stock = `UPDATE producto SET stock =  (stock - ${productoCantidad}) WHERE PK_codigoProducto = ${idProducto}`;
                conexion.query(restar_stock, (error2, datos2) => {
                    res.send('Registro en Carrito exitoso')
                })
            }
            else{
                res.send("No se registro en el Carrito :"+error);
            }
        })
    })
    

};


controlador.limpiarCarrito = (req, res) => {
    let user = req.session.usuario.idUsuario ;
    let sql = `DELETE FROM carrito WHERE idUsuarioC = '${user}'`;
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json({message: 'Carrito limpiado'});
        }
        else{
            console.log("Error al consultar cantidad comprada:"+error);
        }
    })
}

controlador.cantidadComprada=(req,res)=>{
    let idProducto= req.body.idProducto 

    let sql= `SELECT SUM(cantidadPdto) as cantidadPdto FROM carrito `;
    console.log(sql)
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json(datos);
        }
        else{
            console.log("Error al consultar cantidad comprada:"+error);
        }
    })
}


// 
//
controlador.listarCompra=(req,res)=>{
   
    let user = req.session.usuario.idUsuario ;

    let sql=`select PK_idCompra,fechaCompra,nombreUsuario,estadoVenta from venta as v INNER JOIN usuario as u on u.PK_id_usuario=v.FK_idUsuario where FK_idUsuario= ${user}`;
        
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.render('compraCliente.ejs',{Listado_Compra:datos,usuario:user});
        }
        else{
            console.log("Error al consultar productos"+error);
        }
    })
};


controlador.listarDetalleCompra=(req,res)=>{
   
    let user = req.session.usuario.idUsuario ;
    let idCompra = req.params.idCompra;

    let sql=` select PK_idDetalleCompra, estadoVenta, FK_idCompra,cantidadProducto,nombreProducto from detalleventa as DV inner join producto as p on DV.FK_idProducto=p.PK_codigoProducto inner join venta as v on v.PK_idCompra=Dv.FK_idCompra 
    where FK_idUsuario= ${user}
    and FK_idCompra = ${idCompra}`;
        
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json(datos);
        }
        else{
            console.log("Error al consultar productos"+error);
        }
    })
};

controlador.listarTodosProductos=(req,res)=>{
    let sql=`SELECT PK_codigoProducto,nombreProducto, referencia,  imgProducto ,descripcion,tipoProducto,estadoProducto,precioCompra,precioVenta,stock, nombreCategoria, nombre FROM producto as p INNER JOIN categoria as c ON c.PK_idCategoria = p.FK_idCategoria INNER JOIN empresa as e on e.PK_nitEmpresa = p.FK_idEmpresa;`;
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json(datos);
        }
        else{
            console.log("Error al consultar productos"+error);
        }
    })
};

 controlador.listarTodosProductosCarrito=(req,res)=>{
    let sql=`SELECT PKidCarrito,idUsuarioC,idProductoC, nombreProducto, cantidadPdto, descripcion, imgProducto  FROM carrito as ca INNER JOIN producto AS p on ca.idProductoC=P.PK_codigoProducto INNER JOIN categoria as c ON c.PK_idCategoria = p.FK_idCategoria INNER JOIN empresa as e on e.PK_nitEmpresa = p.FK_idEmpresa INNER JOIN usuario as u on u.PK_id_usuario=ca.idUsuarioC`;
    console.log("perrrrrpppp " + sql)
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json(datos);
        }
        else{
            console.log("Error al consultar productos del carrito"+error);
        }
    })
 };



module.exports=controlador;