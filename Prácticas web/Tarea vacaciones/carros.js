import { storage } from "./storage.js";

var carros = (storage.obtener('carros') == '') ? [] : storage.obtener('carros').split(',');
llenarTabla();

// Función asignada al botón guardar
document.addEventListener('DOMContentLoaded', function(){
    var btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', llenaFila);
});

function llenaFila() {
    var marca = document.getElementById('carMarca').value;
    var modelo = document.getElementById('carModelo').value;
    var tipo = document.getElementById('carTipo').value;
    var precio = document.getElementById('carPrecio').value;

    var nuevoCarro = marca + ',' + modelo + ',' + tipo + ',' + precio;
    carros.push(nuevoCarro);
    storage.asignar('carros', carros.join(',')); // Guardar el arreglo de carros en el localStorage
    llenarTabla();

    // Limpiar los campos después de guardar
    document.getElementById('carMarca').value = '';
    document.getElementById('carModelo').value = '';
    document.getElementById('carTipo').value = '';
    document.getElementById('carPrecio').value = '';
}

function llenarTabla() {
    var tabla = '';
    for(var i = 0; i < carros.length; i++) {
        var carAtributos = carros[i].split(',');
        var btnActualizar = '<button id="btnActualizar'+i+'" data-indice="'+i+'" class="btn btn-primary btnActualizar">Actualizar</button>';
        var btnEliminar = '<button data-indice="'+i+'" class="btn btn-danger btnDelete">Eliminar</button>';
        
        tabla += '<tr><td>'+(i+1)+'</td>' +
                 '<td>'+carAtributos[0]+'</td>' +
                 '<td>'+carAtributos[1]+'</td>' +
                 '<td>'+carAtributos[2]+'</td>' +
                 '<td>'+carAtributos[3]+'</td>' +
                 '<td>'+btnActualizar+'</td>' +
                 '<td>'+btnEliminar+'</td></tr>';
    }
    document.querySelector('#info').innerHTML = tabla;
    edicion();
}

function edicion(){
    var btnActualizar = document.querySelectorAll('.btnActualizar');
    btnActualizar.forEach(car => car.addEventListener('click', (event) => {
        var index = event.target.getAttribute('data-indice');
        mostrar(index);
    }));
    var btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach(car => car.addEventListener('click', (event) =>{
        var index = event.target.getAttribute('data-indice');
        eliminar(index);
    }));
}

function eliminar(index) {
    carros.splice(index, 1);
    storage.asignar('carros', carros.join(',')); //Guardar el arreglo de carros en el localStorage
    llenarTabla();
}

function mostrar(index) {
    var row = document.querySelector('#info').rows[index];
    var carDetails = carros[index].split(',');
    var marca = carDetails[0];
    var modelo = carDetails[1];
    var tipo = carDetails[2];
    var precio = carDetails[3];

    //obtener el valor de las celdas
    row.cells[1].innerHTML = '<input id="editarMarca'+index+'" class="form-control" value="'+marca+'">';
    row.cells[2].innerHTML = '<input id="editarModelo'+index+'" class="form-control" value="'+modelo+'">';
    row.cells[3].innerHTML = '<input id="editarTipo'+index+'" class="form-control" value="'+tipo+'">';
    row.cells[4].innerHTML = '<input id="editarPrecio'+index+'" class="form-control" value="'+precio+'">';
    
    row.cells[5].innerHTML = '<button id="btnGuardar'+index+'" class="btn btn-success">Guardar</button>';
    document.getElementById('btnGuardar'+index).addEventListener('click', function() {
        corregir(index);
    });
}

function corregir(index){
    var marca = document.getElementById('editarMarca'+index).value;
    var modelo = document.getElementById('editarModelo'+index).value;
    var tipo = document.getElementById('editarTipo'+index).value;
    var precio = document.getElementById('editarPrecio'+index).value;

    carros[index] = marca + ',' + modelo + ',' + tipo + ',' + precio;

    storage.asignar('carros', carros.join(',')); // Guardar el arreglo de carros en el localStorage
    llenarTabla();
}


