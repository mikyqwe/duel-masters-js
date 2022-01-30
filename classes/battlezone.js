import Deck from './deck.js';

export default class Battlezone extends Deck {
    constructor(playerName) {
        super(playerName);
        this.cards = [];
    }

    unfatigueAllCards() {
        for(let card of this.cards) {
            card.fatigued = false;
        }
    }

    untapAllCards() { //o sa se intample la inceputul rundei, toate creaturile care inca sunt in viata vor putea ataca
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].untap();
        }
    }

    untapCard(index) {
        if (index >= 0 && index < this.cards.length)
            this.cards[index].untap();
    }

    tapCard(index) {
        if (index >= 0 && index < this.cards.length)
            this.cards[index].tap();
    }
}