/**
Ejercicio 2: Crear una función que convierta grados Celsius a Fahrenheit.
1. Define la función convertirCelsiusAFahrenheit(gradosCelsius) que reciba un valor en grados Celsius como parámetro.
2. Dentro de la función, realiza la conversión utilizando la fórmula (gradosCelsius * 9/5) + 32.
3. Devuelve el resultado de la conversión.
4. Llama a la función convertirCelsiusAFahrenheit() con diferentes valores en grados Celsius y muestra el resultado en la consola.
*/

function convertirCelsiusAFahrenheit(gradosCelsius){
    var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    return gradosFahrenheit;
}

var Celsius = 100;
console.log(Celsius + "°C es equivalente a " + convertirCelsiusAFahrenheit(Celsius)+"°F");