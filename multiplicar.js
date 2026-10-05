
function generarTablas() {
     let contenedor = document.getElementById("tabla-body");
     let inputNumero = document.getElementById("numero-tabla");
     let numero = inputNumero.value || 3;

     
     let contenido = "";
        for (let i = 1; i <= 10; i++) {
            contenido += "<tr><td>" + numero + " × " + i + "</td><td>" + (numero * i) + "</td></tr>";
        }
     contenedor.innerHTML = contenido;
}
