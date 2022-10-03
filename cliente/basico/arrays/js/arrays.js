function arraysBasico() {
    //Recuperar objetos del DOM (elementos o nodos)
    let datoUsuario = document.getElementById('valores');
    let salida = document.getElementById('salida');

    salida.innerHTML = datoUsuario.value;
}