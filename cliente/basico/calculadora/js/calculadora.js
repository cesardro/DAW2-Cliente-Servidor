onload = principal;

class Calcula {
    constructor() {
        this.operando1 = 0;
        this.operando2 = 0;
        this.operacion = 0; // 1 -> Suma, 2 -> Resta, 3 -> Multiplicación, 4 -> División
    }
    completaOper1(n) {
        this.operando1 = this.operando1 * 10 + n;
    }
    completaOper2(n) {
        this.operando2 = this.operando2 * 10 + n;
    }
    igual() {
        switch (this.operacion) {
            case 1:
                return cal.suma();
            case 2:
                return cal.resta();
            case 3:
                return cal.multiplicacion();
            case 4:
                return cal.division();
            default:
                return -1;
        }
    }
    suma() {
        return this.operando1 + this.operando2;
    }
    resta() {
        return this.operando1 - this.operando2;
    }
    multiplicacion() {
        return this.operando1 * this.operando2;
    }
    division() {
        if (this.operando2 == 0) {
            return "Division por 0";
        }
        return this.operando1 / this.operando2;
    }
}

let listaBotones;
let simboloBotones = [7, 8, 9, "'+'", 4, 5, 6, "'-'", 1, 2, 3, "'*'", "','", 0, "'='", "'/'"];

function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {

    let calculadora = document.getElementById("calculadoraId");

    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class", "boton");
        texto.setAttribute("onclick", "pulsado(" + simboloBotones[index - 1] + ")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML = simboloBotones[index - 1];
    }
}

let stage = 0;
let cal = new Calcula();

/*
stage 0 -> Calculadora sin empezar.
stage 1 -> Primer numero introducido.
stage 2 -> Operador introducido.
stage 3 -> Segundo numero introducido.
stage 4 -> Presiona igual. 
*/

function pulsado(n) {
    if (stage == 0 && (n != '+' && n != '-' && n != '*' && n != '/' && n != '=' && n != ',')) {
        stage = 1;
        cal.operando1 = n;
        document.getElementById("informacion").innerHTML = cal.operando1;
    } else if (stage == 1) {
        if (n == '+' || n == '-' || n == '*' || n == '/' || n == '=' || n == ',') {
            stage = 2;
            queSoy(n);
            document.getElementById("informacion").innerHTML = document.getElementById("informacion").innerHTML + n;
        } else {
            cal.completaOper1(n);
            document.getElementById("informacion").innerHTML = cal.operando1;
        }
    } else if (stage == 2 && (n != '+' && n != '-' && n != '*' && n != '/' && n != '=' && n != ',')) {
        stage = 3;
        cal.operando2 = n;
        document.getElementById("informacion").innerHTML = document.getElementById("informacion").innerHTML + cal.operando2;
    } else if (stage == 3) {
        if (n == '=') {
            stage = 4;
            document.getElementById("informacion").innerHTML = document.getElementById("informacion").innerHTML + n;
        } else if (n != '+' && n != '-' && n != '*' && n != '/' && n != ',') {
            cal.completaOper2(n);
            document.getElementById("informacion").innerHTML = document.getElementById("informacion").innerHTML + n;
        }
    }

    console.log(stage);

    if (stage == 4) {
        document.getElementById("informacion").innerHTML = document.getElementById("informacion").innerHTML + cal.igual();
        stage = 0;
    }

}

function queSoy(n) {
    if (n == '+') {
        cal.operacion = 1;
    }
    if (n == '-') {
        cal.operacion = 2;
    }
    if (n == '*') {
        cal.operacion = 3;
    }
    if (n == '/') {
        cal.operacion = 4;
    }
}