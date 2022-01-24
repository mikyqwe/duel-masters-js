export default class Deck {

    constructor(deckName, cards) {
        this.deckName = deckName;
        if (cards === []) {
            this.cards = [];
        } else {
            this.cards = cards.slice();
        }
    }

    get getDeckName() {
        return this.deckName;
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