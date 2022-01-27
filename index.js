import Card from './classes/card.js';
import Deck from './classes/deck.js';
import Hand from './classes/hand.js';
import Graveyard from './classes/graveyard.js';
import Shieldzone from './classes/shieldzone.js';
import Battlezone from './classes/battlezone.js';
import Mana from './classes/mana.js';
import Player from './classes/player.js';
import cardsData from './cards/cardsData.js';


let functie = function() {
    console.log("13");
}

document.getElementById("card").onclick = functie;

let player = new Player("jucator1")

console.log(player)

let card = new Card(cardsData.creatures[0]);