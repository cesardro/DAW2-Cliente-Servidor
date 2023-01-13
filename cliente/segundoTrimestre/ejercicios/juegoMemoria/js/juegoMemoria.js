$(document).ready(function () {
    let images = $("#contenedor img");
    let imagesArray = images.get();
    for (let i = imagesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    images.remove();
    $(imagesArray).each(function () {
        let newDiv = $("<div>", {class: "img-div"});
        $(this).appendTo(newDiv);
        newDiv.appendTo("#contenedor");
    });
});

//Array para almacenar imagenes
let imagenSeleccionada = [];

//Revisar que las dos imagenes son iguales.
$(document).on("click", "img", function (event) {
    $(this).fadeTo(0, 1);
    $(this).removeClass("img-div");
    imagenSeleccionada.push(event.target);
    if (imagenSeleccionada.length === 2) {
        if ($(imagenSeleccionada[0]).attr("id") === $(imagenSeleccionada[1]).attr("id")) {
            $("#informacion").text("Has hecho click sobre la misma imagen.");
        } else {
            if ($(imagenSeleccionada[0]).attr("src") === $(imagenSeleccionada[1]).attr("src")) {
                $("#informacion").text("Match!");
                $(imagenSeleccionada[0]).removeAttr("id");
                $(imagenSeleccionada[1]).removeAttr("id");
            } else {
                $("#informacion").text("No es match. :(");
                $(imagenSeleccionada[0]).fadeTo(2000, 0);
                $(imagenSeleccionada[1]).fadeTo(2000, 0);
            }
        }

        //Limpiar array.
        imagenSeleccionada = [];
    }
});
