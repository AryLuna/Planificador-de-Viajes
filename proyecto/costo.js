// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, numeroPersonas = 1) => {
    let costoBase = 0;

// Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        default:
            costoBase = 300; // Destino genérico
    }

// Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

// Aplicar descuento si hay más de 3 personas
    if (numeroPersonas > 3) {
        costoBase *= 0.9; // 10% de descuento
    }

    return costoBase * numeroPersonas;
};

export { calcularCosto };
