document.getElementById("btnSuma").addEventListener("click", function() {
    var fin = parseInt(document.getElementById("rango").value);
    var sumatoriaPares = 0;
    var sumatoriaImpares = 0;
    var sumatoriaMultiplos5 = 0;

    for (var i = 50; i <= fin; i++) {
        if (i % 2 === 0) {
            sumatoriaPares += i;
        } else {
            sumatoriaImpares += i;
        }

        if (i % 5 === 0) {
            sumatoriaMultiplos5 += i;
        }
    }

    
    var sumas = [sumatoriaPares, sumatoriaImpares, sumatoriaMultiplos5];
    var mayor = Math.max(...sumas);
    var menor = Math.min(...sumas);
    var restante = sumas.reduce((total, valor) => total + valor, 0) - mayor - menor;

    
    var paresDiv = document.getElementById("pares");
    var imparesDiv = document.getElementById("impares");
    var multiplosDiv = document.getElementById("multiplos");

    paresDiv.textContent = "Sumatoria de números pares: " + sumatoriaPares;
    imparesDiv.textContent = "Sumatoria de números impares: " + sumatoriaImpares;
    multiplosDiv.textContent = "Sumatoria de múltiplos de 5: " + sumatoriaMultiplos5;

    if (sumatoriaPares === mayor) {
        paresDiv.style.color = "green";
    } else if (sumatoriaPares === menor) {
        paresDiv.style.color = "red";
    } else {
        paresDiv.style.border = "2px dotted purple"; 
    }

    if (sumatoriaImpares === mayor) {
        imparesDiv.style.color = "green";
    } else if (sumatoriaImpares === menor) {
        imparesDiv.style.color = "red";
    } else {
        imparesDiv.style.border = "2px dotted purple"; 
    }

    if (sumatoriaMultiplos5 === mayor) {
        multiplosDiv.style.color = "green";
    } else if (sumatoriaMultiplos5 === menor) {
        multiplosDiv.style.color = "red";
    } else {
        multiplosDiv.style.border = "2px dotted purple"; 
    }
});
