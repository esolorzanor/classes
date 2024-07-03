// Calcular la calificación de un estudiante:

let nota = 85;

if (nota >= 90) {
  console.log("¡Excelente!");
} else if (nota >= 80) {
  console.log("Muy bien");
} else if (nota >= 70) {
  console.log("Bien");
} else if (nota >= 60) {
  console.log("Suficiente");
} else {
  console.log("Reprobado");
}


// Aplicar un descuento en una compra:
let totalCompra = 1200;
let tieneDescuento = true;

if (tieneDescuento) {
  let descuento = totalCompra * 0.1;
  totalCompra -= descuento;
  console.log("Total con descuento:", totalCompra);
} else {
  console.log("Total sin descuento:", totalCompra);
}


// Mostrar un mensaje personalizado según el día de la semana:
let dia = 1; // 1: Lunes, 2: Martes, etc.

if (dia === 1) {
  console.log("¡Feliz lunes!");
} else if (dia === 2) {
  console.log("¡Martes de ánimo!");
} else if (dia === 3) {
  console.log("¡Miércoles de energía!");
} else if (dia === 4) {
  console.log("¡Jueves de productividad!");
} else if (dia === 5) {
  console.log("¡Viernes de relax!");
} else if (dia === 6) {
  console.log("¡Sábado de aventuras!");
} else if (dia === 7) {
  console.log("¡Domingo de descanso!");
} else {
  console.log("Día no válido");
}
