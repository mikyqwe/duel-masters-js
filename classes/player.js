import Battlezone from "./battlezone.js";
import Deck from "./deck.js";
import Graveyard from "./graveyard.js";
import Hand from "./hand.js";
import Mana from "./mana.js";
import Shieldzone from "./shieldzone.js";

export default class Player {
    constructor(playerName) {
        this.deck = new Deck(playerName);
        this.hand = new Hand(playerName);
        this.graveyard = new Graveyard(playerName);
        this.shields = new Shieldzone(playerName);
        this.battleZone = new Battlezone(playerName);
        this.mana = new Mana(playerName);
        this.name = playerName;
    }

    deal(numberOfCards) {
        //gameOver = false //jocul se termina daca ramai fara carti in pachet/fara scuturi
        if (this.deck.cards.length >= numberOfCards)
            for (let i = 0; i < numberOfCards; i++) {
                let card = this.deck.drawCard();
                this.hand.addCard(card);
            }
    }

    addToMana(index) {
        this.mana.addCard(this.hand.removeCard(index));

    }

    addToGraveyard(index) {
        this.graveyard.addCard(this.battleZone.removeCard(index));
    }

    addToBattleZone(index) {
        if (this.mana.getAvailableMana() >= this.hand.cards[index].manaCost) {
            this.battleZone.addCard(this.hand.removeCard(index));
        }
    }

    addShields() {
        this.shields.addCard(this.deck.drawCard());
        this.shields.addCard(this.deck.drawCard());
        this.shields.addCard(this.deck.drawCard());
        this.shields.addCard(this.deck.drawCard());
        this.shields.addCard(this.deck.drawCard());
    }

    removeShield() {
        if (this.shields.cards.length > 0) {
            this.hand.addCard(this.shields.drawCard());
        }
    }
}