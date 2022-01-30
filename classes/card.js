export default class Card {
    constructor(cardData, playerName) {
        this.name = cardData.name;
        this.manaCost = cardData.mana;
        this.canAttack = true; // false = tapped(nu poate ataca)/  true =  untapped(poate ataca)
        this.image = "images/" + cardData.name + ".png";
        this.id = this.name + "_" + playerName;
        this.damage = cardData.damage;

        if(cardData.summonAbility !== undefined) {
            this.summonAbility = cardData.summonAbility;
        }
        else {
            this.summonAbility = function(game) {};
        }
    }

    getHTML(playerName) {
        if(this.canAttack === false)
        {
            return `<div class="card tappedCard" id="${this.id}">
                <img class="cardImage" src="${this.image}" />
                </div>`;
        }
        else {
            return `<div class="card" id="${this.id}">
                <img class="cardImage" src="${this.image}" />
                </div>`;
        }
    }
}