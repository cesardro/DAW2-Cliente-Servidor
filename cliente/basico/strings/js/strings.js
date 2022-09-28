//Separar las letras en líneas de una frase de entrada.
function ejer1() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    //Recorrer el texto con un for loop
    let temp = '';
    for (let index = 0; index < texto.length; index++) {
        temp += texto[index] + "<br>";
    }

    //Texto obtenido meter en párrafo con id="pEjer1"
    document.getElementById('pEjer1').innerHTML = temp;
}

//Contar las letras de una frase.
function ejer2() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    //Recorrer el texto con un for loop
    let cont = 0;
    for (let index = 0; index < texto.length; index++) {
        if ((texto[index] >= 'a' && texto[index] <= 'z') || (texto[index] >= 'A' && texto[index] <= 'Z') || (texto[index] == 'ñ') || (texto[index] == 'Ñ')) {
            cont++;
        }
    }

    //Texto obtenido meter en párrafo con id="pEjer2"
    document.getElementById('pEjer2').innerHTML = cont;
}

function ejer3() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    //Recorrer el texto con un for loop
    let temp = '';
    for (let index = 0; index < texto.length; index++) {
        temp = texto[index] + temp;
    }

    //Texto obtenido meter en párrafo con id="pEjer2"
    document.getElementById('pEjer3').innerHTML = temp;
}

function ejer4() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;
    let busca = document.getElementById('busca').value;

    let result = texto.includes(busca);

    if ((result == true) && busca != '') {
        document.getElementById('pEjer4').innerHTML = 'Palabra encontrada.';
    } else {
        document.getElementById('pEjer4').innerHTML = 'Palabra no encontrada.';
    }
}

function ejer5() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;
    let busca = document.getElementById('buscaLetra').value;

    let cont = 0;

    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == busca.charAt(0)) {
            cont++;
        }
    }
    document.getElementById('pEjer5').innerHTML = 'La letra ha sido encontrada ' + cont + ' veces';
}

function ejer6() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    let conta = 0;
    let conte = 0;
    let conti = 0;
    let conto = 0;
    let contu = 0;

    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == 'a') {
            conta++;
        }
        if (texto[index] == 'e') {
            conte++;
        }
        if (texto[index] == 'i') {
            conti++;
        }
        if (texto[index] == 'o') {
            conto++;
        }
        if (texto[index] == 'u') {
            contu++;
        }
    }
    document.getElementById('pEjer6').innerHTML = "La vocal 'a' ha sido encontrada " + conta + ' veces. <br>' +
    "La vocal 'e' ha sido encontrada " + conte + ' veces. <br>' +
    "La vocal 'i' ha sido encontrada " + conti + ' veces. <br>' +
    "La vocal 'o' ha sido encontrada " + conto + ' veces. <br>' +
    "La vocal 'u' ha sido encontrada " + contu + ' veces. <br>';
}

function ejer7() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    let salida = '';

    for (let index = 0; index < texto.length; index++){
        if(texto[index] == ' '){
            salida = salida + '<br>';
        }
        salida = salida + texto[index];
    }
    document.getElementById('pEjer7').innerHTML = salida;
}

function ejer8() {
    //Recuperar el texto del input
    let texto = document.getElementById('cadena').value;

    let temp = '';
    let salida = '';

    for (let index = 0; index < texto.length; index++){    
        if(texto[index] != ' '){
            temp = texto[index] + temp;
        }else{
            salida = salida + ' ' + temp;
            temp = '';
        }
    }
    salida = salida + ' ' + temp;
    
    document.getElementById('pEjer8').innerHTML = salida;
}