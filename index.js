document.getElementById("unoV").addEventListener("click", botonDesabilitadoUno);
document.getElementById("unoF").addEventListener("click", botonDesabilitadoUno);
document.getElementById("dosV").addEventListener("click", botonDesabilitadoDos);
document.getElementById("dosF").addEventListener("click", botonDesabilitadoDos);
document.getElementById("tresV").addEventListener("click", botonDesabilitadoTres);
document.getElementById("tresF").addEventListener("click", botonDesabilitadoTres);
document.getElementById("reiniciar").addEventListener("click", reiniciarBotones);
document.getElementById("enviar").addEventListener("click", comprobar);



function botonDesabilitadoUno() {
    var btnUnoVDesabilitado = document.getElementById("unoV");
    btnUnoVDesabilitado.disabled = true;

    var btnUnoFDesabilitado = document.getElementById("unoF");
    btnUnoFDesabilitado.disabled = true;
}

function botonDesabilitadoDos() {
    var btnUnoFDesabilitado = document.getElementById("dosV");
    btnUnoFDesabilitado.disabled = true;

    var btnUnoFDesabilitado = document.getElementById("dosF");
    btnUnoFDesabilitado.disabled = true;
}

function botonDesabilitadoTres() {
    var btnUnoFDesabilitado = document.getElementById("tresV");
    btnUnoFDesabilitado.disabled = true;

    var btnUnoFDesabilitado = document.getElementById("tresF");
    btnUnoFDesabilitado.disabled = true;
}


function reiniciarBotones() {
    var btnUnoVDesabilitado = document.getElementById("unoV");
    btnUnoVDesabilitado.disabled = false;
    var btnUnoFDesabilitado = document.getElementById("unoF");
    btnUnoFDesabilitado.disabled = false;
    var btnUnoFDesabilitado = document.getElementById("dosV");
    btnUnoFDesabilitado.disabled = false;
    var btnUnoFDesabilitado = document.getElementById("dosF");
    btnUnoFDesabilitado.disabled = false;
    var btnUnoFDesabilitado = document.getElementById("tresV");
    btnUnoFDesabilitado.disabled = false;
    var btnUnoFDesabilitado = document.getElementById("tresF");
    btnUnoFDesabilitado.disabled = false;
}


function comprobar() {
    var btnDesabilitadoUnoV = document.getElementById("unoV");
    var btnDesabilitadoUnoF = document.getElementById("unoF");
    var btnDesabilitadoDosV = document.getElementById("dosV");
    var btnDesabilitadoDosF = document.getElementById("dosF");
    var btnDesabilitadoTresV = document.getElementById("tresV");
    var btnDesabilitadoTresF = document.getElementById("tresF");

    // evento "comprobar que ninguna respuesta fue marcada"
    if (btnDesabilitadoUnoV.disabled == false &&
        btnDesabilitadoDosV.disabled == false &&
        btnDesabilitadoTresV.disabled == false) {
        alert("No respondiste a ninguna pregunta, debes responder a todas las preguntas antes de enviar");
    }


    // envento "enviar"
    if (btnDesabilitadoUnoV.disabled == true && btnDesabilitadoDosV.disabled == true && btnDesabilitadoTresV.disabled == true) {
        alert("Enviando respuesta...");
    } else {


        // evento "comprobar  si hay dos respuestas marcadas"
        if (
            btnDesabilitadoUnoV.disabled == true && btnDesabilitadoDosV.disabled == true || btnDesabilitadoUnoV.disabled == true && btnDesabilitadoTresV.disabled == true ||
            btnDesabilitadoDosV.disabled == true && btnDesabilitadoTresV.disabled == true
        ) {
            alert("El numero de respuestas marcadas es 2/3, debes responder a todas las preguntas antes de enviar");
        } else {
            // evento "comprovar si hay una respuesta marcada" 
            if (
                btnDesabilitadoUnoV.disabled == true ||
                btnDesabilitadoDosV.disabled == true ||
                btnDesabilitadoTresV.disabled == true
            ) {
                alert("El numero de respuestas marcadas es 1/3, debes responder a todas las preguntas antes de enviar");
            }
        }
    }
}



