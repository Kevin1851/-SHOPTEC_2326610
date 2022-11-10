const conexion = require("../database/conexionDB");

const controlador={}


controlador.RegistrarCliente = async (req,res)=>{
    let identificacion = req.body.identificacion;
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let fechaNacimiento = req.body.fechaNacimiento;
    let telefono = req.body.telefono;
    let password = req.body.password;
    
    console.log('HOLA')

    var sql = `insert into usuario (identificacion,nombreUsuario,correo,contrasenia,fechaNacimiento,telefono) 
    values('${identificacion}', '${nombre}', '${correo}', '${password}','${fechaNacimiento}', '${telefono}')`
    try {
        conexion.query(sql, (error, datos)=>{
            console.log(error)
            console.log(datos)
            return res.json({msg: 'Registro exitoso'})
        })
    } catch (e) {
        return res.json({status:400, msg: 'Error' + e})
    }
}

module.exports = controlador;