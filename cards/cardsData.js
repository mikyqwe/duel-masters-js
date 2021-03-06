let cardsData = {
    "cards": [{
            "name": "Aeris,_Flight_Elemental",
            "mana": 5,
            "damage": 9000,
        },
        {
            "name": "Ancient_Giant",
            "mana": 8,
            "damage": 9000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Aqua_Hulcus",
            "mana": 3,
            "damage": 2000,
        },
        {
            "name": "Aqua_Knight",
            "mana": 5,
            "damage": 4000,
        },
        {
            "name": "Aqua_Sniper",
            "mana": 8,
            "damage": 5000,
        },
        {
            "name": "Aqua_Soldier",
            "mana": 3,
            "damage": 1000,
        },
        {
            "name": "Aqua_Vehicle",
            "mana": 2,
            "damage": 1000,
        },
        {
            "name": "Armored_Walker_Urherion",
            "mana": 4,
            "damage": 3000,
        },
        {
            "name": "Artisan_Picora",
            "mana": 1,
            "damage": 2000,
        },
        {
            "name": "Artisan_Picora",
            "mana": 1,
            "damage": 2000,
        },
        {
            "name": "Billion-Degree_Dragon",
            "mana": 10,
            "damage": 15000,
            "shieldsToBreak": 3,
        },
        {
            "name": "Bolshack_Dragon",
            "mana": 6,
            "damage": 6000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Boltail_Dragon",
            "mana": 7,
            "damage": 9000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Bombat,_General_of_Speed",
            "mana": 5,
            "damage": 3000,
            "fatigued": false,
        },
        {
            "name": "Bone_Assassin,_the_Ripper",
            "mana": 4,
            "damage": 2000,
        },
        {
            "name": "Bone_Spider",
            "mana": 3,
            "damage": 5000,
        },

        {
            "name": "Bronze-Arm_Tribe",
            "mana": 3,
            "damage": 1000,
        },
        {
            "name": "Burning_Mane",
            "mana": 2,
            "damage": 2000,
        },
        {
            "name": "Candy_Drop",
            "mana": 3,
            "damage": 1000,
        },

        {
            "name": "Chilias,_the_Oracle",
            "mana": 4,
            "damage": 2500,
        },

        {
            "name": "Coiling_Vines",
            "mana": 4,
            "damage": 3000,
        },
        {
            "name": "Dark_Clown",
            "mana": 4,
            "damage": 6000,
        },

        {
            "name": "Dark_Raven,_Shadow_of_Grief",
            "mana": 4,
            "damage": 1000,
        },
        {
            "name": "Deadly_Fighter_Braid_Claw",
            "mana": 1,
            "damage": 1000,
        },

        {
            "name": "Death_Cruzer,_the_Annihilator",
            "mana": 7,
            "damage": 13000,
            "shieldsToBreak": 3,
        },
        {
            "name": "Deathliger,_Lion_of_Chaos",
            "mana": 7,
            "damage": 9000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Draglide",
            "mana": 5,
            "damage": 5000,
        },

        {
            "name": "Explosive_Dude_Joe",
            "mana": 3,
            "damage": 3000,
        },
        {
            "name": "Fear_Fang",
            "mana": 3,
            "damage": 3000,
        },

        {
            "name": "Forest_Hornet",
            "mana": 4,
            "damage": 4000,
        },

        {
            "name": "Gatling_Skyterror",
            "mana": 7,
            "damage": 7000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Gigaberos",
            "mana": 5,
            "damage": 8000,
        },
        {
            "name": "Gigagiele",
            "mana": 5,
            "damage": 3000,
        },
        {
            "name": "Gigargon",
            "mana": 8,
            "damage": 3000,
        },
        {
            "name": "Hang_Worm,_Fetid_Larva",
            "mana": 5,
            "damage": 4000,
        },

        {
            "name": "Hanusa,_Radiance_Elemental",
            "mana": 7,
            "damage": 9500,
            "shieldsToBreak": 2,
        },
        {
            "name": "Iere,_Vizier_of_Bullets",
            "mana": 3,
            "damage": 3000,
        },
        {
            "name": "Immortal_Baron,_Vorg",
            "mana": 2,
            "damage": 2000,
        },

        {
            "name": "King_Depthcon",
            "mana": 7,
            "damage": 6000,
            "shieldsToBreak": 2,
        },
        {
            "name": "King_Ripped_Hide",
            "mana": 7,
            "damage": 5000,
            "summonAbility": function(game, player, card) {
                player.deal(2);
            }
        },
        {
            "name": "La_Guile,_Seeker_of_Skyfire",
            "mana": 6,
            "damage": 7500,
            "shieldsToBreak": 2,
        },
        {
            "name": "Lah,_Purification_Enforcer",
            "mana": 5,
            "damage": 5500,
        },
        {
            "name": "Lok, Vizier_of_Hunting",
            "mana": 4,
            "damage": 4000,
        },
        {
            "name": "Meteosaur",
            "mana": 5,
            "damage": 2000,
        },
        {
            "name": "Mighty_Shouter",
            "mana": 3,
            "damage": 2000,
        },
        {
            "name": "Nomad_Hero_Gigio",
            "mana": 5,
            "damage": 3000,
        },
        {
            "name": "Poisonous_Dahlia",
            "mana": 4,
            "damage": 5000,
        },
        {
            "name": "Poisonous_Mushroom",
            "mana": 2,
            "damage": 1000,
        },
        {
            "name": "Red-Eye_Scorpion",
            "mana": 5,
            "damage": 4000,
        },
        {
            "name": "Reso_Pacos,_Clear_Sky_Guardian",
            "mana": 3,
            "damage": 3000,
        },
        {
            "name": "Reusol,_the_Oracle",
            "mana": 2,
            "damage": 2000,
        },
        {
            "name": "Saucer-Head_Shark",
            "mana": 5,
            "damage": 3000,
        },
        {
            "name": "Scissor_Eye",
            "mana": 4,
            "damage": 3000,
        },
        {
            "name": "Silver_Axe",
            "mana": 3,
            "damage": 1000,
        },
        {
            "name": "Skeleton_Soldier,_the_Defiled",
            "mana": 4,
            "damage": 3000,
        },
        {
            "name": "Stampeding_Longhorn",
            "mana": 5,
            "damage": 4000,
        },
        {
            "name": "Steel_Smasher",
            "mana": 2,
            "damage": 3000,
        },
        {
            "name": "Stinger_Worm",
            "mana": 3,
            "damage": 5000,
        },
        {
            "name": "Storm_Shell",
            "mana": 2,
            "damage": 2000,
        },
        {
            "name": "Swamp_Worm",
            "mana": 2,
            "damage": 2000,
        },
        {
            "name": "Thorny_Mandra",
            "mana": 5,
            "damage": 4000,
            "summonAbility": function(game, player, card) {
                let playerCard = player.graveyard.drawCard();

                if (playerCard !== undefined) {
                    player.mana.addCard(playerCard);
                }
            }
        },
        {
            "name": "Tower_Shell",
            "mana": 6,
            "damage": 5000,
        },
        {
            "name": "Tri-Horn_Shepherd",
            "mana": 5,
            "damage": 5000,
        },
        {
            "name": "Tropico",
            "mana": 5,
            "damage": 3000,
        },
        {
            "name": "Unicorn_Fish",
            "mana": 4,
            "damage": 1000,
        },
        {
            "name": "Urth,_Purifying_Elemental",
            "mana": 4,
            "damage": 6000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Vampire_Silphy",
            "mana": 8,
            "damage": 4000,
            "summonAbility": function(game, player, card) {
                let opponent = undefined;
                if (player.name === "PC") {
                    opponent = game.player;
                } else {
                    opponent = game.pc;
                }

                for (let i = opponent.battleZone.cards.length - 1; i >= 0; i--) {
                    let opponentCard = opponent.battleZone.cards[i];

                    if (opponentCard.damage <= 3000) {
                        let removedCard = opponent.battleZone.removeCard(i);
                        opponent.graveyard.addCard(removedCard);
                    }
                }
                for (let i = player.battleZone.cards.length - 1; i >= 0; i--) {
                    let playerCard = player.battleZone.cards[i];

                    if (playerCard.damage <= 3000) {
                        let removedCard = player.battleZone.removeCard(i);
                        player.graveyard.addCard(removedCard);
                    }
                }
            }
        },
        {
            "name": "Wailing_Shadow_Belbetphlo",
            "mana": 3,
            "damage": 1000,
        },
        {
            "name": "Writhing_Bone_Ghoul",
            "mana": 2,
            "damage": 2000,
        },
        {
            "name": "Zagaan,_Knight_of_Darkness",
            "mana": 6,
            "damage": 7000,
            "shieldsToBreak": 2,
        },
        {
            "name": "Brain_Serum",
            "mana": 4,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                player.deal(2);
            }
        },
        {
            "name": "Cyclone_Panic",
            "mana": 3,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let cardsRemovedPlayer = 0;

                for (let i = game.player.hand.cards.length - 1; i >= 0; i--) {
                    game.player.deck.addCard(game.player.hand.drawCard());
                    cardsRemovedPlayer += 1;
                }
                game.player.deck.shuffle();
                game.player.deal(cardsRemovedPlayer);

                let cardsRemovedPc = 0;

                for (let i = game.pc.hand.cards.length - 1; i >= 0; i--) {
                    game.pc.deck.addCard(game.pc.hand.drawCard());
                    cardsRemovedPc += 1;
                }
                game.pc.deck.shuffle();
                game.pc.deal(cardsRemovedPc);
            }
        },
        {
            "name": "Flood_Valve",
            "mana": 2,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let playerCard = player.mana.drawCard();

                if (playerCard !== undefined) {
                    playerCard.canAttack = true;

                    player.hand.addCard(playerCard);
                }
            }
        },
        {
            "name": "Glory_Snow",
            "mana": 4,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let opponent = undefined;

                if (player.name === "PC") {
                    opponent = game.player;
                } else {
                    opponent = game.pc;
                }

                if (opponent.mana.cards.length > player.mana.cards.length) {
                    player.mana.addCard(player.deck.drawCard());
                    player.mana.addCard(player.deck.drawCard());
                }
            }
        },
        {
            "name": "Logic_Sphere",
            "mana": 3,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let spellCard = undefined;

                for (let card of player.mana.cards) {
                    if (card.damage === 0) {
                        spellCard = player.mana.removeCardById(card.id);
                        break;
                    }
                }

                if (spellCard !== undefined) {
                    spellCard.canAttack = true;
                    player.hand.addCard(spellCard);
                }
            }
        },
        {
            "name": "Lost_Soul",
            "mana": 7,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let opponent = undefined;

                if (player.name === "PC") {
                    opponent = game.player;
                } else {
                    opponent = game.pc;
                }

                for (let i = opponent.hand.cards.length - 1; i >= 0; i--) {
                    opponent.deck.addCard(opponent.hand.removeCard(i));
                }
            }
        },
        {
            "name": "Mana_Nexus",
            "mana": 4,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let playerCard = player.mana.drawCard();

                if (playerCard !== undefined) {
                    playerCard.canAttack = true;
                    player.shields.addCard(playerCard);
                }
            }
        },
        {
            "name": "Mystic_Inscription",
            "mana": 6,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let playerCard = player.deck.drawCard();

                if (playerCard !== undefined) {
                    player.shields.addCard(playerCard);
                }
            }
        },
        {
            "name": "Rainbow_Stone",
            "mana": 4,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let playerCard = player.deck.drawCard();

                if (playerCard !== undefined) {
                    player.mana.addCard(playerCard);
                }
            }
        },
        {
            "name": "Roar_of_the_Earth",
            "mana": 2,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let removedCard = undefined;

                for (let i = player.mana.cards.length - 1; i >= 0; i--) {
                    let manaCard = player.mana.cards[i];

                    if (manaCard.manaCost <= 6 && manaCard.damage !== 0) {
                        removedCard = player.mana.removeCard(i);
                        break;
                    }
                }

                if (removedCard !== undefined) {
                    player.hand.addCard(removedCard);
                }
            }
        },
        {
            "name": "Searing_Wave",
            "mana": 5,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let opponent = undefined;

                if (player.name === "PC") {
                    opponent = game.player;
                } else {
                    opponent = game.pc;
                }

                for (let i = opponent.battleZone.cards.length - 1; i >= 0; i--) {
                    let opponentCard = opponent.battleZone.cards[i];

                    if (opponentCard.damage <= 3000) {
                        let removedCard = opponent.battleZone.removeCard(i);
                        opponent.graveyard.addCard(removedCard);
                    }
                }
            }
        },
        {
            "name": "Sundrop_Armor",
            "mana": 4,
            "damage": 0,
            "summonAbility": function(game, player, card) {
                let playerCard = player.hand.drawCard();

                if (playerCard !== undefined) {
                    player.shields.addCard(playerCard);
                }
            }
        },
    ]
};

export { cardsData as default };