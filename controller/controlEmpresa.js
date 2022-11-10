const conexion = require('../database/conexionDB')
const controlador = {}

/// PASO UNO:  mostrar el inicio 

controlador.render_inicio=(req, res) =>{
    let user = req.session.usuario;
    if(user)res.render('indexEmpresa.ejs',{user:user});
    else res.redirect('/')
}

/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarEmpresa= (req, res)=>{
    let sql = "SELECT * FROM  empresa;"
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

///   PASO TRES: registrar datos en la base

controlador.registrarEmpresa=(req,res)=>{
    const{nit, nombre, ubicacion, propieatrio}=req.body
    console.log(req.body)
    const sql = `INSERT INTO empresa ( PK_nitEmpresa, nombre, ubicacion, FK_propietario) VALUES (${nit}, '${nombre}', '${ubicacion}', ${propieatrio})`;
    console.log('hola'+ sql)
    conexion.query(sql,(err, datos)=>{
        if(err)return res.json({mensaje:"No se pueden registrar los datos" + err});
        else return res.json({mensaje: "se registro"});
    })
}

// PASO CUATRO: realizar la consulta para llamr el datos que se quiere actualizar 

controlador.buscarEmpresa=(req, res)=>{
    const id = req.params.PK_nitEmpresa;
    let sql = `SELECT PK_nitEmpresa, nombre, ubicacion, FK_propietario FROM empresa WHERE PK_nitEmpresa=${id} ` ;

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// QUINTO PASO  :obteniendo los datos se pasa a remplazarlos, para actualizar 

controlador.actualizarEmpresa=(req,res)=>{  /* PK_nitEmpresa=${nit} */
    const{nit, nombre, ubicacion, propieatrio}=req.body
    let sql =`update empresa set nombre='${nombre}',ubicacion='${ubicacion}',FK_propietario=${propieatrio}`;
    
    console.log(sql)
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}

module.exports=controlador