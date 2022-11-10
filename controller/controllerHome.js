const conexion= require('../database/conexionDB');
const jwt= require('jsonwebtoken')

const controlador={}
// SEGURIDAD HOME
controlador.abrirHome=(req,res)=>{

    let user = req.session.usuario;
    if(user)res.render('index.ejs',{user:user});
    else res.redirect('/')

    console.log(user);
    
}
controlador.abrirstore=(req,res)=>{

    let user = req.session.usuario;
    if(user)res.render('store.ejs',{user:user});
    else res.redirect('/')

    console.log(user);
    
}
controlador.abrirtelefono=(req,res)=>{

    let user = req.session.usuario;
    if(user)res.render('telefono.ejs',{user:user});
    else res.redirect('/')

    console.log(user);
    
}
controlador.abrircamara=(req,res)=>{

    let user = req.session.usuario;
    if(user)res.render('camara.ejs',{user:user});
    else res.redirect('/')

    console.log(user);
    
}
module.exports=controlador;