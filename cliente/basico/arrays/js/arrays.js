onload = iniciar;

//Texto - Variable de ambito global
let texto = "";

let datoUsuario;
let salida;
let numero;

function iniciar() {
    //Recuperar objetos del DOM (elementos o nodos)
    datoUsuario = document.getElementById('valores');
    salida = document.getElementById('salida');
    numero = document.getElementById('numero');
}

function arraysBasico() {

    let listaNumeros = datoUsuario.value.split(' ');

    console.log(listaNumeros);

    listaNumeros[10] = "daw";

    listaNumeros.forEach(suma);

    //Imprime todos los elementos inclusive si hay undefined. 
    for (num of listaNumeros) {
        texto += "a" + num + '<br>';
    }

    salida.innerHTML = texto;
}

//Imprime a traves de for each, se salta los undefined.
function suma(value) {
    texto += (parseInt(value) + 2) + "<br>";
}

//Imprime string.
function arrayToString() {
    salida.innerHTML = datoUsuario.value.split(" ").toString();
}

//Join separa los elementos por lo introducido.
function arrayJoin() {
    salida.innerHTML = datoUsuario.value.split(" ").join(numero.value);
}

//Pop siempre quita el último.
function arrayPop() {
    let lista = datoUsuario.value.split(" ");
    lista.pop();
    salida.innerHTML = lista.join("-");
}

function arrayPush() {
    let lista = datoUsuario.value.split(" ");
    lista.push(numero.value);
    salida.innerHTML = lista.join("-");
}