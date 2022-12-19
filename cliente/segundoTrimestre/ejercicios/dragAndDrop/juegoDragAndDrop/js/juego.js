$(principal);

function principal() {
    const t = $("#tablero");

    const letras = "acb";

    for (let i = 0; i < letras.length; i++) {
        t.append(
            "<span id='arrastrable" + i + "' draggable='true' ondragend='arrastrando(event)'>" + letras[i] + "</span>"
        );
    }
}

function arrastrando(event) {
    const destino = $("#tablero");
    const elementoArrastrado = $("#" + event.target.id);

    destino.append(elementoArrastrado);
}

function comprobar() {
    let palabra = $("#tablero").text();
    for (let i = 1; i < palabra.length; i++) {
        if (palabra[i] < palabra[i - 1]) return alert("No esta ordenado");
    }
    return alert("Esta ordenado");
}
