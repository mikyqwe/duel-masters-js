import Player from "./player";

export default class Game {
    constructor() {
        let deck1 = new Deck("deck1");
        let deck2 = new Deck("deck2");

        this.player1 = new Player(deck1);
        this.player2 = new Player(deck2);
    }

    startGame() {
        //shuffle both decks
        this.player1.deck.shuffle()
        this.player2.deck.shuffle()

        //todo: pus scuturi

        //todo trage 5 carti momentan tragem doar 2

        this.player1.deal(2);
        this.player2.deal(2);


    }
}