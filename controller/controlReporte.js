const conexion = require('../database/conexionDB')
const controlador = {}

controlador.render_inicio = (req, res) => {
    let user = req.session.usuario;
    if(user)res.render('reportes.ejs',{user:user});
    else res.redirect('/')
}

/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarReportes= (req, res)=>{
    let sql = "SELECT u.identificacion, u.nombreUsuario as Nombre, p.nombreProducto as producto, dv.cantidadProducto as cantidad, p.precioVenta as Precio, (p.precioVenta * dv.cantidadProducto) as Total FROM usuario as u JOIN venta as v on u.PK_id_usuario = v.FK_idUsuario JOIN detalleventa as dv on dv.FK_idCompra = v.PK_idCompra JOIN producto as p on dv.FK_idProducto = p.PK_codigoProducto;"
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}


module.exports = controlador