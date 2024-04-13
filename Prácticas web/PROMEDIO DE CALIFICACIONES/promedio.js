document.getElementById("btnPromedio").addEventListener("click", function() {
    // Obtener los valores de las calificaciones
    var cal1 = parseFloat(document.getElementById("cal1").value);
    var cal2 = parseFloat(document.getElementById("cal2").value);
    var cal3 = parseFloat(document.getElementById("cal3").value);
    var cal4 = parseFloat(document.getElementById("cal4").value);

    // Calcular el promedio de las primeras 3 calificaciones (50%)
    var promedioParciales = (cal1 + cal2 + cal3) / 3;

    // Calcular el promedio final considerando el 50% de las primeras 3 calificaciones y el 50% de la cuarta calificación
    var promedioFinal = (promedioParciales * 0.5) + (cal4 * 0.5);

    // Obtener el elemento del label
    var labelPromedio = document.getElementById("Promedio");

    // Mostrar el promedio final en el label
    labelPromedio.innerText = "Tu calificación final es: " + promedioFinal.toFixed(2);

    // Cambiar el color del texto en el label dependiendo de la calificación final
    if (promedioFinal < 6) {
        labelPromedio.style.color = "red";
    } else {
        labelPromedio.style.color = "green";
    }
});
