var btn = document.querySelector('#btnMostrar');
btn.addEventListener('click', function(){
    var tabla = document.querySelector('#tabla').value;
    var inicio = document.querySelector('#inicio').value;
    var fin = document.querySelector('#fin').value;
    calcularTabla(tabla, inicio, fin);
});

function calcularTabla(tabla, inicio, fin){
    var div = document.getElementById('res');
    var resultado = '';
    for (var i = inicio; i <= fin; i++){
        resultado += tabla + ' x ' + i + ' = ' + (tabla * i) + '<br>';
    }
    div.innerHTML = resultado;
}
