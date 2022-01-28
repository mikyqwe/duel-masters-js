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

        this.update();
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
            playerBattlezone.innerHTML += this.player.battleZone.cards[0].getHTML();
        }

        //Update player's shields
        let playerShields = document.getElementById("playerShieldsNumber");
        playerShields.innerHTML = this.player.shields.cards.length;

        //Update player's mana
        let playerMana = document.getElementById("playerManaNumber");
        playerMana.innerHTML = this.player.mana.cards.length;

        //Update player's graveyard
        let playerGraveyard = document.getElementById("playerGraveyardNumber");
        playerGraveyard.innerHTML = this.player.graveyard.cards.length;

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
        pcMana.innerHTML = this.pc.mana.cards.length;
    }

    //Adds red border to selected stage button
    selectStageButton(stage) {
        for(let i of this.menuButtons) {
            let menuHTML = document.getElementById(i);
            menuHTML.classList.remove("menuSelected");
        }

        let stageHTML = document.getElementById(stage);
        stageHTML.classList.add("menuSelected");
    }

    //Event loop for different stages of the game
    selectStage(stage) {
        
        if(stage === "manaStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);
            this.stage = "manaStage";

            //Add card select event on card click
            for(let card of this.player.hand.cards) {
                let cardHTML = document.getElementById(card.id);

                card.click = function() {
                    if(card.selected === undefined || card.selected === false) {
                        card.selected = true;
                        cardHTML.classList.add("cardSelected");
                    }
                    else {
                        card.selected = false;
                        cardHTML.classList.remove("cardSelected");
                    }
                }.bind(this);
                
                cardHTML.onclick = card.click;
            }

            let playerManaButton = document.getElementById("playerMana");
            playerManaButton.onclick = function() {
                for(let i = this.player.hand.cards.length - 1; i >= 0; i--) {
                    let card = this.player.hand.cards[i];
                    let cardHTML = document.getElementById(card.id);

                    if(card.selected) {
                        card.selected = undefined;
                        cardHTML.onclick = undefined;
                        this.player.hand.removeCard(i);
                        this.player.mana.addCard(card);
                    }
                }
                
                this.update();
                this.selectStage("manaStage");
            }.bind(this);
        }
        else if(stage === "summonStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);
            this.stage = "summonStage";
        }
        else if(stage === "attackStage" && this.stage !== "endTurnStage") {
            this.selectStageButton(stage);
            this.stage = "attackStage";
        }
        else if(stage === "endTurnStage") {
            this.selectStageButton(stage);
            this.stage = "endTurnStage";
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
}