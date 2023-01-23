// $("#btn").click(principal);

// function principal() {
//     $.post("parrafo.html", {}, respuesta);
// }

// function respuesta(data, status) {
//     $("#salida").append(data);
// }

// //--------------------------------

// $("#btn2").click(llamadaPython);

// function llamadaPython() {
//     $.post("py/prueba.py", {numero: $("#numero").val(), texto: "saludo"}, respuesta);
// }

function cargaInicial() {
    $.post("py/datosPartidos.py", {}, inciarTabla);
}

function inciarTabla(data, status) {
    if (status == "success") {
        //Introduce los datos que vienen en un JSON en la tabla.
    }
}

$("#btn").click(llamadaPython);

let el = $("#equipoLocal");
let ev = $("#equipoVisitante");
let gl = $("#golesLocal");
let gv = $("#golesVisitante");

function llamadaPython() {
    if (validarDatos) {
        $.post(
            "py/inserta.py",
            {
                EquipoLocal: el.val(),
                EquipoVisitante: ev.val(),
                GolesLocal: gl.val(),
                GolesVisitante: gv.val()
            },
            respuesta
        );
    } else {
        alert("Error en datos.");
    }
}

function respuesta(data, status) {
    if (status == "success") {
        $("#tablaCuerpo").append(
            `<tr><td>${el.val()}</td><td>${ev.val()}</td><td>${gl.val()}</td><td>${gv.val()}</td></tr>`
        );
    }
}

function validarDatos() {
    return false;
}

cargaInicial();
