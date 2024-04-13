import {storage} from "./storage.js"
var colores = (storage.obtener('colores') == '') ? []: storage.obtener('colores').split(',')
llenaTabla();

var inputcolor = document.querySelector("#color");
inputcolor.addEventListener('keypress', (event) => {
    // Evitar que se agregue el color al presionar Enter sin texto
    if (event.key === "Enter" && inputcolor.value.trim() !== '') {
        colores.push(inputcolor.value);
        storage.asignar('colores', colores);
        inputcolor.value = '';
        llenaTabla();
    }
});

function llenaTabla() {
    var body = '';
    for (var i = 0; i < colores.length; i++) {
        var btnEditar = '<button id="btnEditar' + i + '" data-indice="' + i + '" class="btn btn-warning btnEditar">Editar</button>'; 
        var btnEliminar = '<button data-indice="' + i + '" class="btn btn-danger btnEliminar">Eliminar</button>'; 
        var input = '<input id="input' + i + '" class="form-control d-none" value="' + colores[i] + '">'; 
        var guardar = '<button class="btn btn-success btnGuardar d-none" id="boton' + i + '" data-indice="' + i + '">Guardar</button>'; 
        body += '<tr><td>' + (i + 1) + '</td><td>' + input + '<div id="div' + i + '">'+ colores[i]+'</div></td><td>' + btnEditar + ''+guardar+'</td><td>' + btnEliminar + '</td></tr>'; 
    }
    document.querySelector('#datos').innerHTML = body;
    eventos(); // Llamar a la función eventos después de crear la tabla
}

function eventos() {
    var btnEliminar = document.querySelectorAll('.btnEliminar');
    btnEliminar.forEach(elem => elem.addEventListener('click', (event) => {
        var indice = event.target.getAttribute('data-indice');
        Eliminar(indice);
    }));

    var btnEditar = document.querySelectorAll('.btnEditar');
    btnEditar.forEach(elem => elem.addEventListener('click', (event) => {
        var indice = event.target.getAttribute('data-indice');
        show(indice);
    }));

    var btnGuardar = document.querySelectorAll('.btnGuardar');
    btnGuardar.forEach(elem => elem.addEventListener('click', (event) => {
        var indice = event.target.getAttribute('data-indice');
        actualizar(indice);
    }));
}

function Eliminar(indice) {
    colores.splice(indice, 1);
    storage.asignar('colores', colores);
    llenaTabla();
}

function show(indice) {
    var div = document.querySelector('#div' + indice);
    var campo = document.querySelector('#input' + indice);
    var botonEd = document.querySelector('#btnEditar' + indice);
    var botonG = document.querySelector('#boton' + indice);
    div.classList.add('d-none');
    campo.classList.remove('d-none');
    botonEd.classList.add('d-none');
    botonG.classList.remove('d-none');
}

function actualizar(indice) {
    var nuevocolor = document.querySelector('#input' + indice).value;
    colores[indice] = nuevocolor;
    storage.asignar('colores', colores);
    llenaTabla();
}
