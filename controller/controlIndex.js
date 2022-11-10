const conexion = require('../database/conexionDB');

const controlador = {}

controlador.incioAdmin=(req,res)=> {

    let user = req.session.usuario;
    if(user)res.render('index_admin.ejs',{user:user});
    else res.redirect('/')

    console.log(user);

};

module.exports=controlador