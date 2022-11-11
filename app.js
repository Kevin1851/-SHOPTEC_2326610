const express  = require('express');
const app = express();
const session = require('express-session')
const bodyparser = require('body-parser');
const mysql = require('mysql');

const dotenv = require('dotenv');

 dotenv.config({
    path: "./env/.env"
}) 

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'shoptecyuko',
    user:'root',
    password:''
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa')
    }
});



conexion.query('SELECT * from usuario', function(error,results,fields){
        if(error)
        throw error;

        results.forEach(result => {
            console.log(result);
        });
}
)

conexion.end();

app.use(express.static(__dirname+'/public'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use('/', require('./routes/routes'));
app.use('/', require('./routes/routeAdmin'));
app.use('/', require('./routes/routeCompra'));
app.use('/', require('./routes/routSeguridad'));

app.use(require('./routes/routAsesorias'))
app.use(require('./routes/routUsuario'))
app.use(require('./routes/routProductp'))
app.use(require('./routes/routEmpresa'))
app.use(require('./routes/routCategoria'))
app.use(require('./routes/routSeguridad'))
app.use(require('./routes/routReportes'))
app.use(require('./routes/routPedido'))


app.listen(8000, ()=>
console.log("Servidor corriendo en el puerto 8000"))