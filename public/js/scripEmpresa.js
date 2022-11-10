
let token = localStorage.getItem('token');
window.addEventListener("load", async() =>{
  await Listar_Empresa();
  if(!token) window.location.href = '/'
  console.log(token)
})
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


    function validar_Campos(){
      let id = document.getElementById('id').value;
      let nombre = document.getElementById('nombre').value;
      let ubicacion = document.getElementById('ubicacion').value;
      let propieatrio = document.getElementById('propieatrio').value;
      if(!id.trim() || !nombre.trim() || !ubicacion.trim() || !propieatrio.trim() ) return false;
      else return true;
    }


        // CUARTO PASO: 

function Actualizar_Empresa(){
if(!validar_Campos()) return alert('COMPLETA CAMPOS');
    let datos = new URLSearchParams()
    datos.append('nit', document.getElementById('id').value)
    datos.append('nombre', document.getElementById('nombre').value)
    datos.append('ubicacion', document.getElementById('ubicacion').value)
    datos.append('propieatrio', document.getElementById('propieatrio').value)
        console.log(datos)
  
    fetch('/actualizarEmpresa',
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
        Listar_Empresa();
  
    });
  
  }

     /// TERCER PASO: identificar a la persoana que se va a resgistrar

     function identificar_Empresa(PK_nitEmpresa){
      
        fetch(`/identEmpresa/${PK_nitEmpresa}` ,{
          method: 'get'
        })
        .then(resp=>resp.json())
        .then(data=>{
          console.log(data) 
          document.getElementById('id').value=data[0].PK_nitEmpresa
          document.getElementById('nombre').value=data[0].nombre; 
          document.getElementById('ubicacion').value=data[0].ubicacion;
          document.getElementById('propieatrio').value=data[0].FK_propietario;
          MyModal.show()
          ocultarBtnRegistar ()
        })
        console.log('hola')
  }

         // SEGUNDO PASO: Registrar datos en la tabla 

         function registrar_Empresa(){
          if(!validar_Campos()) return alert('COMPLETA CAMPOS');
            let datos = new URLSearchParams()
            datos.append('nit', document.getElementById('id').value)
            datos.append('nombre', document.getElementById('nombre').value)
            datos.append('ubicacion', document.getElementById('ubicacion').value)
            datos.append('propieatrio', document.getElementById('propieatrio').value)
            console.log(datos)
    
    
            fetch('/registrarEmpresa',{
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
                        Listar_Empresa()
    
          }

     ///     PRIMER PASO: listar desde la base de datos e Insertar datos en la tabla
    
     function Listar_Empresa(){
            
        fetch("/mostrarEmpresa",{
            method : 'GET'
        }).then(resp => resp.json()
        ).then (data => {
          for (let i = 0; i< data.length; i++) {
            const element = data[i];
            data[i] = {
              ...data[i],
              accion: `<a href='javascript:identificar_Empresa(${data[i].PK_nitEmpresa});'
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
                  {"data": "PK_nitEmpresa"},
                  {"data": "nombre"},
                  {"data": "ubicacion"},
                  {"data": "FK_propietario"},
                  {"data": "accion"}
                ]
              })
        })
    }