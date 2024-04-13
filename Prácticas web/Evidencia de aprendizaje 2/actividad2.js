document.getElementById("btnRes").addEventListener("click", function() {
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    
    var listaNumeros = "";

    
    for (var i = num1; i >= 1; i--) {
        
        if (i % num2 === 0) {
            
            listaNumeros += "<strong>" + i + "</strong>";
        } else {
            
            listaNumeros += i;
        }

        if (i % 5 == 0){
            listaNumeros += "<strong> es múltiplo de 5 </strong> <br>";
        } 
        else{
            listaNumeros += " no es multiplo de 5 <br>"
        }
    }

    
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = listaNumeros;
});
