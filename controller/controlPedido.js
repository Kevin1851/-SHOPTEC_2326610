const conexion = require('../database/conexionDB')
const controlador = {}

controlador.render_inicio = (req, res) => {
    let user = req.session.usuario;
    if(user)res.render('indexPedido.ejs',{user:user});
    else res.redirect('/')
}
controlador.render_inicioP = (req, res) => {
    let user = req.session.usuario;
    if(user)res.render('indexPedidosPendientes.ejs',{user:user});
    else res.redirect('/')
}
/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarPedido= (req, res)=>{
    let sql = `SELECT v.PK_idCompra as Nº, u.nombreUsuario as Cliente, v.estadoVenta as Estado, date_format(v.fechaCompra, "%Y- %m- %d") as Fecha from venta as v 
    join usuario as u on u.PK_id_usuario = v.FK_idUsuario;`
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

controlador.buscarPedidos=(req, res)=>{
    const id = req.params.PK_idCompra;
    let sql = `SELECT PK_idCompra as Nº, u.nombreUsuario as Cliente, v.estadoVenta as Estado, date_format(v.fechaCompra, "%Y- %m- %d") as Fecha from venta as v join usuario as u on u.PK_id_usuario = v.FK_idUsuario WHERE PK_idCompra =${id} `;
    console.log(sql)

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}
controlador.actualizarPedido=(req,res)=>{  
    const{id, estado}=req.body
    let sql =`UPDATE venta as v SET v.estadoVenta = '${estado}' WHERE v.PK_idCompra = ${id};`;
    console.log(sql)
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}
controlador.pedidosPendientes=(req, res)=>{
    let sql = `SELECT COUNT(*) as pedidos FROM venta as v WHERE v.estadoVenta = 'pendiente';` ;
    console.log(sql)
    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// para mostrar solo los pedidos pendientes en otra vista
controlador.ListarPedidoPendiente= (req, res)=>{
    let sql = `SELECT u.nombreUsuario as cliente, date_format(v.fechaCompra, "%Y- %m- %d")  as fecha, dv.cantidadProducto as producto, (dv.cantidadProducto * p.precioVenta) as total FROM venta as v JOIN usuario as u on u.PK_id_usuario = v.FK_idUsuario JOIN detalleventa as dv on dv.FK_idCompra = v.PK_idCompra JOIN producto as p on p.PK_codigoProducto = dv.FK_idProducto WHERE v.estadoVenta = 'pendiente';`
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}



module.exports = controlador