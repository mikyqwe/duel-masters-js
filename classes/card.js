export default class Card {
    constructor(cardData, playerName) {
        this.name = cardData.name;
        this.manaCost = cardData.mana;
        this.canAttack = true; // false = tapped(nu poate ataca)/  true =  untapped(poate ataca)
        this.canAttackIn = 0;
        this.fatigued = cardData.damage === 0 ? false : (cardData.fatigued !== undefined ? cardData.fatigued : true); // false = poate fi selectata (si ataca) / true = nu poate fi selectata(si ataca)
        this.image = "images/" + cardData.name + ".png";
        this.id = this.name + "_" + playerName;
        this.damage = cardData.damage;
        this.shieldsToBreak = cardData.shieldsToBreak !== undefined ? cardData.shieldsToBreak : 1;

        if (cardData.summonAbility !== undefined) {
            this.summonAbility = cardData.summonAbility;
        } else {
            this.summonAbility = function(game) {};
        }
    }

    tap() {
        this.canAttack = false;
        this.canAttackIn = 2;
    }

    untap() {
        if (this.canAttackIn > 0) {
            this.canAttackIn -= 1;
        }

        if (this.canAttackIn === 0) {
            this.canAttack = true;
        }
    }

    getHTML(inBattlezone) {
        if (this.canAttack === false) {
            return `
                <div class="card tappedCard" id="${this.id}">
                    <img class="cardImage" src="${this.image}" />
                </div>
            `;
        } else {
            if (this.fatigued && inBattlezone === true) {
                return `
                    <div class="card" id="${this.id}">
                        <img class="cardImage" src="${this.image}" />
                        <img class="fatigue" src="images/fatigue.png" />
                    </div>
                `;
            } else {
                return `
                    <div class="card" id="${this.id}">
                        <img class="cardImage" src="${this.image}" />
                    </div>
                `;
            }
        }
    }
}