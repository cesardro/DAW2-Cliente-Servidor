class dbjCanvas {
    static dibujaRect(cnv, rectangulo) {
        let ctx = cnv.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 400, 600);
        ctx.stroke();

        //Pintar el texto.
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Alto de: " + alto, 100, 40);
        ctx.fillText("Ancho de: " + ancho, 100, 70);
        ctx.fillText("Área de: " + alto * ancho, 100, 100);
        ctx.fillText("Perímetro de: " + (alto * 2 + ancho * 2), 100, 130);
        ctx.stroke();

        //Pintar el rectangulo.
        ctx.fillStyle = "green";
        let anchura = ancho / 2;
        let altura = alto / 2;
        ctx.fillRect(cnv.width / 2 - anchura, cnv.height / 2 - altura / 4, ancho, alto);
        ctx.stroke();
    }
}
