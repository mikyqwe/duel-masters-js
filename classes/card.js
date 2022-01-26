export default class Card {
    constructor(cardData, playerName) {
        this.name = cardData.name;
        this.manaCost = cardData.mana;
        this.canAttack = false; // false = tapped(nu poate ataca)/  true =  untapped(poate ataca)
        this.tappedByOpponent = false;
        this.image = "images/" + cardData.name + ".png";
        this.id = this.name + "_" + playerName;
    }

    getHTML(playerName) {
        return `<div class="card" id="${this.name+'_' + playerName}">
            <img class="cardImage" src="${this.image}" />
            </div>`
    }

    click = function() {
        console.log("print");
    }

    get getName() {
        return this.name;
    }

    get getManaCost() {
        return this.manaCost;
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