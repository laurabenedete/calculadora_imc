window.onload = function(){
    const resultado1 = document.getElementById("resultado1");
    const resultado2 = document.getElementById("resultado2");
    const resultado3 = document.getElementById("resultado3");
    const resultado4 = document.getElementById("resultado4");
    const resultado5 = document.getElementById("resultado5");
    const resultado6 = document.getElementById("resultado6");
    let resultadoFormatado;

    document.getElementById("calcular").addEventListener("click", function(){
        num1 = document.getElementById("peso").value;
        num2 = document.getElementById("altura").value;

        peso2 = num2 * num2;

        var resultado = num1 / peso2;

        resultadoFormatado = resultado.toFixed(2);

        document.getElementById("imc").value = resultadoFormatado;
        
        console.log("resultadoFormatado:", resultadoFormatado);
        
    
    if(resultadoFormatado < 18.5){
        resultado1.style.display = "block";
        }
        else if (resultadoFormatado < 24.9){
            resultado2.style.display = "block";
        }
        else if (resultadoFormatado < 29.9){
            resultado3.style.display = "block";
        }
        else if (resultadoFormatado < 34.9){
            resultado4.style.display = "block";
        }
        else if (resultadoFormatado < 39.9){
            resultado5.style.display = "block";
        }
        else if (resultadoFormatado > 39.9){
            resultado6.style.display = "block";
        }
    })

    document.getElementById("peso").addEventListener("click", function () {
        resultado1.style.display = "none";
        resultado2.style.display = "none";
        resultado3.style.display = "none";
        resultado4.style.display = "none";
        resultado5.style.display = "none";
        resultado6.style.display = "none";
})
document.getElementById("altura").addEventListener("click", function () {
    resultado1.style.display = "none";
    resultado2.style.display = "none";
    resultado3.style.display = "none";
    resultado4.style.display = "none";
    resultado5.style.display = "none";
    resultado6.style.display = "none";
})
}
