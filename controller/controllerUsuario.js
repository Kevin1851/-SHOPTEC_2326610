const conexion = require("../database/conexionDB");

const controlador={}


controlador.RegistrarCliente = async (req,res)=>{
    let identificacion = req.body.identificacion;
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let fechaNacimiento = req.body.fechaNacimiento;
    let telefono = req.body.telefono;
    let password = req.body.password;
    
    var valida_usuario = `SELECT * from usuario where identificacion = '${identificacion}'`;
    conexion.query(valida_usuario, (error, datos)=>{
        if(datos.length >= 1) return res.status(400).json({status: 400, msg: 'La identificación ya está registrado en el sistema'}) 
        var sql = `insert into usuario (identificacion,nombreUsuario,correo,contrasenia,fechaNacimiento,telefono, estadoUsuario, TipoUsuario) 
        values('${identificacion}', '${nombre}', '${correo}', '${password}','${fechaNacimiento}', '${telefono}', 'activo','Cliente')`
        try {
            conexion.query(sql, (error, datos)=>{
                console.log(error);
                console.log(datos)
                return res.json({msg: 'Usuario registrado con exito, por favor inicia sesion'})
            })
        } catch (e) {
            return res.json({status:400, msg: 'Error' + e})
        }
    })

}

module.exports = controlador;