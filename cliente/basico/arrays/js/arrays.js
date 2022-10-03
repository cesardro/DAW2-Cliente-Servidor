//Texto - Variable de ambito global
let texto = ""

function arraysBasico() {
    //Recuperar objetos del DOM (elementos o nodos)
    let datoUsuario = document.getElementById('valores');
    let salida = document.getElementById('salida');

    let listaNumeros = datoUsuario.value.split(" ");

    listaNumeros[10] = "daw";

    for(num of listaNumeros){
        texto += "a" + num + '<br>';
    }

    salida.innerHTML = texto;
}

function suma(value) {
    texto = texto + (parseInt(value) + 2) + "<br>";
}