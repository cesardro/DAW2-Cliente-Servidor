$(principal);

function principal() {
    const t = $("#tablero");

    console.log(t);

    const letras = "kljasdhf";

    for (let i = 0; i < letras.length; i++) {
        t.append(
            "<span id='arrastrable" + i + "' draggable='true' ondragstart='arrastrando(event)'>" + letras[i] + "</span>"
        );
    }
}

function comprobar() {
    console.log("comprobar");
}

function arrastrando(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function llego(event) {
    //Nos ayuda a aceptar la función de soltar.
    event.preventDefault();
}

function solto(event) {
    const id = event.dataTransfer.getData("text");
    const elementoArrastrado = document.getElementById(id);
    const destino = event.target;
    destino.appendChild(elementoArrastrado);
    event.dataTransfer.clearData();
}

function comprobar() {}
