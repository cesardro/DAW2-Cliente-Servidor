// alert(document.URL);
// alert(document.doctype);
// alert(document.domain);
// alert(document.readyState);

onload = cargaAlert;

function cargaAlert() {
    let cuerpo = document.body;

    let tabla = '<table><tr>hola</td></tr><tr><td>adios</td></tr></table>';

    let imagen = '<img src="https://static1.elcorreo.com/www/multimedia/202207/04/media/spider1.jpg" >';

    let contenido = tabla + imagen;

    cuerpo.innerHTML = contenido;

    let parrafo = document.createElement("p");

    parrafo.innerHTML = "texto";
    parrafo.style.color = "red";
    
    cuerpo.appendChild(parrafo);
}