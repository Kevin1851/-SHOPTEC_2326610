    let token = localStorage.getItem('token');
    window.addEventListener("load", async() =>{
      await Listar_Usuario();
      if(!token) window.location.href = '/'
      console.log(token)
    })

    var MyModal = new bootstrap.Modal(document.getElementById('MyModal'), {
    keyboard: false
    })


    function Abrir_Modal(){
    MyModal.show();
    ocultarBtnActualizar ()
    if(validar_Campos()) {
    document.getElementById('identificacion').value="";
    document.getElementById('nombre').value="";
    document.getElementById('fechaNacimiento').value="";
    document.getElementById('estado').value="";
    document.getElementById('contreseña').value="";
    document.getElementById('correo').value="";
    document.getElementById('telefono').value="";
    document.getElementById('rol').value="";
    };
    }


    /// Datatable iniciandola

    let dataTable2;
    let dataTableIsInitialized = false;
    

    /// ocultar buttom 

    function ocultarBtnActualizar () {
    document.getElementById("actualizar").style.display = "none";
    document.getElementById("registrar").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("salir").style.display = "block";
    }

    function ocultarBtnRegistar () {
    document.getElementById("registrar").style.display = "none";
    document.getElementById("actualizar").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("salir").style.display = "none";
    }


/// funcion para validar el emai
function validateEmail(){          
	// Get our input reference.
	var correoc = document.getElementById('correo');
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	// Using test we can check if the text match the pattern
	if( validEmail.test(correoc.value) ){
		return true;
	}else{
		return false;
	}
} 

/// funcion para validar la mayuoria de los campos

  function validar_Campos(){
    let identificacion = document.getElementById('identificacion').value;
    let nombre = document.getElementById('nombre').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let estado = document.getElementById('estado').value;
    let contreseña = document.getElementById('contreseña').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let rol = document.getElementById('rol').value;
    if( !identificacion.trim() || !nombre.trim() || !fechaNacimiento.trim() || !estado.trim() || !contreseña.trim() || !contreseña.trim() || !correo.trim() || !telefono.trim() || !rol.trim() ) return false;
    else return true;

  }

        // CUARTO PASO: 

  function Actualizar_Usuario(){
    if(!validar_Campos()) return alert('COMPLETA CAMPOS');
    if(document.getElementById('identificacion').value <= 0) 
      return alert('Digita una identificacion válida');
    if (!validateEmail()) return alert('CORREO INVALIDO');
  
    let datos = new URLSearchParams()
            datos.append('codigo', document.getElementById('id').value)
            datos.append('identificacion', document.getElementById('identificacion').value)
            datos.append('nombreUsuario', document.getElementById('nombre').value)
            datos.append('fechaNacimiento', document.getElementById('fechaNacimiento').value)
            datos.append('estadoUsuario', document.getElementById('estado').value)
            datos.append('contrasenia', document.getElementById('contreseña').value)
            datos.append('correo', document.getElementById('correo').value)
            datos.append('telefono', document.getElementById('telefono').value)
            datos.append('TipoUsuario', document.getElementById('rol').value)
            console.log(datos)
  
    fetch('/actualizarUsuario',
      {
        method: 'POST',
        body:datos
    }).then(resp=>resp.json())
    .then(data=>{
        
        MyModal.hide();
        Swal.fire({
        position: 'Estado',
        icon: 'success',
        title: data.mensaje,
        showConfirmButton: false,
        timer: 1500
        })
        Listar_Usuario();
  
    });
  
  }

     /// TERCER PASO: identificar a la persoana que se va a resgistrar

     function identificar_Ususario(PK_id_usuario){
      
        fetch(`/identUsuario/${PK_id_usuario}` ,{
          method: 'get'
        })
        .then(resp=>resp.json())
        .then(data=>{
          console.log(data) 
          document.getElementById('id').value=data[0].PK_id_usuario
          document.getElementById('identificacion').value=data[0].identificacion; 
          document.getElementById('nombre').value=data[0].nombreUsuario;
          document.getElementById('fechaNacimiento').value=data[0].fechaNacimiento;
          document.getElementById('estado').value=data[0].estadoUsuario; 
          document.getElementById('contreseña').value=data[0].contrasenia; 
          document.getElementById('correo').value=data[0].correo; 
          document.getElementById('telefono').value=data[0].telefono; 
          document.getElementById('rol').value=data[0].TipoUsuario; 
          MyModal.show()
          ocultarBtnRegistar ()
        })
  }

        // SEGUNDO PASO: Registrar datos en la tabla 

        function registrar_Usuario(){
          if(!validar_Campos()) return alert('COMPLETA CAMPOS');
          if (!validateEmail()) return alert('CORREO INVALIDO');
          if(document.getElementById('identificacion').value <= 0) 
          return alert('Digita una identificacion válida');
            let datos = new URLSearchParams()
            let fecha = document.getElementById('fechaNacimiento').value
            fecha = new Date()
            datos.append('codigo', document.getElementById('id').value)
            datos.append('identificacion', document.getElementById('identificacion').value)
            datos.append('nombreUsuario', document.getElementById('nombre').value)
            datos.append('fechaNacimiento', fecha)
            datos.append('estadoUsuario', document.getElementById('estado').value)
            datos.append('contrasenia', document.getElementById('contreseña').value)
            datos.append('correo', document.getElementById('correo').value)
            datos.append('telefono', document.getElementById('telefono').value)
            datos.append('TipoUsuario', document.getElementById('rol').value)
            console.log(datos)
    
    
            fetch('/registrarUsuario',{
                            method : 'POST', 
                            body: datos
                        }).then(resp=>resp.json()
                        ).then(data=>{
                          MyModal.hide();
                          Swal.fire({
                          position: 'Estado',
                          icon: 'success',
                          title: data.mensaje,
                          showConfirmButton: false,
                          timer: 1500
                          })
                        });
                        Listar_Usuario()
    
          }


     ///     PRIMER PASO: listar desde la base de datos e Insertar datos en la tabla

     function Listar_Usuario(){
        fetch("/mostrarUsuario",{
            method : 'GET'
        }).then(resp => resp.json()
        ).then (data => {

          for (let i = 0; i< data.length; i++) {
          const element = data[i];
          data[i] = {
            ...data[i],
            accion: `<a href='javascript:identificar_Ususario(${data[i].PK_id_usuario});'
            class='btn btn-primary' >Actualizar</a>`
          }}
            $('#tabla_content').DataTable({
              "paging": true,
              "autoWidth": false,
              "processing": true,
              "pageLength" : 6,
              "responsive": true,
              "destroy": true,
              "data": data,
              "columns": [
                {"data": "PK_id_usuario"},
                {"data": "identificacion"},
                {"data": "nombreUsuario"},
                {"data": "fechaNacimiento"},
                {"data": "estadoUsuario"},
                {"data": "correo"},
                {"data": "telefono"},  
                {"data": "TipoUsuario"},
                {"data": "accion"} 
              ]
            })
        }) 
    }