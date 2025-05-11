const doneButton = document.getElementById("doneButton");
const numPlayersSelector = document.getElementById("numPlayersSelector");
doneButton.disabled = true;

const startGameButton = document.getElementById("startGame");
startGameButton.disabled = true;



class Player {
    constructor(name) {
        this.name = name;
        this.coins = {"w": 0, "u": 0, "g":0, "r": 0, "k": 0};
        this.cards = {"w": 0, "u": 0, "g":0, "r": 0, "k": 0};
        this.vp = 0;
        this.gold = 0;
    }
}

class Card {
    constructor(color, vp, cost, deck) {
        this.color = color;
        this.vp = vp;
        this.cost = cost;
        this.deck = deck;
    }
}

class Bonus {
    constructor(cost, vp) {
        this.cost = cost;
        this.vp = vp;
    }
}

// let deck1 = [];
// let deck2 = [];
// let deck3 = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

function createDeck1() {
    let deck1 = [];
    deck1.push(new Card("k", 0, {"w": 1, "u": 1, "g":1, "r": 1, "k": 0}, 1));
    deck1.push(new Card("k", 0, {"w": 1, "u": 2, "g":1, "r": 1, "k": 0}, 1));
    deck1.push(new Card("k", 0, {"w": 2, "u": 2, "g":0, "r": 1, "k": 0}, 1));
    deck1.push(new Card("k", 0, {"w": 0, "u": 0, "g":1, "r": 3, "k": 1}, 1));
    deck1.push(new Card("k", 0, {"w": 0, "u": 0, "g":2, "r": 1, "k": 0}, 1));
    deck1.push(new Card("k", 0, {"w": 2, "u": 0, "g":2, "r": 0, "k": 0}, 1));
    deck1.push(new Card("k", 0, {"w": 0, "u": 0, "g":3, "r": 0, "k": 0}, 1));
    deck1.push(new Card("k", 1, {"w": 0, "u": 4, "g":0, "r": 0, "k": 0}, 1));

    deck1.push(new Card("u", 0, {"w": 1, "u": 0, "g":1, "r": 1, "k": 1}, 1));
    deck1.push(new Card("u", 0, {"w": 1, "u": 0, "g":1, "r": 2, "k": 1}, 1));
    deck1.push(new Card("u", 0, {"w": 1, "u": 0, "g":2, "r": 2, "k": 0}, 1));
    deck1.push(new Card("u", 0, {"w": 0, "u": 1, "g":3, "r": 1, "k": 0}, 1));
    deck1.push(new Card("u", 0, {"w": 1, "u": 0, "g":0, "r": 0, "k": 2}, 1));
    deck1.push(new Card("u", 0, {"w": 0, "u": 0, "g":2, "r": 0, "k": 2}, 1));
    deck1.push(new Card("u", 0, {"w": 0, "u": 0, "g":0, "r": 0, "k": 3}, 1));
    deck1.push(new Card("u", 1, {"w": 0, "u": 0, "g":0, "r": 4, "k": 0}, 1));

    deck1.push(new Card("w", 0, {"w": 0, "u": 1, "g":1, "r": 1, "k": 1}, 1));
    deck1.push(new Card("w", 0, {"w": 0, "u": 1, "g":2, "r": 1, "k": 1}, 1));
    deck1.push(new Card("w", 0, {"w": 0, "u": 2, "g":2, "r": 0, "k": 1}, 1));
    deck1.push(new Card("w", 0, {"w": 3, "u": 1, "g":0, "r": 0, "k": 1}, 1));
    deck1.push(new Card("w", 0, {"w": 0, "u": 0, "g":0, "r": 2, "k": 1}, 1));
    deck1.push(new Card("w", 0, {"w": 0, "u": 2, "g":0, "r": 0, "k": 2}, 1));
    deck1.push(new Card("w", 0, {"w": 0, "u": 3, "g":0, "r": 0, "k": 0}, 1));
    deck1.push(new Card("w", 1, {"w": 0, "u": 0, "g":4, "r": 0, "k": 0}, 1));

    deck1.push(new Card("g", 0, {"w": 1, "u": 1, "g":0, "r": 1, "k": 1}, 1));
    deck1.push(new Card("g", 0, {"w": 1, "u": 1, "g":0, "r": 1, "k": 2}, 1));
    deck1.push(new Card("g", 0, {"w": 0, "u": 1, "g":0, "r": 2, "k": 2}, 1));
    deck1.push(new Card("g", 0, {"w": 1, "u": 3, "g":1, "r": 0, "k": 0}, 1));
    deck1.push(new Card("g", 0, {"w": 2, "u": 1, "g":0, "r": 0, "k": 0}, 1));
    deck1.push(new Card("g", 0, {"w": 0, "u": 2, "g":0, "r": 2, "k": 0}, 1));
    deck1.push(new Card("g", 0, {"w": 0, "u": 0, "g":0, "r": 3, "k": 0}, 1));
    deck1.push(new Card("g", 1, {"w": 0, "u": 0, "g":0, "r": 0, "k": 4}, 1));

    deck1.push(new Card("r", 0, {"w": 1, "u": 1, "g":1, "r": 0, "k": 1}, 1));
    deck1.push(new Card("r", 0, {"w": 2, "u": 1, "g":1, "r": 0, "k": 1}, 1));
    deck1.push(new Card("r", 0, {"w": 2, "u": 0, "g":1, "r": 0, "k": 2}, 1));
    deck1.push(new Card("r", 0, {"w": 1, "u": 0, "g":0, "r": 1, "k": 3}, 1));
    deck1.push(new Card("r", 0, {"w": 0, "u": 2, "g":1, "r": 0, "k": 0}, 1));
    deck1.push(new Card("r", 0, {"w": 2, "u": 0, "g":0, "r": 2, "k": 0}, 1));
    deck1.push(new Card("r", 0, {"w": 3, "u": 0, "g":0, "r": 0, "k": 0}, 1));
    deck1.push(new Card("r", 1, {"w": 4, "u": 0, "g":0, "r": 0, "k": 0}, 1));

    return shuffle(deck1)
}

