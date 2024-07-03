// Ejemplo 1: Imprimir números del 1 al 10:
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Ejemplo 2: Solicitar un número al usuario hasta que ingrese un valor válido:
let numero;

while (!numero || isNaN(numero)) {
  numero = parseInt(prompt("Ingrese un número:"));
}

console.log("El número ingresado es:", numero);

