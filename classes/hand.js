import Deck from './deck.js';

export default class Hand extends Deck {
    constructor(cards) {
        super("hand", cards);
    }

}