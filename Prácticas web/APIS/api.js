const url = 'https://pokeapi.co/api/v2/pokemon/';

//esta funcion se ejecuta primero
window.onload = async() =>{
   await getPokemones();
}

/*async espera a que regrese una llamada y después mada otra. sync envía las dos
sin importar cual llegue primero*/
const getPokemones = async() =>{
    let tabla = '';
    // Métodos GET (por default), POST, PUT, DELETE
    const peticion = await fetch(url);
    if(peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
        /*for (let i=0; i<pokemones.lenght; i++){
            pokemones[0].name
        }*/
        pokemones.forEach(async (pok,i) =>{
           let img = await getImagen(pok.url);
            //console.log(img);
            tabla = '<tr><td>'+(i+1)
            +'</td><td>'+pok.name
            +'</td><td><img height="80" src="'+img+'"/></td></tr>'
            //console.log(tabla)
            document.querySelector('#tabla').innerHTML += tabla;
        });
        
        //console.log(pokemones);
    }
    

}
const getImagen = async(liga) =>{
    const peticion = await fetch(liga);
    if(peticion.ok){
        const data = await peticion.json();
        return data.sprites.other.dream_world.front_default;
        //console.log(data.sprites.other.dream_world.front_default);
    }
}