import Card from './card.js';
import cardsData from '../cards/cardsData.js';

export default class Deck {

    constructor(playerName) {
        this.playerName = playerName;
        let cards = [];
        for (let i = 0; i < cardsData.creatures.length; i++) {
            let newCard = new Card(cardsData.creatures[i], playerName);
            cards.push(newCard);
        }
        let selectedCards = [];
        if (cards.length > 40) {
            for (let i = 0; i < 40; i++) {
                let pos = Math.floor(Math.random() * cards.length);
                selectedCards.push(cards.splice(pos, 1));
            }
            this.cards = selectedCards;
        } else {
            this.cards = cards;
        }

    }

    get getPlayerName() {
        return this.playerName;
    }
    get getCards() {
        return this.cards;
    }

    shuffle() {
        let currentIndex = this.cards.length,
            randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }

    }

    isEmpty() {
        if (this.cards.length === 0)
            return true;
        else
            return false;
    }

    addCard(card) {
        this.cards.push(card);
    }

    drawCard() {
        return this.cards.pop();
    }

    removeCard(position) {

        if (this.isEmpty()) {
            return null;
        } else {
            return this.cards.splice(position, 1)[0];
        }

    }


}