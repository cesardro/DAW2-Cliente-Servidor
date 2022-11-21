function compruebaPrimo() {
    //**********************************
    //configura datos y objetos
    //**********************************

    //parrafo para la salida de datos
    let parrafo = document.getElementById("salida");

    let num = document.getElementById("num").value;


    if (num > 0 && num < 100) {
        //crear el objeto XMLHttpRequest para acceder al servidor
        let jsonhttp = new XMLHttpRequest();

        //**********************************
        //registro de la funcion que trata la 
        //respuesta del servidor
        //**********************************

        jsonhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let listaN = JSON.parse(this.responseText);
                parrafo.innerHTML = listaN;
            }
        };

        //**********************************
        //codigo que realiza la petición al sevidor
        //se pueden hacer peticiones GET, POST (y otros verbos HTTP)
        //**********************************
        //construir la peticion al servidor
        jsonhttp.open("GET", "ejercicio6.py?numero=" + num, true);
        //ejecutar la peticion al sevidor
        jsonhttp.send();
    }


}