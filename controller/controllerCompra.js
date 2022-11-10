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


 controlador.registrarCompra=(req,res)=>{
     let usuario = req.session.usuario.idUsuario ;
     let idProducto= req.body.idProducto 

    let sql=`insert into venta (fechaCompra,FK_idUsuario)
     values (curdate(),${usuario});`;
     console.log(sql)

     conexion.query(sql,(error,datos)=>{
         if(!error){
            res.send('venta registrada con exito')
         }
         else{
             res.send("Error al consultar la venta :"+error);
         }
     })
 };

 controlador.registrarCarrito=(req,res)=>{
    let productoCantidad= req.body.productoCantidad
    let idProducto= req.body.idProducto 

    let cuenta_stock = `SELECT stock FROM producto WHERE PK_codigoProducto = '${idProducto}'`;
    conexion.query(cuenta_stock, (error3, datosCuenta)=> {
        if(datosCuenta[0].stock - productoCantidad < 0) return res.json({status: 'error', message: 'Stock del producto superado'});
        let sql=`insert into carrito (cantidadPdto,FkIdPdto)
        values (${productoCantidad},${idProducto});`;
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

controlador.listarCompra=(req,res)=>{
   
    let user = req.session.usuario.idUsuario ;

    let sql=`SELECT PK_idCompra, nombreUsuario, fechaCompra, FK_idUsuario from venta as v inner join usuario as u on v.FK_idUsuario=u.PK_id_usuario where FK_idUsuario = ${user}`;

    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.render('compraCliente.ejs',{Listado_Compra:datos,usuario:user});
        }
        else{
            console.log("Error al consultar productos"+error);
        }
    })
};


controlador.listarTodosProductos=(req,res)=>{
    let sql="SELECT `PK_codigoProducto`, `nombreProducto`, `referencia`,`descripcion`, `tipoProducto`,`estadoProducto`, `precioCompra`,`precioVenta`, `stock`, `nombreCategoria`, `nombre`, i.nombreImagen as img FROM producto as p JOIN imagen as i on i.FK_idProducto = p.PK_codigoProducto INNER JOIN categoria as c ON c.PK_idCategoria = p.FK_idCategoria INNER JOIN empresa as e on e.PK_nitEmpresa = p.FK_idEmpresa;";
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
    let sql=`SELECT PKIdCarrito,PK_codigoProducto, nombreProducto, cantidadPdto, descripcion, i.nombreImagen as img 
    FROM carrito as ca 
    INNER JOIN producto AS p on ca.FkIdPdto=P.PK_codigoProducto
    JOIN imagen as i on i.FK_idProducto = p.PK_codigoProducto 
    INNER JOIN categoria as c ON c.PK_idCategoria = p.FK_idCategoria 
    INNER JOIN empresa as e on e.PK_nitEmpresa = p.FK_idEmpresa;`;
    conexion.query(sql,(error,datos)=>{
        if(!error){
            res.json(datos);
        }
        else{
            console.log("Error al consultar productos"+error);
        }
    })
 };



module.exports=controlador;