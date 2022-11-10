
    let token = localStorage.getItem('token');
    window.addEventListener("load", async() =>{
      await Listar_categoria();
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
        if(!id.trim() || !nombre.trim()) return false;
        else return true;
      }

    // CUARTO PASO: 

function Actualizar_Categoria(){
     if(!validar_Campos()) return alert('COMPLETA CAMPOS'); 
        let datos = new URLSearchParams()
        datos.append('id', document.getElementById('id').value)
        datos.append('nombre', document.getElementById('nombre').value)
            console.log(datos)
      
        fetch('/actualizarcategoria',
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
            Listar_categoria();
      
        });
      
      }

     /// TERCER PASO: identificar a la persoana que se va a resgistrar

     function identificar_Categoria(PK_idCategoria){
      
        fetch(`/identCategoria/${PK_idCategoria}` ,{
          method: 'get'
        })
        .then(resp=>resp.json())
        .then(data=>{
          console.log(data) 
          document.getElementById('id').value=data[0].PK_idCategoria
          document.getElementById('nombre').value=data[0].nombreCategoria; 
          MyModal.show()
          ocultarBtnRegistar ()
        })
        console.log('hola')
  }


    // SEGUNDO PASO: Registrar datos en la tabla 

    function registrar_Categoria(){
       /*  if(!validar_Campos()) return alert('COMPLETA CAMPOS'); */
          let datos = new URLSearchParams()
          datos.append('id', document.getElementById('id').value)
          datos.append('nombre', document.getElementById('nombre').value)
          console.log(datos)
  
  
          fetch('/registrarCategoria',{
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
                      Listar_categoria()
  
        }


    ///     PRIMER PASO: listar desde la base de datos e Insertar datos en la tabla
    
    function Listar_categoria(){

      console.log('holllllllllllllll')
            
        fetch("/mostrarCategoria",{
            method : 'GET'
        }).then(resp => resp.json()
        ).then (data => {

          for (let i = 0; i< data.length; i++) {
            const element = data[i];
            data[i] = {
              ...data[i],
              accion: `<a href='javascript:identificar_Categoria(${data[i].PK_idCategoria});'
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
                  {"data": "PK_idCategoria"},
                  {"data": "nombreCategoria"},
                  {"data": "accion"}
                ]
              }) 
        })
    }