// Ejemplo 1: Mostrar las propiedades de un objeto:
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
  };
  
  for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }

//   Ejemplo 2: Validar si una propiedad existe en un objeto:
const persona2 = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
  };
  
  const tieneEmail = persona2.hasOwnProperty("email");
  
  if (tieneEmail) {
    console.log("La persona tiene la propiedad 'email'");
  } else {
    console.log("La persona no tiene la propiedad 'email'");
  }
  