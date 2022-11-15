document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(dispositivo =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?dispositivo.classList.remove("filtro")
              :dispositivo.classList.add("filtro")
        })
  
    }
  
  
  })