let frutas = ["manzana", "fresa", "platano", "mango"];
let mixto = ["Ivan", true, 23, {ciudad: "Ciudad de Mexico"}]
let numeros = [1, 1.5, 2, 2.5, 3, 3.5, 4]; // Definición válida

frutas.push ("coco") //añade un elemento nuevo
frutas.pop() //solo elimina el ultimo elemento

frutas.forEach (fruta => console.log (fruta))// frutas = array / fruta = un elemento en cada iteracion
console.log(frutas);

// Filtrar datos mayores de 2.5
let mayores = numeros.filter(num => num >= 2.5);
console.log(mayores);

// Funcion
let saludo = function(nombre) {
    return `¡Hola, ${nombre}!`;
};
console.log(saludo("Araceli")); 

// Metodo
let persona = {
    nombre: "Araceli",
    saludar: function() {
    return `¡Hola, soy ${this.nombre}!`;
    }
};
console.log(persona.saludar()); 

//Map
let users = [
    {nombre: "Ana", edad: 25},
    {nombre: "Juan", edad: 24},
    {nombre: "Ary", edad: 25}
];

let nombres = users.map(usuario => usuario.nombre)
console.log(nombres);

let productos = [
    {nombre: "Coca Cola", precio: 25},
    {nombre: "Galletas", precio: 24},
    {nombre: "Cigarros", precio: 25}
]

let productoIva = productos.map(producto => ({
    ...producto, // copia todas las propiedades del objeto actual
    precioIva: producto.precio * 1.16 
}))

console.log(productoIva);

//Filter
let pacientes = [
    {nombre: "Ana", edad: 25},
    {nombre: "Juan", edad: 17},
    {nombre: "Bryan", edad: 27},
    {nombre: "Ary", edad: 25}
]

let menoresEdad = pacientes.filter(paciente => paciente.edad <=18)
console.log(menoresEdad);

let palabras = ["Oye", "M*mon", "Devuelveme", "a", "mi"]
let conLetraE = palabras.filter(palabra => palabra.includes("e"))
console.log(conLetraE);

//Sort
let ordenamiento = [20,124,21,24123,10,9,903,53]
ordenamiento.sort((a,b) => a -b); // b - a funciona de mayor a menor
console.log(ordenamiento);
// Ordena alfabeticamente
let words = ["Amigo", "Operacion", "Ambicion", "Ascii", "Botella"]
words.sort()
console.log(words);

pacientes.sort((a,b) => a.edad - b.edad)
console.log(pacientes);

//Sorted no modifica el arreglo original, crea uno nuevo y lo manda a una nueva variable
let numbers = [2,5,3,55,63,20]
let ordenado = numbers.toSorted((a,b) => a-b)
console.log(ordenado);

let area = []
