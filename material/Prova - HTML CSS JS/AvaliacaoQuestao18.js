/* 
 Avaliação questão 18
 */
function verifica(){
    var sNumeros = document.getElementById("numeros").value;
    var iQtd = sNumeros.length;
    if(iQtd > 5){
        alert(iQtd + " caracteres informados, possui mais de 5 caracteres. ");
    }else{
        alert(iQtd + " caracteres informados, não possui mais de 5 caracteres. ");
    }
}


