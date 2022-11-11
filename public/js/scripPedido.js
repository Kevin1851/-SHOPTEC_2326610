let token = localStorage.getItem('token');
    window.addEventListener("load", async() =>{
      await 
      pedidos()
      identificar_pedido();
      if(!token) window.location.href = '/'
      console.log(token)
    })


function pedidos(){

    console.log('holllllllllllllll')
          
      fetch("/pedido",{
          method : 'GET'
      }).then(resp => resp.json()
      ).then (data => {
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
                            {"data": "Fecha"}
                        ]
            }) 
      })
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


function pedidosPendientes(){

    console.log('holllllllllllllll')
          
      fetch("/pedidoP",{
          method : 'GET'
      }).then(resp => resp.json()
      ).then (data => {
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
                            {"data": "cliente"},
                            {"data": "fecha"},
                            {"data": "producto"},
                            {"data": "total"}
                        ]
            }) 
      })
  }
