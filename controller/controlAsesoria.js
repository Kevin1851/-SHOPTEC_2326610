const conexion = require('../database/conexionDB')
const controlador = {}

/// PASO UNO:  mostrar el inicio 

controlador.render_inicio=(req, res) =>{
  
    let user = req.session.usuario;
    if(user)res.render('indexAsesoria.ejs',{user:user});
    else res.redirect('/')
}



/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarAseoria= (req, res)=>{
    let sql = "SELECT * FROM  asesoria;"
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

///   PASO TRES: registrar datos en la base

controlador.registrarAsesorias=(req,res)=>{
    const{fecha, tema, duracion, calificacion, idAsesor, idcliente, correo, nombre}=req.body
    console.log(req.body)
    const sql = `INSERT INTO asesoria (fechaAsesoria, tema, duracion, Calificacion, FK_idUasesor, idUcliente, correoCliente, nombreCliente) VALUES ('${fecha}', '${tema}', '${duracion}', ${calificacion}, ${idAsesor}, ${idcliente}, '${correo}', '${nombre}')`;
    console.log('hola'+ sql)
    conexion.query(sql,(err, datos)=>{
        if(err)return res.json({mensaje:"No se pueden registrar los datos" + err});
        else return res.json({mensaje: "se registro"});
    })
}

// PASO CUATRO: realizar la consulta para llamr el datos que se quiere actualizar 

controlador.buscarAsesoria=(req, res)=>{
    const id = req.params.PK_idAsesoria;
    let sql = `SELECT PK_idAsesoria, fechaAsesoria, tema, duracion, Calificacion, FK_idUasesor, idUcliente, correoCliente, nombreCliente FROM asesoria WHERE PK_idAsesoria=${id} ` ;

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// QUINTO PASO  :obteniendo los datos se pasa a remplazarlos, para actualizar 

 controlador.actualizarAsesoria=(req,res)=>{  
    const{ PK_idAsesoria,  fecha, tema, duracion, calificacion, idAsesor, idcliente, correo, nombre}=req.body
    let sql =`update asesoria set fechaAsesoria='${fecha}',tema='${tema}',duracion='${duracion}',Calificacion='${calificacion}',FK_idUasesor='${idAsesor}', idUcliente='${idcliente}', correoCliente='${correo}', nombreCliente='${nombre}' 
    where  PK_idAsesoria= ${PK_idAsesoria}`;
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}

// SEXTO PASO ; pasamos a eliminar con el id 

controlador.eliminarAsesoria=(req,res)=>{  
    const id= req.params.PK_idAsesoria; 
    let sql =`delete from asesoria where PK_idAsesoria=${id}`;
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al elimnar en la bd...'+error});
    else return res.json({mensaje:'usuario eliminado con éxito'});
    });
}


module.exports= controlador