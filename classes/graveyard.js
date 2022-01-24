import Deck from './deck.js';

export default class Graveyard extends Deck {
    constructor(cards) {
        super("graveyard", cards);
    }

}