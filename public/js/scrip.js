"use strict"

//Declarando variables:

var botonOpen = document.getElementById("btn-open");
var barraLateral = document.getElementById("pull-down");
var contentAll = document.getElementById("content-all");

botonOpen.addEventListener("click", dezplegarBarra);

function dezplegarBarra(){
    barraLateral.classList.toggle("barra-dezplegada")
    barraLateral.classList.toggle("pull-down")
    contentAll.classList.toggle("contenido-barra-dezplegada")
}
function logout (){
    let url = '/auth/lagout';
    let config = {
        method: 'POST',
        body: ""
    }
    fetch(url, config)
    .then(res => res.json())
    .then(data=> {
        localStorage.removeItem('token');
        if(data.status == 'error') return window.location.href = '/';
        else window.location.href = '/'
    })
    .catch(err => console.log(err))
}
