// script.js
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    return suits.flatMap(suit => ranks.map(rank => `${rank} of ${suit}`));
}

function drawCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)];
}

document.getElementById('play-dt').addEventListener('click', () => {
    const deck = createDeck();
    const dragonCard = drawCard(deck);
    const tigerCard = drawCard(deck);
    
    document.getElementById('dt-result').innerHTML = `
        <p>Dragon Card: ${dragonCard}</p>
        <p>Tiger Card: ${tigerCard}</p>
        <p>${dragonCard > tigerCard ? "Dragon Wins!" : "Tiger Wins!"}</p>
    `;
});

document.getElementById('deal-cards').addEventListener('click', () => {
    const deck = createDeck();
    const numPlayers = prompt("Enter number of players (2-6):");
    let hands = "";

    for (let i = 0; i < numPlayers; i++) {
        const hand = [];
        for (let j = 0; j < 3; j++) {
            hand.push(drawCard(deck));
        }
        hands += `<p>Player ${i + 1}'s Hand: ${hand.join(', ')}</p>`;
    }
    
    document.getElementById('tp-hands').innerHTML = hands;
});

document.getElementById('mine-btn').addEventListener('click', () => {
    const mines = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10) + 1);
    const choice = parseInt(prompt("Choose a number between 1 and 10:"), 10);
    
    if (mines.includes(choice)) {
        document.getElementById('mine-result').innerHTML = "Boom! You hit a mine!";
    } else {
        document.getElementById('mine-result').innerHTML = "Safe! No mine here.";
    }
});