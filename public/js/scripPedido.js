let token = localStorage.getItem('token');
    window.addEventListener("load", async() =>{
      await 
      pedidos()
      identificar_pedido();
      if(!token) window.location.href = '/'
      console.log(token)
    })

    var MyModal = new bootstrap.Modal(document.getElementById('MyModal'), {
      keyboard: false
      })
  

    function Abrir_Modal(){
      MyModal.show();
      }

function pedidos(){

    console.log('holllllllllllllll')
          
      fetch("/pedido",{
          method : 'GET'
      }).then(resp => resp.json()
      ).then (data => {

        for (let i = 0; i< data.length; i++) {
          const element = data[i];
          data[i] = {
            ...data[i],
            accion: `<a href='javascript:identificar_todosPedidos(${data[i].Nº});'
            class='btn btn-primary' >Actualizar</a>`
          }}

            $('#tabla_content').DataTable({
              "paging": true,
              "autoWidth": false,
              "processing": true,
/*             scroollY: true,
 */           "pageLength" : 6,
              "responsive": true,
              "destroy": true,
              "data": data,
              dom: 'Bfrtip',
              buttons:[
                 'excel', 'pdf'
              ],
              columns: [
                            {"data": "Nº"},
                            {"data": "Cliente"},
                            {"data": "Estado"},
                            {"data": "Fecha"},
                            {"data": "accion"}
                        ]
            }) 
      })
  }


  function Actualizar_Pedido(){  
    let datos = new URLSearchParams()
            datos.append('id', document.getElementById('id').value)
            datos.append('estado', document.getElementById('estado').value)
            console.log(datos)
  
    fetch('/actualizarpedido',
      {
        method: 'POST',
        body:datos
    }).then(resp=>resp.json())
    .then(data=>{
        
        MyModal.hide();
        Swal.fire({
        position: 'Estado',
        icon: 'success',
        title: "Actualizado Correctamente",
        showConfirmButton: false,
        timer: 1500
        })
        pedidos()
        identificar_pedido()
    });
  
  }



  function identificar_todosPedidos(PK_idCompra){
    fetch(`/identPedidos/${PK_idCompra}`,{
      method: 'get'
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data) 
      document.getElementById('id').value=data[0].Nº
      document.getElementById('estado').value=data[0].Estado
      Abrir_Modal()
      ocultarBtnRegistar ()
    })
}



function ocultarBtnRegistar () {
  document.getElementById("registrar").style.display = "none";
  document.getElementById("actualizar").style.display = "block";
  document.getElementById("close").style.display = "block";
  document.getElementById("salir").style.display = "none";
  }


  function identificar_pedido(pedidos){
      
    fetch(`/pedidosPendientes` ,{
      method: 'get'
    })
    .then(resp=>resp.json())
    .then(data=>{
        let pedido = ``
        data.forEach(element => {
            pedido+=`"${element.pedidos}"`
        });
      console.log(data) 
      document.getElementById('pedidos').innerHTML= pedido;
      console.log(pedido)
    })
    
}


function logout(){
  let url = '/auth/lagout';
  let config = {
      method: 'POST',
      body: ""
  }
  fetch(url, config)
  .then(res => res.json())
  .then(data=> {
      localStorage.removeItem('token');
      if(data.status == 'error')  return window.location.href = '/'
      else window.location.href = '/'
  })
  .catch(err => console.log(err))
}



