import Deck from './deck.js';

export default class Hand extends Deck {
    constructor(playerName) {
        super(playerName);
        this.cards = [];
    }
}