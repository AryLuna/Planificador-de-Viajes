//Función flecha que calcula el área de un rectángulo
const calculateAreaa = (width, height) => {
    return width * height;
};
let base = 5; // Ancho (width) del rectángulo
const multiplier = 2; // Constante multiplier con valor 2
//Llama a la función calculateArea y muestra el resultado
let area = calculateAreaa(base, multiplier);
console.log("El área del rectángulo es:", area);

//IMPLEMENTACION CON ES6
const calculateArea = (width, height) => {
    let base = width;       // Declara base con let
    const multiplier = 2;   // Declara multiplier como constante
    return base * height * multiplier; 
};
console.log(calculateArea(5, 10));  // Cambia los valores para probar diferentes áreas


//Ejercicio práctico: Uso de let, const y funciones flecha
//Función fetchUserData que devuelve una promesa simulando una operación asincrónica
function fetchUserData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const userData = { id: 1, name: 'Juan' }; // Objeto con propiedades id y name
        resolve(userData); // Resuelve la promesa con el objeto userData
      }, 2000); // Espera de 2 segundos
    });
}

//Función getUser que usa async/await para llamar a fetchUserData
async function getUser() {
    try {
      const user = await fetchUserData(); // Espera a que fetchUserData resuelva la promesa
      console.log(user); // Muestra el resultado (objeto) en la consola
    } catch (error) {
      console.error('Error:', error); // Si ocurre algún error, lo muestra en la consola
    }
}
// Llamamos a la función getUser para ejecutar el código
getUser();

//IMPLEMENTACION CON ES6(con Promesas y async/await)
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles() {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto('Camiseta', 25, 100);
producto1.actualizarStock(-20);
console.log(producto1.obtenerDetalles());  // Camiseta - Precio: 25 - Stock: 80
