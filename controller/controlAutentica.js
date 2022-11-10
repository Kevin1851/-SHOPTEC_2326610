
const conexion= require('../database/conexionDB');
const jwt= require('jsonwebtoken')

const controlador={}





/// PASO UNO:  mostrar el inicio 

controlador.render_inicio=(req, res) =>{
    res.render('login.ejs')
}

controlador.validarUsuario=(req,res)=>{
   
        try {
            const {correo, password}= req.body;
        
            if(!correo.trim() || !password.trim()){
                console.log('Completa los campos')
            }else{
                let sql = `SELECT u.PK_id_usuario, u.nombreUsuario, u.identificacion,  u.correo, u.TipoUsuario FROM usuario as u WHERE u.correo="${correo}" and u.contrasenia="${password}";`
                conexion.query(sql,(error, datos)=>{
                    if (!datos || datos.length <= 0 ) return res.json({autorizado: false, message:"Usuario no autorizado"})
                    else{
                        let user = {
                            idUsuario : datos[0].PK_id_usuario,
                            nombre : datos[0].nombreUsuario,
                            identificacion : datos[0].identificacion,
                            correo : datos[0].correo,
                            tipoUsuario : datos[0].TipoUsuario
                        }
            
                        const newtoken= jwt.sign({user},process.env.AUT_SECRET,{expiresIn: process.env.AUT_EXP})
                        req.session.usuario= user;
                        return res.json({autorizado: true,
                                        message:"usuario Autorizado",
                                        token: newtoken})
                      
                    }
                }) 
                console.log(sql)
          
        }
            
        } catch (error) {
            console.log("error al validar al usuario" + error)
            
        }
        
}


controlador.validarToken=(req,res,next)=>{
    let token = req.headers['token'];
    if(token==null) return res.status(500).json(
        {
            autorizado:false,
            message:"El token es requerido"
        }
    );

jwt.verify(token,process.env.AUT_SECRET,(error,decode)=>{

        if(error) return res.status(500).json({autorizado:false,message:"el token no esta autorizado"});
        else{
            next()
        }
    
    })
    
    
}

controlador.lagOut=(req,res)=>{
    req.session.destroy();
    return res.json({status: 'success'});
}


module.exports= controlador;