function createDeck2() {
    let deck2 = [];
    deck2.push(new Card("k", 1, {"w": 3, "u": 2, "g":2, "r": 0, "k": 0}, 2));
    deck2.push(new Card("k", 1, {"w": 3, "u": 0, "g":3, "r": 0, "k": 2}, 2));
    deck2.push(new Card("k", 2, {"w": 0, "u": 1, "g":4, "r": 2, "k": 0}, 2));
    deck2.push(new Card("k", 2, {"w": 0, "u": 0, "g":5, "r": 3, "k": 0}, 2));
    deck2.push(new Card("k", 2, {"w": 5, "u": 0, "g":0, "r": 0, "k": 0}, 2));
    deck2.push(new Card("k", 3, {"w": 0, "u": 0, "g":0, "r": 0, "k": 6}, 2));

    deck2.push(new Card("u", 1, {"w": 0, "u": 2, "g":2, "r": 3, "k": 0}, 2));
    deck2.push(new Card("u", 1, {"w": 0, "u": 2, "g":3, "r": 0, "k": 3}, 2));
    deck2.push(new Card("u", 2, {"w": 5, "u": 3, "g":0, "r": 0, "k": 0}, 2));
    deck2.push(new Card("u", 2, {"w": 2, "u": 0, "g":0, "r": 1, "k": 4}, 2));
    deck2.push(new Card("u", 2, {"w": 0, "u": 5, "g":0, "r": 0, "k": 0}, 2));
    deck2.push(new Card("u", 1, {"w": 0, "u": 6, "g":0, "r": 0, "k": 0}, 2));
    
    deck2.push(new Card("w", 1, {"w": 0, "u": 0, "g":3, "r": 2, "k": 2}, 2));
    deck2.push(new Card("w", 1, {"w": 2, "u": 3, "g":0, "r": 3, "k": 0}, 2));
    deck2.push(new Card("w", 2, {"w": 0, "u": 0, "g":1, "r": 4, "k": 2}, 2));
    deck2.push(new Card("w", 2, {"w": 0, "u": 0, "g":0, "r": 5, "k": 3}, 2));
    deck2.push(new Card("w", 2, {"w": 0, "u": 0, "g":0, "r": 5, "k": 0}, 2));
    deck2.push(new Card("w", 3, {"w": 6, "u": 0, "g":0, "r": 0, "k": 0}, 2));

    deck2.push(new Card("g", 1, {"w": 3, "u": 0, "g":2, "r": 3, "k": 0}, 2));
    deck2.push(new Card("g", 1, {"w": 2, "u": 3, "g":0, "r": 0, "k": 2}, 2));
    deck2.push(new Card("g", 2, {"w": 4, "u": 2, "g":0, "r": 0, "k": 1}, 2));
    deck2.push(new Card("g", 2, {"w": 0, "u": 5, "g":3, "r": 0, "k": 0}, 2));
    deck2.push(new Card("g", 2, {"w": 0, "u": 0, "g":5, "r": 0, "k": 0}, 2));
    deck2.push(new Card("g", 3, {"w": 0, "u": 0, "g":6, "r": 0, "k": 0}, 2));

    deck2.push(new Card("r", 1, {"w": 2, "u": 0, "g":0, "r": 2, "k": 3}, 2));
    deck2.push(new Card("r", 1, {"w": 0, "u": 3, "g":0, "r": 2, "k": 3}, 2));
    deck2.push(new Card("r", 2, {"w": 1, "u": 4, "g":2, "r": 0, "k": 0}, 2));
    deck2.push(new Card("r", 2, {"w": 3, "u": 0, "g":0, "r": 0, "k": 5}, 2));
    deck2.push(new Card("r", 2, {"w": 0, "u": 0, "g":0, "r": 0, "k": 5}, 2));
    deck2.push(new Card("r", 3, {"w": 0, "u": 0, "g":0, "r": 6, "k": 0}, 2));

    return shuffle(deck2)
}

