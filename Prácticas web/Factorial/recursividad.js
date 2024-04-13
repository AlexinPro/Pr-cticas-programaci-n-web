var facInput = document.querySelector('#fac');
var resultDiv = document.querySelector('#fact');
var btnCalcular = document.querySelector('#btnCalcular'); // Agregamos la referencia al botón

// Agregar un event listener al botón de calcular
btnCalcular.addEventListener('click', function() {
    var n = parseInt(facInput.value); // Obtener el número ingresado como entero

    // Validar si la entrada es un número válido
    if (!isNaN(n) && n >= 0) {
        var factorial = 1;

        // Calcular el factorial
        for (var i = 1; i <= n; i++) {
            factorial *= i;
        }

        // Mostrar el resultado en el elemento div
        resultDiv.textContent = 'El factorial de ' + n + ' es: ' + factorial;
    } else {
        // Manejar el caso de entrada no válida
        resultDiv.textContent = 'Por favor, ingrese un número entero positivo.';
    }
});
