import Deck from './deck.js';

export default class Mana extends Deck {
    constructor(cards) {
        super("mana", cards);
    }

    getAvailableMana() {
        return this.cards.length;
    }

    refreshMana() { //o sa se intample la inceputul rundei, toata mana va fi disponibila
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].setCanAttack = true;
        }
    }

}