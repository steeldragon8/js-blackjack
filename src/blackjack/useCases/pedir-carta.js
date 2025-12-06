/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['2C', '2D', '2H', '2S']
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}