function createDeck3() {
    let deck3 = [];

    deck3.push(new Card("k", 3, {"w": 3, "u": 3, "g":5, "r": 3, "k": 0}, 3));
    deck3.push(new Card("k", 4, {"w": 0, "u": 0, "g":0, "r": 7, "k": 0}, 3));
    deck3.push(new Card("k", 4, {"w": 0, "u": 0, "g":3, "r": 6, "k": 3}, 3));
    deck3.push(new Card("k", 5, {"w": 0, "u": 0, "g":0, "r": 7, "k": 3}, 3));

    deck3.push(new Card("u", 3, {"w": 3, "u": 0, "g":3, "r": 3, "k": 5}, 3));
    deck3.push(new Card("u", 4, {"w": 7, "u": 0, "g":0, "r": 0, "k": 0}, 3));
    deck3.push(new Card("u", 4, {"w": 6, "u": 3, "g":0, "r": 0, "k": 3}, 3));
    deck3.push(new Card("u", 5, {"w": 7, "u": 3, "g":0, "r": 0, "k": 0}, 3));
    
    deck3.push(new Card("w", 3, {"w": 0, "u": 3, "g":3, "r": 5, "k": 3}, 3));
    deck3.push(new Card("w", 4, {"w": 0, "u": 0, "g":0, "r": 0, "k": 7}, 3));
    deck3.push(new Card("w", 4, {"w": 3, "u": 0, "g":0, "r": 3, "k": 6}, 3));
    deck3.push(new Card("w", 5, {"w": 3, "u": 0, "g":0, "r": 0, "k": 7}, 3));

    deck3.push(new Card("g", 3, {"w": 5, "u": 3, "g":0, "r": 3, "k": 3}, 3));
    deck3.push(new Card("g", 4, {"w": 0, "u": 7, "g":0, "r": 0, "k": 0}, 3));
    deck3.push(new Card("g", 4, {"w": 3, "u": 6, "g":3, "r": 0, "k": 0}, 3));
    deck3.push(new Card("g", 5, {"w": 0, "u": 7, "g":3, "r": 0, "k": 0}, 3));

    deck3.push(new Card("r", 3, {"w": 3, "u": 5, "g":2, "r": 0, "k": 3}, 3));
    deck3.push(new Card("r", 4, {"w": 0, "u": 0, "g":7, "r": 0, "k": 0}, 3));
    deck3.push(new Card("r", 4, {"w": 0, "u": 3, "g":6, "r": 3, "k": 0}, 3));
    deck3.push(new Card("r", 5, {"w": 0, "u": 0, "g":7, "r": 3, "k": 0}, 3));

    return shuffle(deck3)
}




function createAvailableChips() {
    return {"w": 7, "u": 7, "g":7, "r": 7, "k": 7, "y": 5}
}

