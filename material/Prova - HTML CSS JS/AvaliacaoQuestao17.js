/* 
 Avaliação questão 17
 */
function soma(){
    var sSoma1 = document.getElementById("numero1").value;
    var sSoma2 = document.getElementById("numero2").value;
    var fSoma1 = parseFloat(sSoma1); 
    var fSoma2 = parseFloat(sSoma2);
     if(Number.isNaN(fSoma1)){
        fSoma1 = 0;
    }
    if(Number.isNaN(fSoma2)){
        fSoma2 = 0;
    }
    var fSoma = fSoma1 + fSoma2;
    alert("Soma dos dois numero " + fSoma);
           
}

function multiplica(){
    var sMultiplica1 = document.getElementById("numero1").value;
    var sMultiplica2 = document.getElementById("numero2").value;
    var fMultiplica1 = parseFloat(sMultiplica1); 
    var fMultiplica2 = parseFloat(sMultiplica2);
     if(Number.isNaN(fMultiplica1)){
        fMultiplica1 = 0;
    }
    if(Number.isNaN(fMultiplica2)){
        fMultiplica2 = 0;
    }
    var fMultiplicacao = fMultiplica1 * fMultiplica2;
    alert("Multiplicação dos dois numero " + fMultiplicacao);
}

function media(){
    var sMedia1 = document.getElementById("numero1").value;
    var sMedia2 = document.getElementById("numero2").value;
    var fMedia1 = parseFloat(sMedia1); 
    var fMedia2 = parseFloat(sMedia2);
    if(Number.isNaN(fMedia1)){
        fMedia1 = 0;
    }
    if(Number.isNaN(fMedia2)){
        fMedia2 = 0;
    }
    var fMedia = (fMedia1 + fMedia2)/2;
    alert("Multiplicação dos dois numero " + fMedia);
}

function concatenar(){
    var sConcatena1 = document.getElementById("numero1").value;
    var sConcatena2 = document.getElementById("numero2").value;
    var sConcatenados = sConcatena1 + sConcatena2;
    alert("Concatenação: " + sConcatenados);
}


