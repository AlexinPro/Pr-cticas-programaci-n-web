var div1 = document.querySelector('#div1');//atributo para todo el div

var letra = document.querySelector('#escribir');
letra.addEventListener('keyup',function(){
    div1.innerHTML = letra.value
})

var fondo = document.querySelector('#fondo');
fondo.addEventListener ('change', function(){
    var nuevoFondo = fondo.value;
    div1.style.background = nuevoFondo;
})

var texto = document.querySelector('#texto');
texto.addEventListener ('change', function(){
    var nuevoColor = texto.value;
    div1.style.color = nuevoColor
})

var fuente = document.querySelector('#fuente');
fuente.addEventListener('change', function() {
    var nuevaFuente = fuente.value;
    div1.style.fontSize = nuevaFuente+'px'
})

var alto = document.querySelector('#alto');
alto.addEventListener('change', function() {
    var nuevoAlto = alto.value;
    div1.style.height = nuevoAlto+'px';
})

var ancho = document.querySelector('#ancho');
ancho.addEventListener('change', function() {
    var nuevoAncho = ancho.value;
    div1.style.width = nuevoAncho+'px';
})

var borde = document.querySelector('#borde');
borde.addEventListener('change', function() {
    var nuevoBorde = borde.value;
    div1.style.border = nuevoBorde+'px solid #000';
})
