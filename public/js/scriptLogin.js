function validarUsuario(){    
    let datos= new URLSearchParams();

    datos.append('correo',document.getElementById('correo').value);
    datos.append('password',document.getElementById('password').value);

        fetch('/validar',
            {
                method: 'POST',
                body:datos
            })
             .then(resp =>{
              if(resp.status == 200) return resp.json();
              if(resp.status == 403) alert('Usuario no autorizado')
            })
            .then(data =>{
              if(data.autorizado) {
                localStorage.setItem('token',data.token);
               
                console.log(data)
                if(data.data.tipoUsuario == "Administrador")  window.location.href = '/InicioAdmin' 
                else  window.location.href = '/Home' 
              } else {
              }
            });
}