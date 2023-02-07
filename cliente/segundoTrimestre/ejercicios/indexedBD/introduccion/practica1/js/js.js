let openRequest = indexedDB.open("valores", 1);

let db;

openRequest.onsuccess = function () {
    console.log("Base de datos abierta con éxito.");

    db = openRequest.result;

    let trans = db.transaction("datosFormulario", "readwrite");
    let almacen = trans.objectStore("datosFormulario");

    let resultado = almacen.add(100, 1);

    resultado.onsuccess = function () {
        console.log("Insertado con exito.");
    };
    resultado.onerror = function () {
        console.log("Error al insertar.");
    };
};

openRequest.onerror = function () {
    console.log("Base de datos abierta con ERROR.");
};

openRequest.onupgradeneeded = function (evento) {
    //Este evento se lanza si:
    //No hay base de datos o
    //la base de datos actual es de versión
    //menos que la indicada arriba.
    console.log("Lanzando el evento on upgrade needed");

    db = openRequest.result;
    db.createObjectStore("datosFormulario");
};

// console.log("Lanzando el evento on upgrade needed.");
// let db = openRequest.result;
// switch (evento.oldVersion) {
//     case 0:
//         console.log("No hay base de datos. ");
//         break;
//     case 1:
//         console.log("Base de datos en version 1");
//         break;
//     default:
//         console.log("Version: " + evento.oldVersion);
//         break;
// }
