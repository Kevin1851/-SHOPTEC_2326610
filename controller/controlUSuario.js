const conexion = require('../database/conexionDB')
const controlador = {}

/// PASO UNO:  mostrar el inicio 

controlador.render_inicio=(req, res) =>{
    let user = req.session.usuario;
    if(user)res.render('indexUsuario.ejs',{user:user});
    else res.redirect('/')
}



/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarUsuario= (req, res)=>{
    let sql = `SELECT PK_id_usuario, identificacion, nombreUsuario, date_format(fechaNacimiento, "%Y- %m- %d") as fechaNacimiento, estadoUsuario, contrasenia, correo, telefono, TipoUsuario FROM  usuario;`
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

///   PASO TRES: registrar datos en la base

controlador.registrarUsuario=(req,res)=>{
    const{codigo, identificacion, nombreUsuario, fechaNacimiento,estadoUsuario, contrasenia, correo, telefono, TipoUsuario}=req.body
    console.log(req.body)
    const sql = `INSERT INTO usuario ( identificacion, nombreUsuario, fechaNacimiento, estadoUsuario, contrasenia, correo, telefono, TipoUsuario) VALUES (${identificacion}, '${nombreUsuario}', '${fechaNacimiento}', '${estadoUsuario}', '${contrasenia}', '${correo}', '${telefono}', '${TipoUsuario}')`;
    console.log('hola'+ sql)
    conexion.query(sql,(err, datos)=>{
        if(err)return res.json({mensaje:"No se pueden registrar los datos" + err});
        else return res.json({mensaje: "se registro"});
    })
}

// PASO CUATRO: realizar la consulta para llamr el datos que se quiere actualizar 

controlador.buscarusuario=(req, res)=>{
    const id = req.params.PK_id_usuario;
    let sql = `SELECT PK_id_usuario, identificacion, nombreUsuario, date_format(fechaNacimiento, "%Y-%m-%d") as fechaNacimiento, estadoUsuario, contrasenia, correo, telefono, TipoUsuario FROM usuario WHERE PK_id_usuario=${id} ` ;

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// QUINTO PASO  :obteniendo los datos se pasa a remplazarlos, para actualizar 

controlador.actualizarUsuario=(req,res)=>{  
    const{ codigo, identificacion, nombreUsuario, fechaNacimiento,estadoUsuario, contrasenia, correo, telefono, TipoUsuario}=req.body
    let sql =`update usuario set identificacion=${identificacion},nombreUsuario='${nombreUsuario}',fechaNacimiento='${fechaNacimiento}',estadoUsuario='${estadoUsuario}',contrasenia='${contrasenia}', correo='${correo}', telefono='${telefono}', TipoUsuario='${TipoUsuario}' 
    where  PK_id_usuario= ${codigo}`;
    console.log(sql)
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}
module.exports= controlador