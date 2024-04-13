document.getElementById("btnSuma").addEventListener("click", function() {
    var inicio = parseInt(document.getElementById("rangoInicio").value);
    var fin = parseInt(document.getElementById("rangoFin").value);
    var operacion = document.getElementById("operacion").value;
    var resultadoElement = document.getElementById("res");

    if (inicio && fin && inicio <= fin) {
        var resultado = 0;
        var contador = 0;

        for (var i = inicio; i <= fin; i++) {
            if (i % 2 === 0) { // Solo se operan números pares
                if (operacion === "suma") {
                    resultado += i;
                } else if (operacion === "promedio") {
                    resultado += i;
                    contador++;
                } else if (operacion === "multiplicacion") {
                    if (resultado === 0) {
                        resultado = i; // Inicializar con el primer número par
                    } else {
                        resultado *= i;
                    }
                }
            }
        }

        if (operacion === "promedio") {
            resultado = resultado / contador;
        }

        resultadoElement.innerHTML = "El resultado de la " + operacion + " de los números pares es: " + resultado;
    } else {
        resultadoElement.innerHTML = "Por favor ingresa un rango válido.";
    }
});
