onload = principal;

let listaCamiones;
let x = "";

function principal() {
    listaCamiones = document.getElementById("listaCamiones");
    cargarServidorCamiones();
}

function cargarServidorCamiones() {
    //Petición al servidor de la lista de camiones. - AJAX

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            camiones = JSON.parse(this.responseText);
            creaCamiones(camiones);
        }
    };

    xmlhttp.open("GET", "listarCamiones.py", true);
    //Ejecutar la petición al servidor
    xmlhttp.send();
}

function creaCamiones(camiones) {
    for (let n = 0; n < camiones.length; n++) {
        x =
            x +
            '\
                        <div class="card m-3">\
                            <div class="row g-0">\
                                <div class="col-md-6">\
                                    <img src="img/' +
            camiones[n][4] +
            '" class="img-fluid rounded-start" alt="' +
            camiones[n][0] +
            '">\
                                </div>\
                                <div class="col-md-6">\
                                    <div class="card-body">\
                                        <h5 class="card-title">Modelo: ' +
            camiones[n][0] +
            '</h5>\
                                        <p class="card-text">Marca: ' +
            camiones[n][1] +
            '</p>\
                                        <p class="card-text">Precio: ' +
            camiones[n][3] +
            '&euro;</p>\
                                        <p class="card-text">Descripci&oacute;n: ' +
            camiones[n][2] +
            "</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>";
    }
    listaCamiones.innerHTML = x;
}

function enviarCamion() {
    let xmlhttp = new XMLHttpRequest();

    //Datos a enviar al servidor.
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let precio = document.getElementById("precio").value;
    let desc = document.getElementById("desc").value;

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = JSON.parse(this.responseText);
            if (resultado) {
                camion = [marca, modelo, desc, precio, "volvoFH500.jpg"];
                listaCamiones.insertBefore(creaCamiones(camion), listaCamiones.firstChild);
            }
        }
    };

    //Enviar información al servidor
    xmlhttp.open("POST", "guardaCamion.py", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Ejecutar la petición al servidor
    xmlhttp.send("marca=" + marca + "&modelo=" + modelo + "&precio=" + precio + "&desc=" + desc);
}

//Creación de elementos en el DOM dentro del div listaCamiones.
// let camion1 =
//     '\
//                 <div class="card m-3">\
//                     <div class="row g-0">\
//                         <div class="col-md-6">\
//                             <img src="img/scania R450 NTG.webp" class="img-fluid rounded-start" alt="R450 NTG">\
//                         </div>\
//                         <div class="col-md-6">\
//                             <div class="card-body">\
//                                 <h5 class="card-title">Modelo: SCANIA R450 NTG</h5>\
//                                 <p class="card-text">Marca: SCANIA</p>\
//                                 <p class="card-text">Precio: 58.000&euro;</p>\
//                                 <p class="card-text">Descripci&oacute;n: Siempre en garage</p>\
//                             </div>\
//                         </div>\
//                     </div>\
//                 </div>';

// let camion2 =
//     '\
//                 <div class="card m-3">\
//                     <div class="row g-0">\
//                         <div class="col-md-6">\
//                             <img src="img/volvoFH500.jpg" class="img-fluid rounded-start" alt="Volvo FH 500">\
//                         </div>\
//                         <div class="col-md-6">\
//                             <div class="card-body">\
//                                 <h5 class="card-title">Modelo: FH 500</h5>\
//                                 <p class="card-text">Marca: Volvo</p>\
//                                 <p class="card-text">Precio: 78.000&euro</p>\
//                                 <p class="card-text">Descripci&oacute;n: Poco uso</p>\
//                             </div>\
//                         </div>\
//                     </div>\
//                 </div>';

// listaCamiones.innerHTML = camion1 + camion2;
