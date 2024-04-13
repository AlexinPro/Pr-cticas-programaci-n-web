document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('btnCalcular');
    boton.addEventListener('click', descuento);
});

function descuento() {
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento = parseFloat(document.getElementById('descuento').value);
    
    var precioFinal;
    if (descuento === 10) {
        precioFinal = precio * 0.90; 
    } else if (descuento === 15) {
        precioFinal = precio * 0.85; 
    } else if (descuento === 20) {
        precioFinal = precio * 0.80; 
    } else if (descuento === 30) {
        precioFinal = precio * 0.70; 
    } else if (descuento === 50) {
        precioFinal = precio * 0.50; 
    }
    
    document.getElementById('precio_final').innerText = "El precio final es de:$" + precioFinal.toFixed(2);
}
