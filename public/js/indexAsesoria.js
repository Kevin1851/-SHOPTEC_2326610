Listar_Asoerias()

    var MyModal = new bootstrap.Modal(document.getElementById('MyModal'), {
    keyboard: false
    })


    function Abrir_Modal(){
    MyModal.show();
    ocultarBtnActualizar ()
    }

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

    function identificar_Asesoria(PK_idAsesoria){
      
      fetch(`/identAsesoria/${PK_idAsesoria}` ,{
        method: 'get'
      })
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data) 
        document.getElementById('id').value=data[0].PK_idAsesoria;
        document.getElementById('fecha').value=data[0].fechaAsesoria; 
        document.getElementById('tema').value=data[0].tema;
        document.getElementById('duracion').value=data[0].duracion;
        document.getElementById('calificacion').value=data[0].Calificacion; 
        document.getElementById('idAsesor').value=data[0].FK_idUasesor; 
        document.getElementById('idcliente').value=data[0].idUcliente; 
        document.getElementById('correo').value=data[0].correoCliente; 
        document.getElementById('nombre').value=data[0].nombreCliente; 
        MyModal.show()

        ocultarBtnRegistar ()
      })
      console.log('hola')
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




  // SEGUNDO PASO: Registrar datos en la tabla 

    function validar_Campos(){
      let fecha = document.getElementById('fecha').value;
      let tema = document.getElementById('tema').value;
      let duracion = document.getElementById('duracion').value;
      let calificacion = document.getElementById('calificacion').value;
      let asesor = document.getElementById('idAsesor').value;
      let cliente = document.getElementById('idcliente').value;
      let correo = document.getElementById('correo').value;
      let nombre = document.getElementById('nombre').value;
      if( !fecha.trim() || !tema.trim() || !duracion.trim() || !calificacion.trim() || !asesor.trim() || !cliente.trim() || !correo.trim() || !nombre.trim() ) return false;
      else return true;
    }



    // QUINTO PASO : Eliminar persona

    function Eliminar_Asesoria(PK_idAsesoria){   
        
      fetch(`/eliminarAsesoria/${PK_idAsesoria}`,
      {   method: 'get'
      }).then(resp=>resp.json())
      .then(data=>{
          Swal.fire({
          position: 'Estado',
          icon: 'success',
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
          })
          Listar_Asoerias();
      });
}

    // CUARTO PASO: 

function Actualizar_Asesoria(){
  if(document.getElementById('idcliente').value <= 0) 
    return alert('Digita una identificacion válida');
  if(!validar_Campos()) return alert('COMPLETA CAMPOS');
  if (!validateEmail()) return alert('CORREO INVALIDO');
  let datos = new URLSearchParams()
  datos.append('PK_idAsesoria', document.getElementById('id').value) 
  datos.append('fecha', document.getElementById('fecha').value)
  datos.append('tema', document.getElementById('tema').value)
  datos.append('duracion', document.getElementById('duracion').value)
  datos.append('calificacion', document.getElementById('calificacion').value)
  datos.append('idAsesor', document.getElementById('idAsesor').value)
  datos.append('idcliente', document.getElementById('idcliente').value)
  datos.append('correo', document.getElementById('correo').value)
  datos.append('nombre', document.getElementById('nombre').value)
  console.log(datos)


  fetch('/actualizarAsesoria',
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
      Listar_Asoerias();

  });

}



    /// TERCER PASO: identificar a la persoana que se va a resgistrar

  

      function registrar_Asesoria(){
        if(document.getElementById('idcliente').value <= 0) 
          return alert('Digita una identificacion válida');
        if(!validar_Campos()) return alert('COMPLETA CAMPOS');
        if (!validateEmail()) return alert('CORREO INVALIDO');
        
        let datos = new URLSearchParams()
        datos.append('codigo', document.getElementById('id').value)
        datos.append('fecha', document.getElementById('fecha').value)
        datos.append('tema', document.getElementById('tema').value)
        datos.append('duracion', document.getElementById('duracion').value)
        datos.append('calificacion', document.getElementById('calificacion').value)
        datos.append('idAsesor', document.getElementById('idAsesor').value)
        datos.append('idcliente', document.getElementById('idcliente').value)
        datos.append('correo', document.getElementById('correo').value)
        datos.append('nombre', document.getElementById('nombre').value)
        console.log(datos)

        


        fetch('/registrarAsesoria',{
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
                    Listar_Asoerias()

      }


    ///     PRIMER PASO: listar desde la base de datos e Insertar datos en la tabla

    function Listar_Asoerias(){
                  
        fetch("/mostrarAsesoria",{
            method : 'GET'
        }).then(resp => resp.json()
        ).then (data => {
            console.log(data);

            let html ="";

            for(var i = 0; i<data.length; i++){
                html+=`<tr><td>${data[i].PK_idAsesoria }</td>`
                html+=`<td>${data[i].fechaAsesoria}</td>`
                html+=`<td>${data[i].tema}</td>`
                html+=`<td>${data[i].duracion}</td>`
                html+=`<td>${data[i].Calificacion}</td>`
                html+=`<td>${data[i].FK_idUasesor}</td>`
                html+=`<td>${data[i].idUcliente}</td>`
                html+=`<td>${data[i].correoCliente}</td>`
                html+=`<td>${data[i].nombreCliente}</td>`
                html+=`<td>
                  <a href='javascript:Eliminar_Asesoria(${data[i].PK_idAsesoria });'
                    class='btn btn-danger' >Eliminar</a>
                  <a href='javascript:identificar_Asesoria(${data[i].PK_idAsesoria});'
                  class='btn btn-primary' >Actualizar</a>
                </td>`;
                html+=`</tr>`
            }

            document.getElementById('tabla').innerHTML=html;


        }) 
    }


  





