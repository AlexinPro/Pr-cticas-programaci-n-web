import {Persona} from './persona.js'
import {Combo} from './combo.js'

const benny = new Persona('Benito' , 'Juarez', 68, 1.80);
const tez = new Persona('Lionel' , 'Messi', 92, 1.95);
console.log(benny.imc());
console.log(tez.saludar());

let btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    let Valores = document.querySelector('#valores').value;
    let arrayValores = Valores.split(',');

const colores = //('cmbColores', 'colores', 'txt-danger', arrayValores);
new Combo ('cmbColores', 'colores', 'txt-danger', arrayValores);
document.getElementById('div1').innerHTML = colores.mostrar();

const btn2 = new Boton('Eliminar', 'danger', 'btn1', 'btnEliminar');
const btn3 = new Boton('Guardar', 'succes', 'btn2', 'btnGliminar');
var div1 = document.querySelector('#div1')
div1.innerHTML = btn2.mostrar()+btn3.mostrar();

});