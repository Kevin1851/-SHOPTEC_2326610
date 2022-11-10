reporte1()
function reporte1(){

    console.log('holllllllllllllll')
          
      fetch("/reporte1",{
          method : 'GET'
      }).then(resp => resp.json()
      ).then (data => {
            $('#tabla_content').DataTable({
              "paging": true,
              "autoWidth": false,
              "processing": true,
/*               scroollY: true,
 */              "pageLength" : 6,
              "responsive": true,
              "destroy": true,
              "data": data,
              dom: 'Bfrtip',
              buttons:[
                'copy', 'csv', 'excel', 'pdf', 'print'
              ],
              columns: [
                            {"data": "identificacion"},
                            {"data": "Nombre"},
                            {"data": "producto"},
                            {"data": "cantidad"},
                            {"data": "Precio"},
                            {"data": "Total"}
                        ]
            }) 
      })
  }
