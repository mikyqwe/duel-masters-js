import Deck from './deck.js';

export default class Mana extends Deck {
    constructor(playerName) {
        super(playerName);
        this.cards = [];
    }

    getAvailableMana() {
        let untapped = 0;

        for (let card of this.cards) {
            if(card.canAttack === true) {
                untapped += 1;
            }
        }

        return untapped;
    }

    substractMana(amount) {
        if(amount <= this.getAvailableMana() && amount > 0) {
            for(let card of this.cards) {
                if(card.canAttack === true) {
                    card.canAttack = false;
                    amount -= 1;
                }

                if(amount === 0) {
                    break;
                }
            }
        }
    }

    refreshMana() { //o sa se intample la inceputul rundei, toata mana va fi disponibila
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].canAttack = true;
        }
    }

}