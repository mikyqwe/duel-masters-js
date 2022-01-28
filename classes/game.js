import Player from "./player.js";
import Deck from "./deck.js";

export default class Game {
    constructor() {
        this.pc = new Player("PC");
        this.player = new Player("Player");

        this.menuButtons = ["manaStage", "summonStage", "attackStage", "endTurnStage"];
        this.stage = "manaStage";
    }

    startGame() {
        //shuffle both decks
        this.pc.deck.shuffle();
        this.player.deck.shuffle();

        //adding 5 shields for each players
        this.pc.addShields();
        this.player.addShields();

        //todo trage 5 carti momentan tragem doar 2

        this.pc.deal(5);
        this.player.deal(5);

        this.addStageButtonEvents();
        this.selectStage("manaStage");
    }

    update() {

        //Update player data
        //Draw player's hand cards
        let playerHand = document.getElementById("playerHand");

        //Clean player's hand
        playerHand.innerHTML = "";

        for(let i = 0; i < this.player.hand.cards.length; i++) {
            playerHand.innerHTML += this.player.hand.cards[i].getHTML();
        }

        //Draw player's battlezone cards
        let playerBattlezone = document.getElementById("playerBattlezone");

        //Clean player's battlezone
        playerBattlezone.innerHTML = "";

        for(let i = 0; i < this.player.battleZone.cards.length; i++) {
            playerBattlezone.innerHTML += this.player.battleZone.cards[i].getHTML();
        }

        //Update player's shields
        let playerShields = document.getElementById("playerShieldsNumber");
        playerShields.innerHTML = this.player.shields.cards.length;

        //Update player's mana
        let playerMana = document.getElementById("playerManaNumber");
        playerMana.innerHTML = this.player.mana.getAvailableMana();

        //Update player's graveyard
        let playerGraveyard = document.getElementById("playerGraveyardNumber");
        playerGraveyard.innerHTML = this.player.graveyard.cards.length;

        //Unselect player cards
        this.unselectPlayerCards();

        //Update PC data
        //Draw PC battlezone cards
        let pcBattlezone = document.getElementById("pcBattlezone");

        //Clean PC's battlezone
        pcBattlezone.innerHTML = "";

        for(let i = 0; i < this.pc.battleZone.cards.length; i++)
        {
            pcBattlezone.innerHTML += this.pc.battleZone.cards[i].getHTML();
        }

        //Update PC's shields
        let pcShields = document.getElementById("pcShieldsNumber");
        pcShields.innerHTML = this.pc.shields.cards.length;

        //Update PC's mana
        let pcMana = document.getElementById("pcManaNumber");
        pcMana.innerHTML = this.pc.mana.getAvailableMana();

        //Remove mana event
        let playerManaButton = document.getElementById("playerMana");
        playerManaButton.onclick = undefined;

        //Remove battlezone event
        let playerBattlezoneButton = document.getElementById("playerBattlezone");
        playerBattlezoneButton.onclick = undefined;

        //Remove PC Shields event
        let pcShieldsButton = document.getElementById("pcShields");
        pcShieldsButton.onclick = undefined;
    }

