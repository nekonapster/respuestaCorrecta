
document.getElementById("unoV").addEventListener("click", botonDesabilitado);
document.getElementById("unoF").addEventListener("click", botonDesabilitado);




function botonDesabilitado() {
    var btnUnoVDesabilitado  = document.getElementById("unoV");
    btnUnoVDesabilitado.disabled=true;
    
    var btnUnoFDesabilitado =document.getElementById("unoF");
    btnUnoFDesabilitado.disabled=true;
}

