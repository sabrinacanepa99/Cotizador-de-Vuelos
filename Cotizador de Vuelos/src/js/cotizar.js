export const cotizar = (distanciaEntrePaises, costoDeLaClase, cantidadBoletos) => {

    let costo = 0.1;
    let total = 0;

    total = (((distanciaEntrePaises * costo) * costoDeLaClase) * cantidadBoletos);

    return total.toFixed(2);
}
