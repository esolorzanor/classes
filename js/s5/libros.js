/*
Ejercicio 1: Crear un objeto para representar un libro.
1. Crea un objeto llamado libro con las siguientes propiedades: título, autor, ISBN, género y precio.
2. Asigna valores iniciales a cada propiedad.
3. Define un método dentro del objeto llamado mostrarDetalles() que imprima en la consola la información del libro.
4. Crea otro objeto libro2 con propiedades similares al primer objeto.
5. Utiliza el método mostrarDetalles() para imprimir la información de ambos libros.
*/

var libro = {
    titulo: "La Ciudad de los Perros",
    autor: "Mario Vargas Llosa",
    ISBN:"13546565-468431-53251",
    genero: "Novela",
    precio: 20,
    mostrarDetalles: function(){
        console.log("Título: "+this.titulo);
        console.log("Autor: "+this.autor);
        console.log("ISBN: "+this.ISBN);
        console.log("Género: "+this.genero);
        console.log("Precio: "+this.precio);
    }
}

var libro2 = {
    titulo: "Conversaciones en la Catedral",
    autor: "Mario Vargas Llosa",
    ISBN:"56354365-468431-53251",
    genero: "Novela",
    precio: 60,
    mostrarDetalles: function(){
        console.log("Título: "+this.titulo);
        console.log("Autor: "+this.autor);
        console.log("ISBN: "+this.ISBN);
        console.log("Género: "+this.genero);
        console.log("Precio: "+this.precio);
    }
}

libro.mostrarDetalles();
libro2.mostrarDetalles();
