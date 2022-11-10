const conexion = require('../database/conexionDB')
const controlador = {}

controlador.render_inicio = (req, res) => {
    
    let user = req.session.usuario;
    if(user)res.render('indexCategoria.ejs',{user:user});
    else res.redirect('/')
}

/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarCategorias= (req, res)=>{
    let sql = "SELECT * FROM  categoria;"
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

///   PASO TRES: registrar datos en la base

controlador.registrarCategoria=(req,res)=>{
    const{id, nombre}=req.body
    console.log(req.body)
    const sql = `INSERT INTO categoria ( nombreCategoria) VALUES ( '${nombre}')`;
    console.log('hola'+ sql)
    conexion.query(sql,(err, datos)=>{
        if(err)return res.json({mensaje:"No se pueden registrar los datos" + err});
        else return res.json({mensaje: "se registro"});
    })
}

// PASO CUATRO: realizar la consulta para llamr el datos que se quiere actualizar 

controlador.buscarCategoria=(req, res)=>{
    const id = req.params.PK_idCategoria;
    let sql = `SELECT PK_idCategoria, nombreCategoria FROM categoria WHERE PK_idCategoria=${id} ` ;

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// QUINTO PASO  :obteniendo los datos se pasa a remplazarlos, para actualizar 

controlador.actualizarCategoria=(req,res)=>{  /* PK_nitEmpresa=${nit} */
    const{id, nombre}=req.body
    let sql =`update categoria set nombreCategoria='${nombre}' where  PK_idCategoria= ${id}`;
    
    console.log(sql)
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}


module.exports = controlador