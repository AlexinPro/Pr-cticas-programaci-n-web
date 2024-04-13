import {storage} from "./storage.js";
let btn = document.querySelector('#btn1');
btn.addEventListener('click', () =>{
    let nuevoNombre = document.querySelector('#nuevoNombre');
    document.querySelector('#nom').innerHTML = nuevoNombre.value;
    //window.localStorage.setItem('usuario', nuevoNombre.value)
    storage.asignar('usuario', nuevoNombre.value);
    nuevoNombre.value = '';
});
let nombreLocal = storage.obtener('usuario');
document.querySelector('#nom').innerHTML = nombreLocal
storage.limpiar();