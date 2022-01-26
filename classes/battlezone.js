import Deck from './deck.js';

export default class Battlezone extends Deck {
    constructor(playerName) {
        super(playerName);
        this.cards = [];
    }

    untapAllCards() { //o sa se intample la inceputul rundei, toate creaturile care inca sunt in viata vor putea ataca
        for (let i = 0; i < this.cards.length; i++) {
            if (!this.cards[i].getTappedByOpponent) {
                this.cards[i].setCanAttack = true;
            }

        }
    }

    untapCard(index) {
        if (index >= 0 && index < this.cards.length)
            this.cards[index].setCanAttack = true;
    }

    tapCard(index) {
        if (index >= 0 && index < this.cards.length)
            this.cards[index].setCanAttack = false;
    }


}