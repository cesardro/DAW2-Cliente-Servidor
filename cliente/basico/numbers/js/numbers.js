function convierte() {
    let n = parseInt(document.getElementById('numero').value);

    let salida = "";

    salida = (typeof n) + "<br>" + n.toString(16) + "<br>" + n.toString(10) + "<br>" + n.toString(8) + "<br>" + n.toString(2);

    document.getElementById("salida").innerHTML = salida;
}

function calculaMiliseg() {
    let hoy = Number(new Date("2022-10-03"));
    let cumple = Number(new Date("1998-01-11"));

    let sol = hoy - cumple;

    document.getElementById("miliseg").innerHTML = sol;
}