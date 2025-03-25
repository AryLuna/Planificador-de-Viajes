import { registrarDestino, mostrarItinerario } from './viajes.js';

const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 4);
    registrarDestino("Londres", "2024-07-01", "Tren", 2);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

iniciarApp();
