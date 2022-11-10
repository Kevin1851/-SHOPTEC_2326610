const mysql= require ('mysql');

const conexion=mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    }
);
conexion.connect((err)=>{
    if(err){
        console.log("Error al realizar la conexión   con la base de datos"+err)
    }else{
        console.log("la comunicación con Mysql fue exitosa")
    }
});

module.exports=conexion;