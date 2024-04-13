export class Tarjeta{
    col = 0;
    nombre = '';
    url = '';
    constructor(c, n, u){
        this.col = c;
        this.nombre = n;
        this. url = u;        
    }
    async mostrar(){
        const info = await getDetalle(this.url);
        let img = info[0];
        let id = info[1];
        let abilities = info[2];
        let height = info[3];
        let habilidades ='';
        let weight = info [4];
        abilities.forEach(hab => {
            habilidades += hab.ability.name+ ' ';           
        });
        let card = '<div class="col-md-'+this.col+'">';
        card += '<div class="card">';
        card += '<img class="card-img-top p-2" src="'+img+'" height="150">'
        card += '<div class="card-body">'
        card += '<h5 class="card-title tex-center tex-capitalize">'
        card += '<span class="badge text-bg-secondary"> #'+id+'</span> '+this.nombre+'</h5></h1>'
        card += '';
        card += '<p class="card-text">Habilidades: <b> '+habilidades+'</p>';
        card += '<p class="card-text">Altura:' +height+' </p>'
        card += '<p class="card-text"> Peso: ' +weight/10+' kg </p>'
        card += '</div> <br> </div> <br> </div>'
        return card;
    }

}

const getDetalle = async(liga) =>{
    const peticion = await fetch(liga);
    let detalles = [];
    if(peticion.ok){
        const data = await peticion.json();
        detalles.push(data.sprites.other.dream_world.front_default);
        detalles.push(data.id)
        detalles.push(data.abilities)
        detalles.push(data.height)
        detalles.push(data.weight)
        return detalles;
        //console.log(data.sprites.other.dream_world.front_default);
    }
}