    //Event loop for different stages of the game
    selectStage(stage) {
        this.update();
        
        if(stage === "manaStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);

            //Add card select event on card click
            for(let card of this.player.hand.cards) {
                let cardHTML = document.getElementById(card.id);
                
                cardHTML.onclick = function() {
                    if(card.selected === undefined || card.selected === false) {
                        card.selected = true;
                        cardHTML.classList.add("cardSelected");
                    }
                    else {
                        card.selected = false;
                        cardHTML.classList.remove("cardSelected");
                    }
                }.bind(this);
            }

            //When the player clicks the mana and a card is selected,
            //the card will be added to mana
            let playerManaButton = document.getElementById("playerMana");
            playerManaButton.onclick = function() {
                for(let i = this.player.hand.cards.length - 1; i >= 0; i--) {
                    let card = this.player.hand.cards[i];
                    let cardHTML = document.getElementById(card.id);

                    if(card.selected) {
                        card.selected = undefined;
                        this.player.hand.removeCard(i);
                        this.player.mana.addCard(card);
                    }
                }

                this.selectStage("manaStage");
            }.bind(this);
        }
        else if(stage === "summonStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);

            //Add card select event on card click
            for(let card of this.player.hand.cards) {
                let cardHTML = document.getElementById(card.id);
                
                cardHTML.onclick = function() {
                    if(card.selected === undefined || card.selected === false) {
                        for(let c of this.player.hand.cards) {
                            if(c.selected) {
                                c.selected = false;
                                let cHTML = document.getElementById(c.id);
                                cHTML.classList.remove("cardSelected");
                            }
                        }

                        card.selected = true;
                        cardHTML.classList.add("cardSelected");
                    }
                    else {
                        card.selected = false;
                        cardHTML.classList.remove("cardSelected");
                    }
                }.bind(this);
            }

            //Player battlezone event; when the player clicks the battlezone
            //and a card is selected the card will be added to the battlezone
            let playerBattlezone = document.getElementById("playerBattlezone");
            playerBattlezone.onclick = function() {
                for(let i = this.player.hand.cards.length - 1; i >= 0; i--) {
                    let card = this.player.hand.cards[i];
                    let cardHTML = document.getElementById(card.id);

                    if(card.selected && this.player.mana.getAvailableMana() >= card.manaCost) {
                        card.selected = undefined;
                        this.player.hand.removeCard(i);
                        this.player.battleZone.addCard(card);
                        this.player.mana.substractMana(card.manaCost);
                    }
                }

                this.selectStage("summonStage");
            }.bind(this);
        }
        else if(stage === "attackStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);

            //Add card select event on card click
            for(let card of this.player.battleZone.cards) {
                let cardHTML = document.getElementById(card.id);
                
                cardHTML.onclick = function() {
                    if((card.selected === undefined || card.selected === false) && card.canAttack === true) {
                        for(let c of this.player.battleZone.cards) {
                            if(c.selected) {
                                c.selected = false;
                                let cHTML = document.getElementById(c.id);
                                cHTML.classList.remove("cardSelected");
                            }
                        }

                        card.selected = true;
                        cardHTML.classList.add("cardSelected");
                    }
                    else {
                        card.selected = false;
                        cardHTML.classList.remove("cardSelected");
                    }
                }.bind(this);
            }

            //Attack PC Shields event
            let pcShieldsHTML = document.getElementById("pcShields");
            pcShieldsHTML.onclick = function() {
                for(let card of this.player.battleZone.cards) {
                    if(card.selected) {
                        if(this.pc.shields.isEmpty()) {
                            this.gameOver("player", "TODOMEDA!");
                            return;
                        }

                        this.pc.removeShield();
                        card.canAttack = false;
                        card.selected = false;
                        break;
                    }
                }

                this.selectStage("attackStage");
            }.bind(this);

            //Player card attacks PC card event
            for(let i = this.pc.battleZone.cards.length - 1; i >= 0; i--) {
                let pcCard = this.pc.battleZone.cards[i];
                let pcCardHTML = document.getElementById(pcCard.id);

                pcCardHTML.onclick = function() {
                    for(let j = this.player.battleZone.cards.length - 1; j >= 0; j--) {
                        let card = this.player.battleZone.cards[j];

                        if(card.selected) {
                            if(card.damage > pcCard.damage) {
                                card.canAttack = false;
                                this.pc.addToGraveyard(i);
                            }
                            else if(card.damage === pcCard.damage) {
                                this.pc.addToGraveyard(i);
                                this.player.addToGraveyard(j);
                            }
                            else {
                                pcCard.canAttack = false;
                                this.player.addToGraveyard(j);
                            }

                            card.selected = false;
                            break;
                        }
                    }

                    this.selectStage("attackStage");
                }.bind(this);
            }
        }
        else if(stage === "endTurnStage") {
            this.selectStageButton(stage);

            //End turn for player. Player receives a card, his battlezone's cards are untapped and mana refreshed
            if(this.player.deck.cards.length === 0) {
                this.gameOver("pc", "You have no more cards left in the deck");
                return;
            }

            this.player.deal(1);
            this.player.battleZone.untapAllCards();
            this.player.mana.refreshMana();

            //AI
            for(let i = this.pc.hand.cards.length - 1; i >= 0; i--) {
                let card = this.pc.hand.cards[i];

                if(card.manaCost >= 4) {
                    this.pc.hand.removeCard(i);
                    this.pc.mana.addCard(card);
                }
            }

            for(let i = this.pc.hand.cards.length - 1; i >= 0; i--) {
                let card = this.pc.hand.cards[i];

                if(card.manaCost <= this.pc.mana.getAvailableMana()) {
                    this.pc.hand.removeCard(i);
                    this.pc.mana.substractMana(card.manaCost);
                    this.pc.battleZone.addCard(card);
                }
            }

            //End turn for PC. PC receives a card, his battlezone's cards are untapped and mana refreshed
            if(this.pc.deck.cards.length === 0) {
                this.gameOver("player", "The PC has no more cards left in the deck");
                return;
            }
            this.pc.deal(1);
            this.pc.battleZone.untapAllCards();
            this.pc.mana.refreshMana();

            //Change back to player's mana turn
            this.selectStageButton("manaStage");
            this.selectStage("manaStage");
        }
    }

    //Add stage buttons events on click
    addStageButtonEvents() {
        for(let i of this.menuButtons)
        {
            let menuHTML = document.getElementById(i);
            menuHTML.onclick = function() {
                this.selectStage(i);
            }.bind(this);
        }
    }

    //Adds red border to selected stage button
    selectStageButton(stage) {
        this.stage = stage;

        for(let i of this.menuButtons) {
            let menuHTML = document.getElementById(i);
            menuHTML.classList.remove("menuSelected");
        }

        let stageHTML = document.getElementById(stage);
        stageHTML.classList.add("menuSelected");
    }

    //Remove selected attribute between updates
    unselectPlayerCards() {
        for(let card of this.player.hand.cards) {
            card.selected = undefined;
        }

        for(let card of this.player.battleZone.cards) {
            card.selected = undefined;
        }

        for(let card of this.player.mana.cards) {
            card.selected = undefined;
        }

        for(let card of this.player.shields.cards) {
            card.selected = undefined;
        }

        for(let card of this.player.graveyard.cards) {
            card.selected = undefined;
        }
    }

    gameOver(winner, motive) {
        let main = document.getElementById("main");
        main.classList.add("gameOver", winner + "Winner");

        if(winner === "player") {
            main.innerHTML = `
                <p class="winnerText">${"You have won the game!"}</p>
                <p class="winMotive">${motive}</p>
            `;
        }
        else {
            main.innerHTML = `
                <p class="winnerText">${"The PC has defeated you!"}</p>
                <p class="winMotive">${motive}</p>
            `;
        }
    }
}