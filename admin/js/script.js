"use strict"

//Declarando variables:

var botonOpen = document.getElementById("btn-open");
var barraLateral = document.getElementById("pull-down");

botonOpen.addEventListener("click", dezplegarBarra);

function dezplegarBarra(){
    barraLateral.classList.toggle("barra-dezplegada")
    barraLateral.classList.toggle("pull-down")
}