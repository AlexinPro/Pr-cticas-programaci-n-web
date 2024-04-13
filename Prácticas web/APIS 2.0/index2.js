import { Tarjeta } from "./tarjeta.js";
const url = 'https://pokeapi.co/api/v2/pokemon/';

//esta funcion se ejecuta primero
window.onload = async() =>{
   await getPokemones();
}

/*async espera a que regrese una llamada y después mada otra. sync envía las dos
sin importar cual llegue primero*/
const getPokemones = async() =>{
    //let tabla = '';
    // Métodos GET (por default), POST, PUT, DELETE
    const peticion = await fetch(url);
    if(peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
        /*for (let i=0; i<pokemones.lenght; i++){
            pokemones[0].name
        }*/
        pokemones.forEach(async (pok,i) =>{
            const pokecard = new Tarjeta(3, pok.name, pok.url);
           //let img = await getImagen(pok.url);
           let card = await pokecard.mostrar();
            document.querySelector('#root').innerHTML += card;
        });
        
        //console.log(pokemones);
    }
    
}