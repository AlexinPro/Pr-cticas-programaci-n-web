export class Combo{
    id = '';
    name = '';
    clase = '';
    opciones = [];
    constructor (i, n, c, o){
        this.id = i;
        this.name = n;
        this.clase = c;
        this.opciones = o;
    }
    mostrar(){
        let select = '<select id="'+this.id+
        ' " name ="' + this.name+ '" class="form-select '+this.clase+'">';

        for(let i = 0; i< this.opciones.length; i++){
            select += '<option value= "'+this.opciones[i]+
            '">' +this.opciones[i]+'</option>';

        }
        select += '</select>';
        return select;
    }    
    
}
    