/*var carros = [];

// función asignada al botón guardar
document.addEventListener('DOMContentLoaded', function(){
    var btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', llenaFila);
})

function llenaFila() {
    var marca = document.getElementById('carMarca').value;
    var modelo = document.getElementById('carModelo').value;
    var tipo = document.getElementById('carTipo').value;
    var precio = document.getElementById('carPrecio').value;

    // Agregar el nuevo carro al arreglo
    var nuevoCarro = {marca: marca, modelo: modelo, tipo: tipo, precio: precio};
    carros.push(nuevoCarro);

    // Llamar a la función para llenar la fila en la tabla
    llenarTabla();

    // Limpiar los campos después de guardar
    document.getElementById('carMarca').value = '';
    document.getElementById('carModelo').value = '';
    document.getElementById('carTipo').value = '';
    document.getElementById('carPrecio').value = '';
}

function llenarTabla() {
    var tabla = '';
    for(var i=0; i<carros.length; i++){
        var btnActualizar = '<button id="btnActualizar'+i+'" data-indice="'+i+'" class="btn btn-primary btnActualizar">Actualizar</button>';
        var btnEliminar = '<button data-indice="'+i+'" class="btn btn-danger btnDelete">Eliminar</button>';
        var input = '<input id="editar'+i+'" class="form-control d-none value" value="'+carros[i]+'">';
        var salvar = '<button class="btn btn-info btnSave d-none" id="btnGuar'+i+'" data-indice="'+i+'">Guardar</button>';
        
        tabla += '<tr><td>'+(i+1)+'</td>' +
                 '<td>'+input+'<div id="div1'+i+'">' +carros[i].marca+'</div></td>' +
                 '<td>'+input+'<div id="div2'+i+'">'+carros[i].modelo+'</div></td>' +
                 '<td>'+input+'<div id="div3'+i+'">'+carros[i].tipo+'</div></td>' +
                 '<td>'+input+'<div id="div4'+i+'">'+carros[i].precio+'</div></td>' +
                 '<td>'+btnActualizar+''+salvar+'</td>' +
                 '<td>'+btnEliminar+'</td></tr>' 
    }
    document.querySelector('#info').innerHTML = tabla;
    edicion()
}

function edicion(){
    var btnActualizar = document.querySelectorAll('.btnActualizar');
    btnActualizar.forEach(car => car.addEventListener('click', (event) => {
        var index = event.target.getAttribute('data-indice');
        mostrar(index);
    }));
    var btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach(car => car.addEventListener('click', (event) =>{
        var index = event.target.getAttribute('data-indice');
        eliminar(index);
    }));
    var btnSave = document.querySelectorAll('.btnSave');
    btnSave,forEach(car => car.addEventListener('click',(event)=>{
        var index = event.target.getAttribute('data-indice')
        corregir(index);
    }));
}
function eliminar(index) {
    colores.splice(index, 1);
    llenarTabla();
}
function mostrar(){
    var div1 = document.querySelector('#div1' + index);
    var div2 = document.querySelector('#div2' + index);
    var div3 = document.querySelector('#div3' + index);
    var div4 = document.querySelector('#div4' + index);
    var espacio = document.querySelector('#editar' + index);
    var btnAc = document.querySelector('#btnActualizar' + index);
    var btnSav = document.querySelector('#btnGuar' + index);
    div1.classList.add('d-none');
    div2.classList.add('d-none');
    div3.classList.add('d-none');
    div4.classList.add('d-none');
    espacio.classList.add('d-none');
    btnAc.classList.add('d-none');
    btnSav.classList.remove('d-none');
}
function corregir(){
    var newCar = document.querySelector('#editar'+index).value
    carros[index] = newCar
    llenarTabla
}*/
