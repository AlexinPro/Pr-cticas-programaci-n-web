/* Array: Tipo de variable que puede contener múltiples valores
En JS el array puede ser de varios tipos de datos */

var edades = [18, 15, 20, 5, 13, 22, 50, 41, 26];
var nombre = ['Dan', 'Ernesto', 'Pedro'];
var variado = [25, 'lechuga', 7.5, 'Santiago'];

//Mostrar posición del array


/*Añadir elementos al arrays
nombre.push('Nuevo')
nombre.shift(); //elimina el primer elemento del array
console.log(nombre);
nombre.pop(); //elimina el último elemento del array
console.log(nombre);*/

//console.log(variado[2]);
var opciones = '';
var filas = '';
for (var j = 0; j < nombre.length; j++) {
    //console.log(nombre[j]);
    opciones += '<option value = "' + j + '">' + nombre[j] + '</option>';
    filas += '<tr><td>' + (j + 1) + '</td><td>' + nombre[j] + '</td></tr>';

    nombre.pop()
}
document.querySelector('#opciones').innerHTML = opciones;
document.querySelector('#tabla').innerHTML = filas;

//console.log(edades)

let array1 = [10, 5, 6, 8, 2];
let array2 = [3, 7, 20, 16, 1];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
}
console.log(array3);

//saber el índice de un elemento 
console.log(variado.indexOf(7.5));

// Función para mostrar el contenido del array en el select
function mostrarOpciones() {
    var opciones = '';
    for (var i = 0; i < nombre.length; i++) {
        opciones += '<option value="' + i + '">' + nombre[i] + '</option>';
    }
    document.querySelector('#opciones').innerHTML = opciones;
}

// Función para mostrar el contenido del array en la tabla
function mostrarTabla() {
    var filas = '';
    for (var i = 0; i < nombre.length; i++) {
        filas += '<tr><td>' + (i + 1) + '</td><td>' + nombre[i] + '</td></tr>';
    }
    document.querySelector('#tabla').innerHTML = filas;
}

// Función para agregar un nuevo nombre al array y actualizar la interfaz
function agregarNombre(nuevoNombre) {
    nombre.push(nuevoNombre);
    mostrarOpciones();
    mostrarTabla();
}

// Función para eliminar el último nombre del array y actualizar la interfaz
function eliminarUltimoNombre() {
    nombre.pop();
    mostrarOpciones();
    mostrarTabla();
}

// Función para eliminar el primer nombre del array y actualizar la interfaz
function eliminarPrimerNombre() {
    nombre.shift();
    mostrarOpciones();
    mostrarTabla();
}

// Event listener para el botón "Guardar"
document.querySelector('.btn-info').addEventListener('click', function() {
    var nuevoNombre = prompt('Ingrese un nuevo nombre:');
    if (nuevoNombre) {
        agregarNombre(nuevoNombre);
    }
});

// Event listener para el botón "Eliminar último"
document.querySelector('.btn-dark').addEventListener('click', function() {
    eliminarUltimoNombre();
});

// Event listener para el botón "Eliminar primero"
document.querySelector('.btn-danger').addEventListener('click', function() {
    eliminarPrimerNombre();
});

// Llamar a las funciones para inicializar la interfaz
mostrarOpciones();
mostrarTabla();
