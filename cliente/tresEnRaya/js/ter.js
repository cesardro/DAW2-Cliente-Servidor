onload=principal;

function principal() {
    dibujaTablero();
}

function dibujaTablero() {
    let tablero = document.getElementById("tableroId");
    for (let i = 0; i < 9; i++) {
        
        let casilla = document.createElement("div");
        casilla.class="casilla";
        
        let imagen = document.createElement("img");
        imagen.setAttribute("src","img/blanco.png");
        imagen.setAttribute("onclick","pinchado(this,"+i+")");

        casilla.appendChild(imagen);
        tablero.appendChild(casilla);
    }
}

function pinchado(imagen, posicion) {
    console.log(posicion)
    imagen.setAttribute("src","img/x.png");
}