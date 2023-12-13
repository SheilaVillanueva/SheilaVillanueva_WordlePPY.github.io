/**
 * Declaración de variables.
**/
let intentos = 6;
const cantLetras= 5;
const button = document.getElementById("guess-button");
const URLAPi = "https://random-word-api.herokuapp.com/word?length=5&&lang=es"
let diccionario = ["MIMAR", "PERRO", "ACTOR", "ARBOL", "ABETO", "BICHO","ZORRO","GAFAS"]
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

button.addEventListener('click', intentar)

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        console.log("PERDISTE!")
    }
}



function init() {
    window.addEventListener('load', init)
    button.addEventListener("click", intentar);

}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function tamañoPalabra(intento) {
    let cantLetras = 0;
    for (let i in intento) {
        cantLetras += 1;
    }

    if (cantLetras == CANTLETRAS) {
        return true
    } else {
        return false
    }
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        console.log("PERDISTE!")
    }
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


