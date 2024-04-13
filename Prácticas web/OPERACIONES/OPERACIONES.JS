var boton = document.getElementById('btn1');

document.addEventListener('click',operacion)

function operacion(){
    var num1 = parseInt (document.getElementById ('n1').value);
    var num2 = parseInt (document.getElementById ('n2').value);
    var opcion = document.querySelector('select').value;

    var resultado;
    if(opcion == 1){
        resultado = num1 + num2;
    }
    else if (opcion == 2){
        resultado = num1 - num2;
    }
    else if (opcion == 3){
        resultado = num1 * num2;
    }
    else if(opcion == 4){
        resultado = num1 / num2;
    }

    document.getElementById('resultado').innerHTML = resultado;
};

