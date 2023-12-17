/**
 * Declaración de variables.
**/
let intentos = 6;
const cantLetras = 5;
const button = document.getElementById("guess-button");
const URLAPi = "https://random-word-api.herokuapp.com/word?length=5&&lang=es"
let diccionario = ["MIMAR", "PERRO", "ACTOR", "ARBOL", "ABETO", "BICHO", "ZORRO", "GAFAS"]
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
button.addEventListener('click', intentar)

fetch(endpoint).then((response)=>{
    response.json().then((data)=>{
        console.log(data[0]);
        palabra =  data[0].toUpperCase();
    })
});

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = "contenedor";
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function init() {
    window.addEventListener('load', init)
    button.addEventListener("click", intentar);

}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}


function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true; // Cambiado de BOTON a button
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}



