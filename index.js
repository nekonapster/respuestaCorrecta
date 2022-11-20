
var respuestaCorrectaUno = true
var respuestaCorrectaDos = false
var respuestaCorrectaTres = true

var miRespuestaUno = ""
var miRespuestaDos = ""
var miRespuestaTres = ""

var unoV = document.getElementById("unoV")
var unoF = document.getElementById("unoF")
var dosV = document.getElementById("dosV")
var dosF = document.getElementById("dosF")
var tresV = document.getElementById("tresV")
var tresF = document.getElementById("tresF")

var reiniciar = document.getElementById("reiniciar")
var enviar = document.getElementById("enviar")

unoV.addEventListener("click", botonDesabilitadoUnoV);
unoF.addEventListener("click", botonDesabilitadoUnoF);
dosV.addEventListener("click", botonDesabilitadoDosV);
dosF.addEventListener("click", botonDesabilitadoDosF);
tresV.addEventListener("click", botonDesabilitadoTresV);
tresF.addEventListener("click", botonDesabilitadoTresF);

reiniciar.addEventListener("click", reiniciarBotones);
enviar.addEventListener("click", comprobar);


function botonDesabilitadoUnoV() {
    miRespuestaUno = true

    unoV.disabled = true;
    unoF.disabled = true;
}

function botonDesabilitadoUnoF() {
    miRespuestaUno = false

    unoV.disabled = true;
    unoF.disabled = true;
}

function botonDesabilitadoDosV() {
    miRespuestaDos = true

    dosV.disabled = true;
    dosF.disabled = true;
}

function botonDesabilitadoDosF() {
    miRespuestaDos = false

    dosV.disabled = true;
    dosF.disabled = true;
}

function botonDesabilitadoTresV() {
    miRespuestaTres = true

    tresV.disabled = true;
    tresF.disabled = true;
}

function botonDesabilitadoTresF() {
    miRespuestaTres = false

    tresV.disabled = true;
    tresF.disabled = true;
}

function reiniciarBotones() {
    unoV.disabled = false;
    unoF.disabled = false;
    dosV.disabled = false;
    dosF.disabled = false;
    tresV.disabled = false;
    tresF.disabled = false;
}+98

function comprobar() {
    var respondidas = 0

    if (unoV.disabled === true) {
        respondidas++
    }

    if (dosV.disabled === true) {
        respondidas++
    }

    if (tresV.disabled === true) {
        respondidas++
    }

    if (respondidas < 3) {
        alert("El numero de respuestas marcadas es " + respondidas + "/3, debes responder a todas las preguntas antes de enviar");
    } else if (respondidas === 0)  {
        alert("No respondiste a ninguna pregunta, debes responder a todas las preguntas antes de enviar");
    } else {
        alert("Enviando respuesta...");

        var acertadas = 0
        
        if (miRespuestaUno === respuestaCorrectaUno) {
            document.getElementById('pregunta1').style.color = "green"
            acertadas++
        } else {
            document.getElementById('pregunta1').style.color = "red"
        }
    
        if (miRespuestaDos === respuestaCorrectaDos) {
            document.getElementById('pregunta2').style.color = "green"
            acertadas++
        } else {
            document.getElementById('pregunta2').style.color = "red"
        }
    
        if (miRespuestaTres === respuestaCorrectaTres) {
            document.getElementById('pregunta3').style.color = "green"
            acertadas++
        } else {
            document.getElementById('pregunta3').style.color = "red"
        }

        alert("Has acertado " + acertadas + "/3");
    
    }
}