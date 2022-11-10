
  let token = localStorage.getItem('token');
  window.addEventListener("load", async() =>{
    await Listar_Productos();
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

     /// Datatable iniciandola

     let dataTable;
     let dataTableIsInitialized = false;
 
/*      const dataTableOpciont = {
       pageLenght: 1, 
     }
 
     const initDataTable = async () =>{
       if (dataTableIsInitialized){
          dataTable.destroy()
          console.log('hola');
       }
       
       await Listar_Productos();
    
 
       dataTable = $("#tabla_content").dataTable(dataTableOpciont);
 
       dataTableIsInitialized = true;
     };
 */
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
      let nombre = document.getElementById('nombre').value;
      let referencia = document.getElementById('referencia').value;
      let descripcion = document.getElementById('descripcion').value;
      let tipoProducto = document.getElementById('tipoProducto').value;
      let estadoProducto = document.getElementById('estadoProducto').value;
      let precioCom = document.getElementById('precioCom').value;
      let precioVen = document.getElementById('precioVen').value;
      let stock = document.getElementById('stock').value;
      let categoria = document.getElementById('categoria').value;
      let empresa = document.getElementById('empresa').value;
      if( !nombre.trim() || !referencia.trim() || !descripcion.trim() || !tipoProducto.trim() || !estadoProducto.trim() || !precioCom.trim() || !precioVen.trim() || !stock.trim() || !categoria.trim() || !empresa.trim() ) return false;
      else return true;
    }



          // CUARTO PASO: 

function Actualizar_Producto(){
  if(!validar_Campos()) return alert('COMPLETA CAMPOS');
    let datos = new URLSearchParams()
    datos.append('codigo', document.getElementById('id').value)
    datos.append('nombre', document.getElementById('nombre').value)
    datos.append('referencia', document.getElementById('referencia').value)
    datos.append('descripcion', document.getElementById('descripcion').value)
    datos.append('tipoProducto', document.getElementById('tipoProducto').value)
    datos.append('estadoProducto', document.getElementById('estadoProducto').value)
    datos.append('precioCom', document.getElementById('precioCom').value)
    datos.append('precioVen', document.getElementById('precioVen').value)
    datos.append('stock', document.getElementById('stock').value)
    datos.append('categoria', document.getElementById('categoria').value)
    datos.append('empresa', document.getElementById('empresa').value)
    console.log(datos)
  
    fetch('/actualizarProducto',
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
        Listar_Productos();
  
    });
  
  }

        /// TERCER PASO: identificar a la persoana que se va a resgistrar

        function identificar_Producto(PK_codigoProducto){
      
            fetch(`/identProducto/${PK_codigoProducto}` ,{
              method: 'get'
            })
            .then(resp=>resp.json())
            .then(data=>{
              console.log(data) 
              document.getElementById('id').value=data[0].PK_codigoProducto;
              document.getElementById('nombre').value=data[0].nombreProducto; 
              document.getElementById('referencia').value=data[0].referencia;
              document.getElementById('descripcion').value=data[0].descripcion;
              document.getElementById('tipoProducto').value=data[0].tipoProducto; 
              document.getElementById('estadoProducto').value=data[0].estadoProducto;
              document.getElementById('precioCom').value=data[0].precioCompra;  
              document.getElementById('precioVen').value=data[0].precioVenta; 
              document.getElementById('stock').value=data[0].stock; 
              document.getElementById('categoria').value=data[0].FK_idCategoria; 
              document.getElementById('empresa').value=data[0].FK_idEmpresa; 
              MyModal.show()
              ocultarBtnRegistar ()
            })
            console.log('hola')
      }

     // SEGUNDO PASO: Registrar datos en la tabla 

     function registrar_Producto(){
      if(!validar_Campos()) return alert('COMPLETA CAMPOS');
        let datos = new URLSearchParams()
        datos.append('codigo', document.getElementById('id').value)
        datos.append('nombre', document.getElementById('nombre').value)
        datos.append('referencia', document.getElementById('referencia').value)
        datos.append('descripcion', document.getElementById('descripcion').value)
        datos.append('tipoProducto', document.getElementById('tipoProducto').value)
        datos.append('estadoProducto', document.getElementById('estadoProducto').value)
        datos.append('precioCom', document.getElementById('precioCom').value)
        datos.append('precioVen', document.getElementById('precioVen').value)
        datos.append('stock', document.getElementById('stock').value)
        datos.append('categoria', document.getElementById('categoria').value)
        datos.append('empresa', document.getElementById('empresa').value)
        console.log(datos)


        fetch('/registrarProducto',{
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
                    Listar_Productos()

      }

    ///     PRIMER PASO: listar desde la base de datos e Insertar datos en la tabla
    
    function Listar_Productos(){
            
    fetch("/mostrarProducto",{
        method : 'GET'
    }).then(resp => resp.json()
    ).then (data => {
      for (let i = 0; i< data.length; i++) {
        const element = data[i];
        data[i] = {
          ...data[i],
          accion: `<a href='javascript:identificar_Producto(${data[i].PK_codigoProducto});'
          class='btn btn-primary' >Actualizar</a>`
        }}

        $('#tabla_content').DataTable({
          "paging": true,
          "autoWidth": false,
          "processing": true,
           scroollX: true,
          "pageLength" : 6,
          "responsive": true,
          "destroy": true,
          "data": data,
          "columns": [
            {"data": "nombreProducto"},
            {"data": "referencia"},
            {"data": "descripcion"},
            {"data": "tipoProducto"},
            {"data": "estadoProducto"},
            {"data": "precioCompra"},
            {"data": "precioVenta"},  
            {"data": "stock"},
            {"data": "FK_idCategoria"},
            {"data": "FK_idEmpresa"},
            {"data": "accion"} 
          ]
        }) 
    })
}