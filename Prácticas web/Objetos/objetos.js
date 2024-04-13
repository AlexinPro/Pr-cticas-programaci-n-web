//objetos: atributos y métods
//En js se pueden crear objetos sin necesidad de tener una clase

const persona ={
    nombre : 'alexito',
    apellidos : 'robles',
    edad : 15,
    saludar : function(){
        return 'hola, soy '+this.nombre
    }
}
//console.log(persona.saludar());
const persona2 ={
    nombre : 'el venado',
    apellidos : 'martínez',
    edad : 25,
    saludar : function(){
        return 'hola, soy'+this.nombre
    }
}
let personas = [persona, persona2];
console.log(personas[0].saludar());

let tabla ='';
for(let i = 0; i<personas.length; i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'
    +personas[i].nombre+'</td><td>'
    +personas[i].apellidos+'</td><td>'
    +personas[i].edad+'</td><td>'
}
document.getElementById('tabla').innerHTML = tabla;