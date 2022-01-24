import Card from './classes/card.js';
import Deck from './classes/deck.js';
import Hand from './classes/hand.js';
import Graveyard from './classes/graveyard.js';
import Shieldzone from './classes/shieldzone.js';
import Battlezone from './classes/battlezone.js';
import Mana from './classes/mana.js'
import Player from './classes/player.js'

let card1 = new Card("nume cartea 1", 0, "descriere");
let card2 = new Card("nume cartea 2", 0, "descriere");
let card3 = new Card("nume cartea 3", 0, "descriere");
let card4 = new Card("nume cartea 4", 0, "descriere");
let card5 = new Card("nume cartea 5", 0, "descriere");
let card6 = new Card("nume cartea 6", 0, "descriere");

let deck1 = new Deck("name", [card1, card2, card3, card4, card5, card6]);

let deck2 = new Deck("name", [card1, card2, card3, card4, card5, card6]);

let player1 = new Player(deck1);
let player2 = new Player(deck2);


player2.addShields();
player2.removeShield()

console.log(player1)
console.log(player2)