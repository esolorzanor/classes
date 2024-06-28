// Ejemplo de Objeto

const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    carrera: "Ingeniería Informática",
    materias: ["Matemáticas", "Física", "Programación"],
    mostrarDatos: function() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Carrera: ${this.carrera}`);
      console.log(`Materias: ${this.materias}`);
    }
  };
  