function createBonuses() {
    let bonuses = [];

    bonuses.push(new Bonus({"w": 3, "u": 3, "g":3, "r": 0, "k": 0}, 3));
    bonuses.push(new Bonus({"w": 0, "u": 3, "g":3, "r": 3, "k": 0}, 3));
    bonuses.push(new Bonus({"w": 3, "u": 0, "g":0, "r": 3, "k": 3}, 3));
    bonuses.push(new Bonus({"w": 3, "u": 3, "g":0, "r": 0, "k": 3}, 3));
    bonuses.push(new Bonus({"w": 0, "u": 0, "g":3, "r": 3, "k": 3}, 3));
    bonuses.push(new Bonus({"w": 0, "u": 0, "g":0, "r": 4, "k": 4}, 3));
    bonuses.push(new Bonus({"w": 4, "u": 0, "g":0, "r": 0, "k": 4}, 3));
    bonuses.push(new Bonus({"w": 0, "u": 0, "g":4, "r": 4, "k": 0}, 3));
    bonuses.push(new Bonus({"w": 4, "u": 4, "g":0, "r": 0, "k": 0}, 3));
    bonuses.push(new Bonus({"w": 0, "u": 4, "g":4, "r": 0, "k": 0}, 3));

    outBonus = shuffle(bonuses);
    return outBonus
}

const deck1 = createDeck1();
const deck2 = createDeck2();
const deck3 = createDeck3();

const bonuses = createBonuses();

let numPlayers;

numPlayersSelector.addEventListener(('change'), () => {
    if (numPlayersSelector.value != "null") {
        numPlayers = parseInt(numPlayersSelector.value, 10);
        // console.log(numPlayers)
        doneButton.disabled = false;
    }
    else {
        doneButton.disabled = true;
    }
})

let input = []
let val;
let playerNames = []
function createPlayerNames(numPlayers) {
    startGameButton.style.display = "inline";
    for (let i =0; i < numPlayers; i++) {
        val = document.createElement("input");
        val.setAttribute("type","text");
        val.setAttribute("placeholder","Player " + (i+1) + "'s name");
        document.body.appendChild(val);
        input[i] = val;
        // player = new Player(name)
    }
    // let playerName = []
    // let playerType = []
    for (let i = 0; i < numPlayers; i++) {
        input[i].addEventListener('input',
            function(event) {
                let name = event.target.value;
                playerNames[i] = name;
                // playerType[i] = "player";
                if (!playerNames.includes("") && playerNames.length == numPlayers) {
                    startGameButton.disabled = false;
                }
                else {
                    startGameButton.disabled = true;
                }
            }
        )
    }
}

function createPlayerArray(playerNames) {
    let out = []
    for (let i = 0; i < playerNames.length; i++) {
        out.push(new Player(playerNames[i]));
    }
    return out
}

function createPileVals(numPlayers) {
    let val;
    if (numPlayers == 2) {
        val = 4
    }
    else if (numPlayers == 3) {
        val = 5
    }
    else {
        val = 7
    }
    outDict = {"w": val, "g": val, "u": val, "k": val, "r":val}
    return outDict
}

doneButton.addEventListener(('click'), () => {
    const bonusesOut = bonuses.splice(0,numPlayers+1);
    const outDeck1 = JSON.stringify(deck1.splice(0,4));
    const outDeck2 = JSON.stringify(deck2.splice(0,4));
    const outDeck3 = JSON.stringify(deck3.splice(0,4));
    const deck1out = JSON.stringify(deck1);
    const deck2out = JSON.stringify(deck2);
    const deck3out = JSON.stringify(deck3);

    localStorage.setItem("outDeck1", outDeck1);
    localStorage.setItem("outDeck2", outDeck2);
    localStorage.setItem("outDeck3", outDeck3);
    localStorage.setItem("deck1", deck1out);
    localStorage.setItem("deck2", deck2out);
    localStorage.setItem("deck3", deck3out);

    localStorage.setItem("numPlayers", numPlayers);
    localStorage.setItem("bonuses", JSON.stringify(bonusesOut));

    // window.location.href = "game.html";
    createPlayerNames(numPlayers);
    doneButton.style.display = "none";
    numPlayersSelector.style.display = "none";
    document.getElementById("text").innerHTML = "Name your players";

})

startGameButton.addEventListener(('click'), () => {
    console.log(playerNames)
    const playerArray = createPlayerArray(playerNames);
    const pileVals = createPileVals(numPlayers)
    console.log(playerArray)
    localStorage.setItem("playerArray", JSON.stringify(shuffle(playerArray)));
    localStorage.setItem("turnIndex", 0);
    localStorage.setItem("pileVals", JSON.stringify(pileVals))
    window.location.href = "game.html";
    // setTimeout(window.location.href = "game.html", 2000);
})

