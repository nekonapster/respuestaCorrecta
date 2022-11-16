document.getElementById("unoV").addEventListener("click", botonDesabilitadoUno);
document.getElementById("unoF").addEventListener("click", botonDesabilitadoUno);
document.getElementById("dosV").addEventListener("click", botonDesabilitadoDos);
document.getElementById("dosF").addEventListener("click", botonDesabilitadoDos);
document.getElementById("tresV").addEventListener("click", botonDesabilitadoTres);
document.getElementById("tresF").addEventListener("click", botonDesabilitadoTres);
document.getElementById("reiniciar").addEventListener("click", reiniciarBotones);



function reiniciarBotones(){
    var btnUnoVDesabilitado  = document.getElementById("unoV");
    btnUnoVDesabilitado.disabled=false;
    var btnUnoFDesabilitado =document.getElementById("unoF");
    btnUnoFDesabilitado.disabled=false;
    var btnUnoFDesabilitado =document.getElementById("dosV");
    btnUnoFDesabilitado.disabled=false;
    var btnUnoFDesabilitado =document.getElementById("dosF");
    btnUnoFDesabilitado.disabled=false;
    var btnUnoFDesabilitado =document.getElementById("tresV");
    btnUnoFDesabilitado.disabled=false;
    var btnUnoFDesabilitado =document.getElementById("tresF");
    btnUnoFDesabilitado.disabled=false;
}


function botonDesabilitadoUno() {
    var btnUnoVDesabilitado  = document.getElementById("unoV");
    btnUnoVDesabilitado.disabled=true;
    
    var btnUnoFDesabilitado =document.getElementById("unoF");
    btnUnoFDesabilitado.disabled=true;
}

function botonDesabilitadoDos(){
    var btnUnoFDesabilitado =document.getElementById("dosV");
    btnUnoFDesabilitado.disabled=true;
    
    var btnUnoFDesabilitado =document.getElementById("dosF");
    btnUnoFDesabilitado.disabled=true;
}

function botonDesabilitadoTres(){
    var btnUnoFDesabilitado =document.getElementById("tresV");
    btnUnoFDesabilitado.disabled=true;
    
    var btnUnoFDesabilitado =document.getElementById("tresF");
    btnUnoFDesabilitado.disabled=true;
}

