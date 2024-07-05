let nuemeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo = 10;
//Javascript hace hoisting, lo cual es que sube las variables y las funciones al inciio del programa
//para que puedan ser utilizadas desde el inicio

//funcion para setear el titulo y el rango de numero
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeromaximo}`);
    nuemeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function asignarTextoElemento(elemento, texto){
    //document query selector es para seleccionar un elemento HTML
    //.innerHTM es para agregar un texto
    document.querySelector(elemento).innerHTML = texto;
    return;
    //Es buena practica utilizar el return aunque no se regrese nada
}

function verificarIntento(){
    console.log(nuemeroSecreto);
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === nuemeroSecreto) {
        //El ususario acerto
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if (numeroUsuario > nuemeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//esta funcion genera el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;
    //hay que verificar que no se hayan generado ya todos los numeros para
    //evitar una recursividad infinita
    if(listaNumerosSorteados.length == numeromaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
} 
//esta funcion limpa el input
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //Aca con # especificamos un elemento con ID
}
//esta funcion reinicia el juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();

/**
 * Para la utilizacion de arrays existen distintos metosos
 * Para definir una lista/array se usa let nombre = [];
 * con el metodo .push se agrega al final el numero
 * para la longitud de la lista se utilia el metodo .length
 */