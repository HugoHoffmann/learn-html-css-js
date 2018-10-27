/* 
 Avaliação questão 16
 */
function verifica(){
    var sGasolina = document.getElementById("gaso").value;
    var sAlcool = document.getElementById("alco").value;
    sGasolina = sGasolina.replace(",",".");
    sAlcool = sAlcool.replace(",",".");
    var fGasolina = parseFloat(sGasolina);
    var fAlcool = parseFloat(sAlcool);

    if(Number.isNaN(fGasolina)){
        fGasolina = 0;
    }
    if(Number.isNaN(fAlcool)){
        fAlcool = 0;
    }

    var fGasolinaPorcentagem = (fGasolina*70)/100;

    if(fAlcool <= fGasolinaPorcentagem){
        fAlcool = fAlcool.toFixed(2).toString().replace(".",",");
        alert("É mais vantajoso abascer alcool pagando R$" + fAlcool + " o litro");
    }else{
        fGasolina = fGasolina.toFixed(2).toString().replace(".",",");
       alert("É mais vantajoso abascer Gasolina pagando R$" + fGasolina + " o litro"); 
    }   
}


