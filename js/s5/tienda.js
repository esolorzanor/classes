/*
Ejercicio 2: Crear un objeto para representar una tienda online.
1. Crea un objeto llamado tienda con las siguientes propiedades: nombre, productos (un array de objetos con información sobre cada producto), métodos para agregar productos, eliminar productos y calcular el total de la compra.
2. Define cada método con la lógica correspondiente para realizar las acciones especificadas.
3. Agrega algunos productos al array de productos.
4. Elimina un producto del array.
5. Calcula el total de la compra considerando el precio de cada producto.
*/

var prod1 = {
    nombre: "cuaderno",
    precio: 100
};

var prod2 = {
    nombre: "folder",
    precio: 80
};

var prod3 = {
    nombre: "cartulina",
    precio: 20
};

var tienda = {
    nombre:"Librería Perú",
    productos: [prod1, prod2],
    agregar: function(producto){
        this.productos.push(producto);
    }
};

function suma(item){
    total = total + item.precio;    
}

function sumaVars(item){
    total = total + item;    
}

var total = 0;

tienda.agregar(prod3);

// for (let index = 0; index < tienda.productos.length; index++) {
//     const element = tienda.productos[index];
//     total = total + element.precio;
// }

tienda.productos.forEach(suma);

console.log("Total de la compra: " + total);


var numeros = [1,2,3,4,5,6,7,8,9,10];
total = 0;
numeros.forEach(sumaVars);

/** Pendiente:
 * Agregar el método eliminarProducto()
 * Agregar el método calculaTotalPrecios() <--- Para esto se puede reutilizar lo que se ha hecho con la estructura FOR
 */