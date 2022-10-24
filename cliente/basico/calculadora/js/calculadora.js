onload = principal;

class Calcula {
    constructor() {
        this.operando1 = 0;
        this.operando2 = 0;
        this.operacion = 0; // 1 -> Suma, 2 -> Resta, 3 -> Multiplicación, 4 -> División
    }
    completaOper1(n) {
        this.operando1 = operando1 * 10 + n;
    }
    completaOper2(n) {
        this.operando2 = operando2 * 10 + n;
    }
    igual() {
        switch (this.operacion) {
            case 1:
                return suma();
            case 2:
                return resta();
            case 3:
                return multiplicacion();
            case 4:
                return division();
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
        if (operando2 == 0) {
            return "Division por 0";
        }
        return this.operando1 / this.operando2;
    }
}

let listaBotones;
let simboloBotones = [7, 8, 9, "'+'", 4, 5, 6, "'-'", 1, 2, 3, "'*'", "','", 0, "'='", "'/'"];
let cal = new Calcula();

function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {

    let calculadora = document.getElementById("calculadoraId");

    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class", "boton")
        texto.setAttribute("onclick", "pulsado(" + simboloBotones[index - 1] + ")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML = simboloBotones[index - 1];
    }
}

function pulsado(n) {
    console.log(n);
}