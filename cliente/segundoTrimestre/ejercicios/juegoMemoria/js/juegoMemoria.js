$(document).ready(function () {
    let images = $("#contenedor img").get();
    images.sort(function () {
        return 0.5 - Math.random();
    });
    $("#contenedor").html("");
    $(images).appendTo("#contenedor");
});

//Array para almacenar imagenes
let imagenSeleccionada = [];

//Revisar que las dos imagenes son iguales.
function revisarClick(image) {
    imagenSeleccionada.push(image);

    if (imagenSeleccionada.length === 2) {
        if ($(imagenSeleccionada[0]).hasClass($(imagenSeleccionada[1]).attr("class"))) {
            alert("Misma imagen.");
        } else {
            alert("Diferente imagen.");
        }
        //Limpiar array.
        imagenSeleccionada = [];
    }
}
