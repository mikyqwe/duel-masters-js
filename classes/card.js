export default class Card {
    constructor(cardName, manaCost, description) {
        this.name = cardName;
        this.manaCost = manaCost;
        this.description = description;
        this.canAttack = false; // false = tapped(nu poate ataca)/  true =  untapped(poate ataca)
        this.tappedByOpponent = false;
    }

    get getName() {
        return this.name;
    }

    get getManaCost() {
        return this.manaCost;
    }

    get getDescription() {
        return this.description;
    }

    get getCardPosition() {
        return this.cardPosition;
    }

    get getTappedByOpponent() {
        return this.tappedByOpponent;
    }

    get getCanAttack() {
        return this.canAttack;
    }


    set setCanAttack(value) {
        this.canAttack = value;
    }

    set setTappedByOpponent(value) {
        this.tappedByOpponent = value;
    }
}