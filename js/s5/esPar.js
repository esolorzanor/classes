/*
Ejercicio 3: Crear una función que verifique si un número es par o impar.
1. Define la función esPar(numero) que reciba un número como parámetro.
2. Dentro de la función, utiliza el operador % para obtener el residuo de la división del número por 2.
3. Si el residuo es 0, el número es par. Si el residuo es diferente de 0, el número es impar.
4. Devuelve un valor booleano (true si es par, false si es impar).
5. Llama a la función esPar() con diferentes números y muestra el resultado en la consola
*/

/*Versión DETALLADA de la función esPar() */
// function esPar(numero){
//     var residuo = numero % 2;
//     var resultado;
//     if(residuo == 0){
//         resultado = true;
//     }else{
//         resultado = false;
//     }
//     return resultado;
// }

/*Versión COMPACTA de la función esPar() */
function esPar(numero){
    return (numero %2) == 0 ? true:false;
}

var n = 12;
console.log("El número " + n + "es par?: " + esPar(n));
