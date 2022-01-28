import Deck from './deck.js';

export default class Graveyard extends Deck {
    constructor(playerName) {
        super(playerName);
        this.cards = [];
    }
}