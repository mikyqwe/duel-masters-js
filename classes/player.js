import Battlezone from "./battlezone.js";
import Graveyard from "./graveyard.js";
import Hand from "./hand.js";
import Mana from "./mana.js";
import Shieldzone from "./shieldzone.js";

export default class Player {
    constructor(deck, name = "unnamed player") {
        this.deck = deck;
        this.hand = new Hand([]);
        this.graveyard = new Graveyard([]);
        this.shields = new Shieldzone([]);
        this.battleZone = new Battlezone([]);
        this.mana = new Mana([]);
        this.name = name;
    }
    deal(numberOfCards) {
        //gameOver = false //jocul se termina daca ramai fara carti in pachet/fara scuturi
        if (this.deck.cards.length >= numberOfCards)
            for (let i = 0; i < numberOfCards; i++) {
                let card = this.deck.drawCard();
                this.hand.addCard(card);
            }
        else {
            console.log("player does not have enough cards to draw. game over.");
            //??
        }
    }

    addToMana(index) {
        this.mana.addCard(this.hand.removeCard(index));

    }

    addToGraveyard(index) {
        this.graveyard.addCard(this.battleZone.removeCard(index));
    }

    addToBattleZone(index) {
        if (this.mana.getAvailableMana() >= this.hand.cards[index].getManaCost) {
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