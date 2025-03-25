import { calcularCosto } from './costo.js';

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, numeroPersonas = 1) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        numeroPersonas,
        costo: calcularCosto(destino, transporte, numeroPersonas),
    };

    destinos.push(nuevoViaje);
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Número de personas: ${viaje.numeroPersonas}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};

export { registrarDestino, mostrarItinerario };
