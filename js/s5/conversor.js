
let tipo = prompt("Tipo de conversión (1) C->F, (2) F->C:");
let tempInicial = prompt("ingrese temperatura:");
let tempFinal = 0;
let tipoTi = "";
let tipoTf = "";

if(tipo == 1){
    // Conversión de C -> F
    tempFinal = tempInicial*9/5 + 32;
    tipoTi = "°C";
    tipoTf = "°F";
}else{
    // Conversión de F -> C
    tempFinal = (tempInicial-32)*5/9;
    tipoTi = "°F";
    tipoTf = "°C";
}

console.log(tempInicial + tipoTi + " equivale a "+tempFinal+tipoTf);