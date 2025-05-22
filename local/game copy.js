const waitTime = 500;
const cardTransitionTime = 700;
const xSpeed = 0.2;
const ySpeed = 0.2;

const xSpeedPlayer = 0.2;
const ySpeedPlayer = 0.2;

let board = document.getElementById("board")
const deck1string = JSON.parse(localStorage.getItem("deck1"));
const deck2string = JSON.parse(localStorage.getItem("deck2"));
const deck3string = JSON.parse(localStorage.getItem("deck3"));

let outDeck1string = JSON.parse(localStorage.getItem("outDeck1"));
let outDeck2string = JSON.parse(localStorage.getItem("outDeck2"));
let outDeck3string = JSON.parse(localStorage.getItem("outDeck3"));


let pileVals = JSON.parse(localStorage.getItem("pileVals"))
let goldVal = parseInt(localStorage.getItem("goldVal"))
// console.log(pileVals)
// console.log(pileVals["k"])

let victoryValue = 205;

let chipsBought = [];
// let turnOver = false;

const rect11 = document.getElementById("11");
const rect12 = document.getElementById("12");
const rect13 = document.getElementById("13");
const rect14 = document.getElementById("14");

const rect21 = document.getElementById("21");
const rect22 = document.getElementById("22");
const rect23 = document.getElementById("23");
const rect24 = document.getElementById("24");

const rect31 = document.getElementById("31");
const rect32 = document.getElementById("32");
const rect33 = document.getElementById("33");
const rect34 = document.getElementById("34");

const whitePile = document.getElementById("whitePile");
const bluePile = document.getElementById("bluePile");
const greenPile = document.getElementById("greenPile");
const redPile = document.getElementById("redPile");
const blackPile = document.getElementById("blackPile");
const yellowPile = document.getElementById("yellowPile");

const whitePileCopy = document.getElementById("whitePileCopy");
const bluePileCopy = document.getElementById("bluePileCopy");
const greenPileCopy = document.getElementById("greenPileCopy");
const redPileCopy = document.getElementById("redPileCopy");
const blackPileCopy = document.getElementById("blackPileCopy");
const yellowPileCopy = document.getElementById("yellowPileCopy");


const p1containerRect = document.getElementById("player1container");
const p2containerRect = document.getElementById("player2container");
const p3containerRect = document.getElementById("player3container");
const p4containerRect = document.getElementById("player4container");

const p1container = document.getElementById("player1");
const p2container = document.getElementById("player2");
const p3container = document.getElementById("player3");
const p4container = document.getElementById("player4");

const p1name = document.getElementById("player1name");
const p2name = document.getElementById("player2name")
const p3name = document.getElementById("player3name")
const p4name = document.getElementById("player4name")

const p1vp = document.getElementById("player1vp");
const p2vp = document.getElementById("player2vp");
const p3vp = document.getElementById("player3vp");
const p4vp = document.getElementById("player4vp");

const p1white = document.getElementById("p1white");
const p2white = document.getElementById("p2white");
const p3white = document.getElementById("p3white");
const p4white = document.getElementById("p4white");
const p1whitecircle = document.getElementById("p1whitecircle");
const p2whitecircle = document.getElementById("p2whitecircle");
const p3whitecircle = document.getElementById("p3whitecircle");
const p4whitecircle = document.getElementById("p4whitecircle");

const p1blue = document.getElementById("p1blue");
const p2blue = document.getElementById("p2blue");
const p3blue = document.getElementById("p3blue");
const p4blue = document.getElementById("p4blue");
const p1bluecircle = document.getElementById("p1bluecircle");
const p2bluecircle = document.getElementById("p2bluecircle");
const p3bluecircle = document.getElementById("p3bluecircle");
const p4bluecircle = document.getElementById("p4bluecircle");

const p1green = document.getElementById("p1green");
const p2green = document.getElementById("p2green");
const p3green = document.getElementById("p3green");
const p4green = document.getElementById("p4green");
const p1greencircle = document.getElementById("p1greencircle");
const p2greencircle = document.getElementById("p2greencircle");
const p3greencircle = document.getElementById("p3greencircle");
const p4greencircle = document.getElementById("p4greencircle");

const p1red = document.getElementById("p1red");
const p2red = document.getElementById("p2red");
const p3red = document.getElementById("p3red");
const p4red = document.getElementById("p4red");
const p1redcircle = document.getElementById("p1redcircle");
const p2redcircle = document.getElementById("p2redcircle");
const p3redcircle = document.getElementById("p3redcircle");
const p4redcircle = document.getElementById("p4redcircle");

const p1black = document.getElementById("p1black");
const p2black = document.getElementById("p2black");
const p3black = document.getElementById("p3black");
const p4black = document.getElementById("p4black");
const p1blackcircle = document.getElementById("p1blackcircle");
const p2blackcircle = document.getElementById("p2blackcircle");
const p3blackcircle = document.getElementById("p3blackcircle");
const p4blackcircle = document.getElementById("p4blackcircle");

const p1gold = document.getElementById("p1yellow");
const p2gold = document.getElementById("p2yellow");
const p3gold = document.getElementById("p3yellow");
const p4gold = document.getElementById("p4yellow");
const p1goldcircle = document.getElementById("p1yellowcircle");
const p2goldcircle = document.getElementById("p2yellowcircle");
const p3goldcircle = document.getElementById("p3yellowcircle");
const p4goldcircle = document.getElementById("p4yellowcircle");

const p1whiteCard = document.getElementById("p1whiteCard");
const p1whiteCardCount = document.getElementById("p1whiteCardCount");
const p1blueCard = document.getElementById("p1blueCard");
const p1blueCardCount = document.getElementById("p1blueCardCount");
const p1greenCard = document.getElementById("p1greenCard");
const p1greenCardCount = document.getElementById("p1greenCardCount");
const p1redCard = document.getElementById("p1redCard");
const p1redCardCount = document.getElementById("p1redCardCount");
const p1blackCard = document.getElementById("p1blackCard");
const p1blackCardCount = document.getElementById("p1blackCardCount");
const p1goldCard = document.getElementById("p1goldCard");
const p1goldCardCount = document.getElementById("p1goldCardCount");
const p1whiteCardCopy = document.getElementById("p1whiteCardCopy")
const p1blueCardCopy = document.getElementById("p1blueCardCopy")
const p1greenCardCopy = document.getElementById("p1greenCardCopy")
const p1redCardCopy = document.getElementById("p1redCardCopy")
const p1blackCardCopy = document.getElementById("p1blackCardCopy")
const p1goldCardCopy = document.getElementById("p1goldCardCopy")


const p2whiteCard = document.getElementById("p2whiteCard");
const p2whiteCardCount = document.getElementById("p2whiteCardCount");
const p2blueCard = document.getElementById("p2blueCard");
const p2blueCardCount = document.getElementById("p2blueCardCount");
const p2greenCard = document.getElementById("p2greenCard");
const p2greenCardCount = document.getElementById("p2greenCardCount");
const p2redCard = document.getElementById("p2redCard");
const p2redCardCount = document.getElementById("p2redCardCount");
const p2blackCard = document.getElementById("p2blackCard");
const p2blackCardCount = document.getElementById("p2blackCardCount");
const p2goldCard = document.getElementById("p2goldCard");
const p2goldCardCount = document.getElementById("p2goldCardCount");
const p2whiteCardCopy = document.getElementById("p2whiteCardCopy")
const p2blueCardCopy = document.getElementById("p2blueCardCopy")
const p2greenCardCopy = document.getElementById("p2greenCardCopy")
const p2redCardCopy = document.getElementById("p2redCardCopy")
const p2blackCardCopy = document.getElementById("p2blackCardCopy")
const p2goldCardCopy = document.getElementById("p2goldCardCopy")

const p3whiteCard = document.getElementById("p3whiteCard");
const p3whiteCardCount = document.getElementById("p3whiteCardCount");
const p3blueCard = document.getElementById("p3blueCard");
const p3blueCardCount = document.getElementById("p3blueCardCount");
const p3greenCard = document.getElementById("p3greenCard");
const p3greenCardCount = document.getElementById("p3greenCardCount");
const p3redCard = document.getElementById("p3redCard");
const p3redCardCount = document.getElementById("p3redCardCount");
const p3blackCard = document.getElementById("p3blackCard");
const p3blackCardCount = document.getElementById("p3blackCardCount");
const p3goldCard = document.getElementById("p3goldCard");
const p3goldCardCount = document.getElementById("p3goldCardCount");
const p3whiteCardCopy = document.getElementById("p3whiteCardCopy")
const p3blueCardCopy = document.getElementById("p3blueCardCopy")
const p3greenCardCopy = document.getElementById("p3greenCardCopy")
const p3redCardCopy = document.getElementById("p3redCardCopy")
const p3blackCardCopy = document.getElementById("p3blackCardCopy")
const p3goldCardCopy = document.getElementById("p3goldCardCopy")

const p4whiteCard = document.getElementById("p4whiteCard");
const p4whiteCardCount = document.getElementById("p4whiteCardCount");
const p4blueCard = document.getElementById("p4blueCard");
const p4blueCardCount = document.getElementById("p4blueCardCount");
const p4greenCard = document.getElementById("p4greenCard");
const p4greenCardCount = document.getElementById("p4greenCardCount");
const p4redCard = document.getElementById("p4redCard");
const p4redCardCount = document.getElementById("p4redCardCount");
const p4blackCard = document.getElementById("p4blackCard");
const p4blackCardCount = document.getElementById("p4blackCardCount");
const p4goldCard = document.getElementById("p4goldCard");
const p4goldCardCount = document.getElementById("p4goldCardCount");
const p4whiteCardCopy = document.getElementById("p4whiteCardCopy")
const p4blueCardCopy = document.getElementById("p4blueCardCopy")
const p4greenCardCopy = document.getElementById("p4greenCardCopy")
const p4redCardCopy = document.getElementById("p4redCardCopy")
const p4blackCardCopy = document.getElementById("p4blackCardCopy")
const p4goldCardCopy = document.getElementById("p4goldCardCopy")

const deck1rect = document.getElementById("deck1")
const deck2rect = document.getElementById("deck2")
const deck3rect = document.getElementById("deck3")

const deckRects = [deck1rect, deck2rect, deck3rect]

const colors = ["w", "r", "g", "u", "k", "y"]

function createPlayerElementArrays() {
    const white = [p1whiteCard, p2whiteCard, p3whiteCard, p4whiteCard]
    const whiteCounts = [p1whiteCardCount, p2whiteCardCount, p3whiteCardCount, p4whiteCardCount]
    const blue = [p1blueCard, p2blueCard, p3blueCard, p4blueCard]
    const blueCounts = [p1blueCardCount, p2blueCardCount, p3blueCardCount, p4blueCardCount]
    const green = [p1greenCard, p2greenCard, p3greenCard, p4greenCard]
    const greenCounts = [p1greenCardCount, p2greenCardCount, p3greenCardCount, p4greenCardCount]
    const red = [p1redCard, p2redCard, p3redCard, p4redCard]
    const redCounts = [p1redCardCount, p2redCardCount, p3redCardCount, p4redCardCount]
    const black = [p1blackCard, p2blackCard, p3blackCard, p4blackCard]
    const blackCounts = [p1blackCardCount, p2blackCardCount, p3blackCardCount, p4blackCardCount]
    const gold = [p1goldCard, p2goldCard, p3goldCard, p4goldCard]
    const goldCounts = [p1goldCardCount, p2goldCardCount, p3goldCardCount, p4goldCardCount]

    const whiteCopy = [p1whiteCardCopy, p2whiteCardCopy, p3whiteCardCopy, p4whiteCardCopy]
    const blueCopy = [p1blueCardCopy, p2blueCardCopy, p3blueCardCopy, p4blueCardCopy]
    const greenCopy = [p1greenCardCopy, p2greenCardCopy, p3greenCardCopy, p4greenCardCopy]
    const redCopy = [p1redCardCopy, p2redCardCopy, p3redCardCopy, p4redCardCopy]
    const blackCopy = [p1blackCardCopy, p2blackCardCopy, p3blackCardCopy, p4blackCardCopy]
    const goldCopy = [p1goldCardCopy, p2goldCardCopy, p3goldCardCopy, p4goldCardCopy]

    const vp = [p1vp, p2vp, p3vp, p4vp]

    const whiteChipCount = [p1white, p2white, p3white, p4white]
    const whiteChip = [p1whitecircle, p2whitecircle, p3whitecircle, p4whitecircle]
    const blueChipCount = [p1blue, p2blue, p3blue, p4blue]
    const blueChip = [p1bluecircle, p2bluecircle, p3bluecircle, p4bluecircle]
    const greenChipCount = [p1green, p2green, p3green, p4green]
    const greenChip = [p1greencircle, p2greencircle, p3greencircle, p4greencircle]
    const redChipCount = [p1red, p2red, p3red, p4red]
    const redChip = [p1redcircle, p2redcircle, p3redcircle, p4redcircle]
    const blackChipCount = [p1black, p2black, p3black, p4black]
    const blackChip = [p1blackcircle, p2blackcircle, p3blackcircle, p4blackcircle]
    const goldChipCount = [p1gold, p2gold, p3gold, p4gold]
    const goldChip = [p1goldcircle, p2goldcircle, p3goldcircle, p4goldcircle]

    const containerRects = [p1containerRect, p2containerRect, p3containerRect, p4containerRect]
    const containers = [p1container,p2container,p3container, p4container]

    const playerChipCounts = {"w": whiteChipCount, "k": blackChipCount, "r": redChipCount, "u": blueChipCount, "g": greenChipCount, "y": goldChipCount}
    const playerChips = {"w": whiteChip, "k": blackChip, "r": redChip, "u": blueChip, "g": greenChip, "y": goldChip}
    const playerCardCounts = {"w": whiteCounts, "k": blackCounts, "r": redCounts, "u": blueCounts, "g": greenCounts, "y": goldCounts}
    const playerCards = {"w": white, "k": black, "r": red, "u": blue, "g": green, "y": gold}

    const playerNames = [p1name, p2name, p3name, p4name]
    const playerCardCopies = {"w": whiteCopy, "k": blackCopy, "r": redCopy, "u": blueCopy, "g": greenCopy, "y": goldCopy}
    const piles = {"w": whitePile, "k": blackPile, "r": redPile, "u": bluePile, "g": greenPile, "y": yellowPile}
    const pilesCopies = {"w": whitePileCopy, "k": blackPileCopy, "r": redPileCopy, "u": bluePileCopy, "g": greenPileCopy, "y": yellowPileCopy}

    return [vp, containerRects, containers, playerChipCounts, playerChips, playerCards, playerCardCounts, playerNames, playerCardCopies, piles, pilesCopies]
}

const elements = createPlayerElementArrays()
// console.log(elements)
const playerVp = elements[0]
const playerContainerRects = elements[1]
const playerContainers = elements[2]
const playerChipCounts = elements[3]
const playerChips = elements[4]
const playerCards = elements[5]
const playerCardCounts = elements[6]
const playerNames = elements[7]
const playerCardCopies = elements[8]
const piles = elements[9]
const pilesCopies = elements[10]

// console.log(playerCardCounts)

const bonusesString = JSON.parse(localStorage.getItem("bonuses"));
// console.log(bonusesString)
const playerArrayString = JSON.parse(localStorage.getItem("playerArray"));

const numPlayers = parseInt(localStorage.getItem("numPlayers"));

let turnIndex = parseInt(localStorage.getItem("turnIndex"));

function addObjects(obj1, obj2) {
    const result = {};
    const keys = Object.keys(obj1);
    for (const key of keys) {
        result[key] = obj1[key] + obj2[key]
    }
    return result
 }

function subtractObjects(total, cost) {
    const result = {};
    const keys = Object.keys(total);
    for (const key of keys) {
        result[key] = total[key] - cost[key]
    }
    return result
}

function allPositive(dict) {
    const keys = Object.keys(dict)
    for (const key of keys) {
        if (dict[key] < 0) {
            return false
        }
    }
    return true
}

function getTotalDiff(coins, cost) {
    let result = 0;
    const keys = Object.keys(coins);
    for (const key of keys) {
        result += Math.max(cost[key] - coins[key], 0)
    }
    return result
}

// function getDiffedColord(coins, cost) {
//     const result = {};
//     const keys = Object.keys(coins);
//     for (const key of keys) {
//         result[key] = Math.max(cost[key] - coins[key], 0)
//     }
//     return result
// }

function makePositive(dict) {
    for (const key of Object.keys(dict)) {
        dict[key] = Math.max(dict[key], 0)
    }
    return dict
}

function payForCard(player, cardCost) {
    let initCoins = player.coins;
    if (Object.values(subtractObjects(player.cards, cardCost)).every(value => value >=0)) {

    }
    else {
        let totalAvail = addObjects(player.coins, player.cards);
        if (Object.values(subtractObjects(totalAvail, cardCost)).every(value => value >= 0)) {
            player.coins = subtractObjects(player.coins,makePositive(subtractObjects(cardCost, player.cards)));
            adjustCoinTallies(subtractObjects(initCoins, player.coins))
        }
        else {
            if (getTotalDiff(totalAvail, cardCost) <= player.gold) {
                player.gold -= getTotalDiff(totalAvail, cardCost);
                player.coins = makePositive(subtractObjects(player.coins,makePositive(subtractObjects(cardCost, player.cards))));
                adjustCoinTallies(subtractObjects(initCoins, player.coins))
                goldVal += getTotalDiff(totalAvail, cardCost);
                yellowPile.querySelector("text").innerHTML = goldVal
            }
        }
    }
}

function adjustCoinTallies(payment) {
    pileVals["k"] += payment["k"]
    pileVals["w"] += payment["w"]
    pileVals["r"] += payment["r"]
    pileVals["g"] += payment["g"]
    pileVals["u"] += payment["u"]
    updateCoinPiles(pileVals)

    // blackPile.querySelector("text").innerHTML = parseInt(blackPile.querySelector("text").textContent) + payment["k"];
    // bluePile.querySelector("text").innerHTML = parseInt(bluePile.querySelector("text").textContent) + payment["u"];
    // redPile.querySelector("text").innerHTML = parseInt(redPile.querySelector("text").textContent) + payment["r"];
    // greenPile.querySelector("text").innerHTML = parseInt(greenPile.querySelector("text").textContent) + payment["g"];
    // whitePile.querySelector("text").innerHTML = parseInt(whitePile.querySelector("text").textContent) + payment["w"];

}

function checkAffordable(player, cardCost) {
    if (Object.values(subtractObjects(player.cards, cardCost)).every(value => value >=0)) {
        return true;
    }
    else {
        let totalAvail = addObjects(player.coins, player.cards);
        if (Object.values(subtractObjects(totalAvail, cardCost)).every(value => value >= 0)) {
            // player.coins = subtractObjects(player.coins,subtractObjects(cardCost, player.cards));
            return true;
        }
        else {
            if (getTotalDiff(totalAvail, cardCost) <= player.gold) {
                // player.gold -= getTotalDiff(totalAvail, cardCost);
                // player.coins = makePositive(subtractObjects(player.coins,subtractObjects(cardCost, player.cards)));
                return true;
            }
            else {
                return false
            }
        }
    }
}
// class Player {
//     constructor(name, coins, cards, vp, gold) {
//         this.name = name;
//         this.coins = {"w": 0, "u": 0, "g":0, "r": 0, "k": 0};
//         this.cards = {"w": 0, "u": 0, "g":0, "r": 0, "k": 0};
//         this.vp = 0;
//         this.gold = 0;
//     }
// }

class Player {
    constructor(name, coins, cards, vp, gold, reserved) {
        this.name = name;
        this.coins = coins;
        this.cards = cards;
        this.vp = vp;
        this.gold = gold;
        this.reserved = reserved;
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
    constructor(cost, vp, name) {
        this.cost = cost;
        this.vp = vp;
        this.name = name;
    }
}

function convertToCards(array) {
    out = []
    // console.log(array)
    for (const x of array) {
        if (x !== null) {
        out.push(new Card(x["color"], x["vp"], x["cost"], x["deck"]));
        }
    }
    return out
}

function convertToPlayers(array) {
    out = []
    for (const x of array) {
        out.push(new Player(x["name"], x["coins"], x["cards"], x["vp"], x["gold"], x["reserved"]));
    }
    return out
}

function convertToBonuses(array) {
    out = []
    for (const x of array) {
        out.push(new Bonus(x["cost"], x["vp"], x["name"]));
    }
    return out
}

const deck1 = convertToCards(deck1string);
const deck2 = convertToCards(deck2string);
const deck3 = convertToCards(deck3string);
const outDeck1 = convertToCards(outDeck1string);
const outDeck2 = convertToCards(outDeck2string);
const outDeck3 = convertToCards(outDeck3string);

const decks = [deck1, deck2, deck3]
const outDecks = [outDeck1, outDeck2, outDeck3]

const bonuses = convertToBonuses(bonusesString);
const playerArray = convertToPlayers(playerArrayString);

function createPlayerArray(playerNames) {
    let out = []
    for (let i = 0; i < playerNames.length; i++) {
        out.push(new Player(playerNames[i]));
    }
    return out
}
// console.log(playerNames)
// const playerArray = createPlayerArray(playerNames);
function getX(i) {
    return i*7+29;
}

function getY(i) {
    return i*11-2
}

function getAbbrev(color) {
    if (color == "white") {
        return "w"
    }
    else if (color == "blue") {
        return "u"
    }
    else if (color == "red") {
        return "r"
    }
    else if (color == "green") {
        return "g"
    }
    else if (color == "black") {
        return "k"
    }
}

function getColor(color) {
    if (color == "w") {
        return "white"
    }
    else if (color == "u") {
        return "blue"
    }
    else if (color == "r") {
        return "red"
    }
    else if (color == "g") {
        return "green"
    }
    else if (color == "k") {
        return "black"
    }
}


// function showAllDecks() {
//     for (let i = 1; i<=3; i++) {
//         showDeck(i)
//     }
// }
// function showDeck(i) {
//     let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     let x = 22;
//     let y = getY(i);

//     // x = x+ 3.2;
//     // y += 3.2;
//     piece.setAttribute("x",x);
//     piece.setAttribute("y",y);
//     // piece.setAttribute("r",1.75);
//     piece.setAttribute("height", 10);
//     piece.setAttribute("width", 6);
//     // token.setAttribute("fill",chip.color);
//     piece.setAttribute("stroke","black");
//     piece.setAttribute("stroke-width",0.15);
//     piece.setAttribute("fill", "grey")
//     piece.style.display = "inline";
//     container.appendChild(piece)

//     let number = document.createElementNS("http://www.w3.org/2000/svg","text");
//     number.textContent = i;
//     number.setAttribute("x", x+2);
//     number.setAttribute("y", y+5);
//     number.setAttribute("font-size",5);
//     number.setAttribute("fill","silver");
//     number.setAttribute("stroke", "black")
//     number.setAttribute("stroke-width",0.1)
//     container.appendChild(number);

//     board.appendChild(container)
// }

function placeCard(card, i) {
    // let chips = document.getElementById("chips");
    if ((card === undefined) || (card === null)) {
        // console.log("YESSSS")
    }
    else{
    // let board = document.getElementById("board");
    // const svgNS = "http://www.w3.org/2000/svg";
    let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // container.setAttribute("z-index",0);
    let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //console.log(chip);
    let x = getX(i);
    let y = getY(card.deck);

    // x = x+ 3.2;
    // y += 3.2;
    piece.setAttribute("x",x);
    piece.setAttribute("y",y);
    // piece.setAttribute("r",1.75);
    piece.setAttribute("height", 10);
    piece.setAttribute("width", 6);
    // token.setAttribute("fill",chip.color);
    piece.setAttribute("stroke","black");
    piece.setAttribute("stroke-width",0.15);
    piece.setAttribute("fill", "tan")
    piece.style.display = "inline";
    // token.style.borderRadius = "50%";

    container.appendChild(piece);

    let bigCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    // number.textContent = getColor;
    bigCircle.setAttribute("cx", x+4.5);
    bigCircle.setAttribute("cy", y+1.25);
    bigCircle.setAttribute("r",0.9)
    bigCircle.setAttribute("stroke", "black")
    bigCircle.setAttribute("stroke-width", 0.15)
    // number.setAttribute("font-size",2);
    bigCircle.setAttribute("fill",getColor(card.color));
    container.appendChild(bigCircle);
    
    // let line = document.createElementNS()
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y+2.5);
    line.setAttribute("x2", x+6);
    line.setAttribute("y2", y+2.5);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", 0.2);
    container.appendChild(line)

    if (card.vp != 0) {
        let number = document.createElementNS("http://www.w3.org/2000/svg","text");
        number.textContent = card.vp;
        number.setAttribute("x", x+0.5);
        number.setAttribute("y", y+2);
        number.setAttribute("font-size",2.5);
        number.setAttribute("fill","gold");
        number.setAttribute("stroke", "black")
        number.setAttribute("stroke-width",0.1)
        container.appendChild(number);
    }

    let nonzero = {}
    for (let x of Object.keys(card.cost)) {
        if (card.cost[x] > 0) {
            nonzero[x] = card.cost[x]
        }
    }
    let nonzeroKeys = Object.keys(nonzero);
    for (let j = 0; j < nonzeroKeys.length; j++) {
        let number = document.createElementNS("http://www.w3.org/2000/svg","text");
        number.textContent = nonzero[nonzeroKeys[j]];
        number.setAttribute("x", x+0.5);
        number.setAttribute("y", y+4+ (7/nonzeroKeys.length)*j);
        number.setAttribute("font-size",1.5);
        number.setAttribute("fill","black");
        container.appendChild(number);

        let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        // number.textContent = getColor;
        circle.setAttribute("cx", x+2);
        circle.setAttribute("cy", y+4+ (7/nonzeroKeys.length)*j-0.5);
        circle.setAttribute("r",0.5)
        circle.setAttribute("stroke","black")
        circle.setAttribute("stroke-width",0.1)
        // number.setAttribute("font-size",2);
        circle.setAttribute("fill",getColor(nonzeroKeys[j]));
        container.appendChild(circle);
    }


    board.appendChild(container);
    // console.log(board)
    // let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    // number.textContent = chip.value;
    // number.setAttribute("x",x-0.5);
    // number.setAttribute("y",y+0.7);
    // number.setAttribute("font-size",2.5);
    // // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }
    // number.style.fill = "white";
    // number.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
    // number.style.textShadow = "-1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black, 1.5px 1.5px 0 black";
    // board.appendChild(number);
    // complete
    //places the chip on the board
    }
}

function createCard(card, i) {
        // let chips = document.getElementById("chips");
    if ((card === undefined) || (card === null)) {
        // console.log("YESSSS")
    }
    else{
    // let board = document.getElementById("board");
    // const svgNS = "http://www.w3.org/2000/svg";
    let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // container.setAttribute("z-index",0);
    let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //console.log(chip);
    let x = getX(i);
    let y = getY(card.deck);

    // x = x+ 3.2;
    // y += 3.2;
    piece.setAttribute("x",x);
    piece.setAttribute("y",y);
    // piece.setAttribute("r",1.75);
    piece.setAttribute("height", 10);
    piece.setAttribute("width", 6);
    // token.setAttribute("fill",chip.color);
    piece.setAttribute("stroke","black");
    piece.setAttribute("stroke-width",0.15);
    piece.setAttribute("fill", "tan")
    piece.style.display = "inline";
    // token.style.borderRadius = "50%";

    container.appendChild(piece);

    let bigCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    // number.textContent = getColor;
    bigCircle.setAttribute("cx", x+4.5);
    bigCircle.setAttribute("cy", y+1.25);
    bigCircle.setAttribute("r",0.9)
    bigCircle.setAttribute("stroke", "black")
    bigCircle.setAttribute("stroke-width", 0.15)
    // number.setAttribute("font-size",2);
    bigCircle.setAttribute("fill",getColor(card.color));
    container.appendChild(bigCircle);
    
    // let line = document.createElementNS()
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y+2.5);
    line.setAttribute("x2", x+6);
    line.setAttribute("y2", y+2.5);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", 0.2);
    container.appendChild(line)

    if (card.vp != 0) {
        let number = document.createElementNS("http://www.w3.org/2000/svg","text");
        number.textContent = card.vp;
        number.setAttribute("x", x+0.5);
        number.setAttribute("y", y+2);
        number.setAttribute("font-size",2.5);
        number.setAttribute("fill","gold");
        number.setAttribute("stroke", "black")
        number.setAttribute("stroke-width",0.1)
        container.appendChild(number);
    }

    let nonzero = {}
    for (let x of Object.keys(card.cost)) {
        if (card.cost[x] > 0) {
            nonzero[x] = card.cost[x]
        }
    }
    let nonzeroKeys = Object.keys(nonzero);
    for (let j = 0; j < nonzeroKeys.length; j++) {
        let number = document.createElementNS("http://www.w3.org/2000/svg","text");
        number.textContent = nonzero[nonzeroKeys[j]];
        number.setAttribute("x", x+0.5);
        number.setAttribute("y", y+4+ (7/nonzeroKeys.length)*j);
        number.setAttribute("font-size",1.5);
        number.setAttribute("fill","black");
        container.appendChild(number);

        let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        // number.textContent = getColor;
        circle.setAttribute("cx", x+2);
        circle.setAttribute("cy", y+4+ (7/nonzeroKeys.length)*j-0.5);
        circle.setAttribute("r",0.5)
        circle.setAttribute("stroke","black")
        circle.setAttribute("stroke-width",0.1)
        // number.setAttribute("font-size",2);
        circle.setAttribute("fill",getColor(nonzeroKeys[j]));
        container.appendChild(circle);
    }


    return container
    // console.log(board)
    // let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    // number.textContent = chip.value;
    // number.setAttribute("x",x-0.5);
    // number.setAttribute("y",y+0.7);
    // number.setAttribute("font-size",2.5);
    // // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }
    // number.style.fill = "white";
    // number.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
    // number.style.textShadow = "-1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black, 1.5px 1.5px 0 black";
    // board.appendChild(number);
    // complete
    //places the chip on the board
    }
}

function getBonusX(i) {
    if (i < 3) {
        return 60
    }
    else {
        return 65
    }
}

function getBonusY(i) {
    if (i < 3) {
        return 10+i*10
    }
    else {
        return 15+(4-i)*10
    }
}

function placeBonus(bonus, i) {
// let chips = document.getElementById("chips");
    // let board = document.getElementById("board");
    // const svgNS = "http://www.w3.org/2000/svg";
    let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // container.setAttribute("z-index",0);
    let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //console.log(chip);
    let x = getBonusX(i);
    let y = getBonusY(i);

    let name = "bonus" + i;
    container.id = name;
    // x = x+ 3.2;
    // y += 3.2;
    piece.setAttribute("x",x);
    piece.setAttribute("y",y);
    // piece.setAttribute("r",1.75);
    piece.setAttribute("height", 8);
    piece.setAttribute("width", 4);
    // token.setAttribute("fill",chip.color);
    piece.setAttribute("stroke","black");
    piece.setAttribute("stroke-width",0.15);
    piece.setAttribute("fill", "tan")
    piece.style.display = "inline";
    // token.style.borderRadius = "50%";

    container.appendChild(piece);

    // let valText = document

    let valText = document.createElementNS("http://www.w3.org/2000/svg","text")
    valText.textContent = ""
    valText.setAttribute("x", x+4.5);
    valText.setAttribute("y", y+6);
    valText.setAttribute("font-size", 2.5);
    valText.setAttribute("fill", "black")
    container.appendChild(valText);
    // let bigCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    // // number.textContent = getColor;
    // bigCircle.setAttribute("cx", x+4.5);
    // bigCircle.setAttribute("cy", y+1.25);
    // bigCircle.setAttribute("r",0.9)
    // bigCircle.setAttribute("stroke", "black")
    // bigCircle.setAttribute("stroke-width", 0.15)
    // // number.setAttribute("font-size",2);
    // bigCircle.setAttribute("fill",getColor(card.color));
    // container.appendChild(bigCircle);
    
    // let line = document.createElementNS()
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y+2.5);
    line.setAttribute("x2", x+4);
    line.setAttribute("y2", y+2.5);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", 0.2);
    container.appendChild(line)


    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = bonus.vp;
    number.setAttribute("x", x+0.5);
    number.setAttribute("y", y+2);
    number.setAttribute("font-size",2.5);
    number.setAttribute("fill","gold");
    number.setAttribute("stroke", "black")
    number.setAttribute("stroke-width",0.1)
    container.appendChild(number);


    let nonzero = {}
    for (let x of Object.keys(bonus.cost)) {
        if (bonus.cost[x] > 0) {
            nonzero[x] = bonus.cost[x]
        }
    }
    let nonzeroKeys = Object.keys(nonzero);
    for (let j = 0; j < nonzeroKeys.length; j++) {
        let number = document.createElementNS("http://www.w3.org/2000/svg","text");
        number.textContent = nonzero[nonzeroKeys[j]];
        number.setAttribute("x", x+0.5);
        number.setAttribute("y", y+4+ (5/nonzeroKeys.length)*j);
        number.setAttribute("font-size",1.5);
        number.setAttribute("fill","black");
        container.appendChild(number);

        let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // number.textContent = getColor;
        rect.setAttribute("x", x+2);
        rect.setAttribute("y", y+4+ (5/nonzeroKeys.length)*j-1);
        // rect.setAttribute("r",0.5)
        rect.setAttribute("height",1)
        rect.setAttribute("width",0.5)
        rect.setAttribute("stroke","black")
        rect.setAttribute("stroke-width",0.1)
        // number.setAttribute("font-size",2);
        rect.setAttribute("fill",getColor(nonzeroKeys[j]));
        container.appendChild(rect);
    }


    // container.append(valText);
    board.appendChild(container);

}

function placeAllBonuses() {
    for (let i = 0; i<bonuses.length; i++) {
        placeBonus(bonuses[i], i)
        if (bonuses[i].name !== -1) {
            showClaimed(i)
        }
    }
}

function placeAllCards() {
    for (let i = 0; i < 4; i++) {
        placeCard(outDeck1[i], i);
        placeCard(outDeck2[i], i);
        placeCard(outDeck3[i], i);
    }
    moveButtonsToFront();
}

function checkNull(val) {
    // console.log(val)
    if ((val === null) || (val === undefined)) {
        // console.log("null")
        return 0
    }
    return 1
}


function removeNulls(arr, i) {
    // let newArr = []
    popping = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === null) || (arr[i] === undefined)) {
            popping.unshift(i)
        }
    }
    // console.log(popping)
    for (x of popping) {
        arr.splice(x,1)
    }
    return arr
    // if (popping.length > 0) {
    //     deckRects[i].style.display = "none";
    // }
    // console.log(arr)
    // return newArr
}

function sumPrev(deck,i) {
    console.log(outDecks)
    let sum = 0;
    for (let val = 0; val < i; val++) {
        sum += removeNulls(outDecks.map(x => x[val])).length
    }
    console.log(sum)
    // console.log(outDecks)
    for (let val = 0; val < deck; val++) {
        sum += checkNull(outDecks[val][i]);
    }
    console.log(sum)
    console.log(3*i + deck)
    return sum
}
// console.log(outDecks)
function removeCard(deck, i) {
    console.log(board.children)
    console.log(outDecks)
    moveButtonsToBack();
    const nthchild = board.children[sumPrev(deck,i)+22]
    console.log(nthchild)

    slideCardToPlayer(nthchild, deck, i, cardTransitionTime)
    board.removeChild(nthchild)
    // setTimeout(() => {
    //     board.removeChild(nthchild)
    // }, 201)
}

function doNotExceed(currentX, finalX, distance) {
    if (distance > 0) {
        return Math.min(currentX, finalX)
    }
    else{
        return Math.max(currentX, finalX)
    }
}

function slideCardToPlayer(cardElement, deck, i, duration) {
    const color = cardElement.children[1].getAttribute("fill");
    // console.log(color)
    const stationaryElement = playerCards[getAbbrev(color)][turnIndex]
    const element = playerCardCopies[getAbbrev(color)][turnIndex]
    // element.parentNode.appendChild(element)
    element.style.display = "inline"
    
    console.log(element)
    const finalX = parseFloat(stationaryElement.getAttribute("x"));
    const finalY = parseFloat(stationaryElement.getAttribute("y"))
    const initX = getX(i+1)
    const initY = getY(deck+1)
    const distanceX = finalX - initX;
    const distanceY = finalY - initY;
    // console.log(distanceX)
    // console.log(distanceY)
    // const startTime = performance.now();
    let currentX = initX;
    let currentY = initY;

    function animate() {
        // const elapsed = currentTime - startTime;
        // const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]
        // const currentX = initX + distanceX * progress;
        // const currentY = initY + distanceY * progress
        currentX += Math.sign(distanceX)*xSpeedPlayer
        currentY += Math.sign(distanceY)*ySpeedPlayer
        // cardElement.querySelector("rect").setAttribute("x", currentX);
        element.setAttribute("x", doNotExceed(currentX, finalX, distanceX))
        element.setAttribute("y", doNotExceed(currentY, finalY, distanceY))
        // cardElement.setAttribute("x", currentX)
        // cardElement.setAttribute("y", currentY)
        if ((doNotExceed(currentX, finalX, distanceX) != finalX) || (doNotExceed(currentY, finalY, distanceY) != finalY)) {
            requestAnimationFrame(animate)
        }
        else {
            element.style.display = "none"
        }
        // if (progress < 1) {
        //     requestAnimationFrame(animate);
        // }
        // else {
        //     element.style.display = "none"
        // }
    }

    requestAnimationFrame(animate);
}

function slideChipToPlayer(color) {
    // const color = cardElement.children[1].getAttribute("fill");
    // console.log(color)
    const stationaryElement = piles[color].querySelector("circle")
    const finalElement = playerChips[color][turnIndex]
    const element = pilesCopies[color]
    // element.parentNode.appendChild(element)
    element.style.display = "inline"
    // console.l
    console.log(stationaryElement)
    // console.log(element)
    const finalX = parseFloat(finalElement.getAttribute("cx"));
    const finalY = parseFloat(finalElement.getAttribute("cy"))
    const initX = parseFloat(stationaryElement.getAttribute("cx"))
    const initY = parseFloat(stationaryElement.getAttribute("cy"))
    const distanceX = finalX - initX;
    const distanceY = finalY - initY;
    // console.log(distanceX)
    // console.log(distanceY)
    // const startTime = performance.now();
    let currentX = initX;
    let currentY = initY;

    function animate() {
        // const elapsed = currentTime - startTime;
        // const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]
        // const currentX = initX + distanceX * progress;
        // const currentY = initY + distanceY * progress
        currentX += Math.sign(distanceX)*xSpeedPlayer
        currentY += Math.sign(distanceY)*ySpeedPlayer
        // cardElement.querySelector("rect").setAttribute("x", currentX);
        element.setAttribute("cx", doNotExceed(currentX, finalX, distanceX))
        element.setAttribute("cy", doNotExceed(currentY, finalY, distanceY))
        // cardElement.setAttribute("x", currentX)
        // cardElement.setAttribute("y", currentY)
        // console.log(currentX)
        // console.log(finalX)
        if ((doNotExceed(currentX, finalX, distanceX) != finalX) || (doNotExceed(currentY, finalY, distanceY) != finalY)) {
            requestAnimationFrame(animate)
        }
        else {
            element.style.display = "none"
        }
        
        // if (progress < 1) {
        //     requestAnimationFrame(animate);
        // }
        // else {
        //     element.style.display = "none"
        // }
    }

    requestAnimationFrame(animate);
}
// function slideCardToPlayer(cardElement, deck, i, duration) {
//     const color = cardElement.children[1].getAttribute("fill");
//     // console.log(color)
//     const stationaryElement = playerCards[getAbbrev(color)][turnIndex]
//     const element = playerCardCopies[getAbbrev(color)][turnIndex]
//     // element.parentNode.appendChild(element)
//     element.style.display = "inline"
    
//     console.log(element)
//     const finalX = parseFloat(stationaryElement.getAttribute("x"));
//     const finalY = parseFloat(stationaryElement.getAttribute("y"))
//     const initX = getX(i+1)
//     const initY = getY(deck+1)
//     const distanceX = finalX - initX;
//     const distanceY = finalY - initY;
//     // console.log(distanceX)
//     // console.log(distanceY)
//     const startTime = performance.now();

//     function animate(currentTime) {
//         const elapsed = currentTime - startTime;
//         const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]
//         const currentX = initX + distanceX * progress;
//         const currentY = initY + distanceY * progress

//         // cardElement.querySelector("rect").setAttribute("x", currentX);
//         element.setAttribute("x", currentX)
//         element.setAttribute("y", currentY)
//         // cardElement.setAttribute("x", currentX)
//         // cardElement.setAttribute("y", currentY)

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         }
//         else {
//             element.style.display = "none"
//         }
//     }

//     requestAnimationFrame(animate);
// }


function replaceCard(deck, i) {
    const nthchild = board.children[sumPrev(deck,i)+22]
    const newCard = createCard(outDecks[deck][i], i)
    if (newCard) {
        board.insertBefore(newCard,nthchild);
        // newCard.setAttribute("x", 1000)
        slideCardFromDeck(newCard, deck, 500)
    }
    moveButtonsToFront(newCard, deck)
}

// function slideCardFromDeck(cardElement, deck, time) {
//     const initX = parseFloat(deckRects[deck].querySelector("rect").getAttribute("x"));
//     console.log(initX)
//     const finalX = parseFloat(cardElement.querySelector("rect").getAttribute("x"));
//     console.log(finalX)
//     let x = initX;
//     cardElement.setAttribute("x", x)
//     const speed = (finalX-initX)/time
//     function animate() {
//         if (x < finalX) {
//             x += speed;
//             cardElement.querySelector("rect").setAttribute("x", x)
//             requestAnimationFrame(animate)
//         }
//         // console.log("YE")
//     }
//     animate();
// }

// function slideCardFromDeck(cardElement, deck, duration) {
//     const initX = parseFloat(deckRects[deck].querySelector("rect").getAttribute("x"));
//     const finalX = parseFloat(cardElement.querySelector("rect").getAttribute("x"));
//     const distance = finalX - initX;
//     const startTime = performance.now();

//     function animate(currentTime) {
//         const elapsed = currentTime - startTime;
//         const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]
//         const currentX = initX + distance * progress;

//         // cardElement.querySelector("rect").setAttribute("x", currentX);
//         updateAllX(cardElement, currentX)

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         }
//     }

//     requestAnimationFrame(animate);
// }


function slideCardFromDeck(cardElement, deck, duration) {
    const initX = parseFloat(deckRects[deck].querySelector("rect").getAttribute("x"));
    const finalX = parseFloat(cardElement.querySelector("rect").getAttribute("x"));
    const distance = finalX - initX;
    
    // const startTime = performance.now();
    let currentX = initX;
    function animate() {
        // const elapsed = currentTime - startTime;
        // const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]
        currentX += Math.sign(distance)*xSpeed;

        // cardElement.querySelector("rect").setAttribute("x", currentX);
        updateAllX(cardElement, doNotExceed(currentX, finalX, distance))

        if ((currentX < finalX) && (distance>0)) {
            requestAnimationFrame(animate);
        }
        if ((currentX > finalX) && (distance<0)) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function updateAllX(cardElement, x) {
    const children = cardElement.children;
    children[0].setAttribute("x", x)
    children[1].setAttribute("cx", x+4.5)
    children[2].setAttribute("x1", x)
    children[2].setAttribute("x2", x+6)
    if (children.length % 2 == 0) {
        children[3].setAttribute("x", x+0.5)
        for (let i = 4; i<children.length;i+=2) {
            children[i].setAttribute("x", x+0.5)
            children[i+1].setAttribute("cx", x+2)
        }
    }
    else{
        for (let i = 3; i<children.length;i+=2) {
            children[i].setAttribute("x", x+0.5)
            children[i+1].setAttribute("cx", x+2)
        }
    }
}



function removeCards() {
    // console.log(outDeck1.length)
    moveButtonsToBack();
    // console.log(outDeck1.length+outDeck2.length+outDeck3.length+bonuses.length)
    for (let i = 0; i<outDeck1.length+outDeck2.length+outDeck3.length+bonuses.length; i++) {
        // console.log(board.lastChild)
        board.removeChild(board.lastChild)
        // board.removeChild()
    }
}

for (let i = 0; i<3; i++) {
    checkEmptyDeck(i)
}

function moveButtonsToFront() {
    board.appendChild(rect11);
    board.appendChild(rect12);
    board.appendChild(rect13);
    board.appendChild(rect14);
    board.appendChild(rect21);
    board.appendChild(rect22);
    board.appendChild(rect23);
    board.appendChild(rect24);
    board.appendChild(rect31);
    board.appendChild(rect32);
    board.appendChild(rect33);
    board.appendChild(rect34);
}

function moveButtonsToBack() {
    board.insertBefore(rect11,board.firstChild)
    board.insertBefore(rect12,board.firstChild)
    board.insertBefore(rect13,board.firstChild)
    board.insertBefore(rect14,board.firstChild)
    board.insertBefore(rect21,board.firstChild)
    board.insertBefore(rect22,board.firstChild)
    board.insertBefore(rect23,board.firstChild)
    board.insertBefore(rect24,board.firstChild)
    board.insertBefore(rect31,board.firstChild)
    board.insertBefore(rect32,board.firstChild)
    board.insertBefore(rect33,board.firstChild)
    board.insertBefore(rect34,board.firstChild)

}

function updateCoinPiles(pileVals) {
    blackPile.querySelector("text").innerHTML = pileVals["k"];
    bluePile.querySelector("text").innerHTML = pileVals["u"];
    redPile.querySelector("text").innerHTML = pileVals["r"];
    greenPile.querySelector("text").innerHTML = pileVals["g"];
    whitePile.querySelector("text").innerHTML = pileVals["w"];
    yellowPile.querySelector("text").innerHTML = goldVal;
}

// function initTables() {
//     for (let i = 0; i < playerArray.length; i++) {
//         if (i == 0) {
//             initPlayer1();
//         }
//         if (i == 1) {
//             initPlayer2();
//         }
//         if (i == 2) {
//             initPlayer3();
//         }
//         if (i == 3) {
//             initPlayer4();
//         }
//     }
// }

function initTables() {
    for (let i = 0; i < playerArray.length; i++) {
        initPlayer(i)
    }
}

function initPlayer(i) {
    playerContainers[i].style.display = "inline";
    playerNames[i].innerHTML = playerArray[i].name;
    playerCards["w"][i].style.display = "none";
    playerCardCounts["w"][i].style.display = "none";
    playerCards["u"][i].style.display = "none";
    playerCardCounts["u"][i].style.display = "none";
    playerCards["g"][i].style.display = "none";
    playerCardCounts["g"][i].style.display = "none";
    playerCards["r"][i].style.display = "none";
    playerCardCounts["r"][i].style.display = "none";
    playerCards["k"][i].style.display = "none";
    playerCardCounts["k"][i].style.display = "none";
    playerCards["y"][i].style.display = "none";
    playerCardCounts["y"][i].style.display = "none";
    playerCardCopies["w"][i].style.display = "none";
    playerCardCopies["u"][i].style.display = "none";
    playerCardCopies["g"][i].style.display = "none";
    playerCardCopies["r"][i].style.display = "none";
    playerCardCopies["k"][i].style.display = "none";
    playerCardCopies["y"][i].style.display = "none";
    updatePlayer(i);
}

function updatePlayer(i) {
    playerChipCounts["w"][i].innerHTML = playerArray[i].coins["w"];
    playerChipCounts["u"][i].innerHTML = playerArray[i].coins["u"];
    playerChipCounts["g"][i].innerHTML = playerArray[i].coins["g"];
    playerChipCounts["r"][i].innerHTML = playerArray[i].coins["r"];    
    playerChipCounts["k"][i].innerHTML = playerArray[i].coins["k"]; 
    playerChipCounts["y"][i].innerHTML = playerArray[i].gold; 

    playerVp[i].innerHTML = playerArray[i].vp;
    // console.log(playerArray[i].coins)
    // console.log(playerChips)

    if (playerArray[i].cards["w"] > 0) {
        playerCardCounts["w"][i].innerHTML = playerArray[i].cards["w"];
        playerCards["w"][i].style.display = "inline";
        playerCardCounts["w"][i].style.display = "inline";
    }
    if (playerArray[i].cards["u"] > 0) {
        playerCardCounts["u"][i].innerHTML = playerArray[i].cards["u"];
        playerCards["u"][i].style.display = "inline";
        playerCardCounts["u"][i].style.display = "inline";
    }
    if (playerArray[i].cards["g"] > 0) {
        playerCardCounts["g"][i].innerHTML = playerArray[i].cards["g"];
        playerCards["g"][i].style.display = "inline";
        playerCardCounts["g"][i].style.display = "inline";
    }
    if (playerArray[i].cards["r"] > 0) {
        playerCardCounts["r"][i].innerHTML = playerArray[i].cards["r"];
        playerCards["r"][i].style.display = "inline";
        playerCardCounts["r"][i].style.display = "inline";
    }
    if (playerArray[i].cards["k"] > 0) {
        playerCardCounts["k"][i].innerHTML = playerArray[i].cards["k"];
        playerCards["k"][i].style.display = "inline";
        playerCardCounts["k"][i].style.display = "inline";
    }
    if (playerArray[i].reserved.length > 0) {
        playerCardCounts["y"][i].innerHTML = playerArray[i].reserved.length;
        playerCards["y"][i].style.display = "inline";
        playerCardCounts["y"][i].style.display = "inline";
    }
}

function initPlayer1() {
    p1container.style.display = "inline";
    p1name.innerHTML = playerArray[0].name;
    p1whiteCard.style.display = "none";
    p1whiteCardCount.style.display = "none";
    p1blueCard.style.display = "none";
    p1blueCardCount.style.display = "none";
    p1greenCard.style.display = "none";
    p1greenCardCount.style.display = "none";
    p1redCard.style.display = "none";
    p1redCardCount.style.display = "none";
    p1blackCard.style.display = "none";
    p1blackCardCount.style.display = "none";
    p1goldCard.style.display = "none";
    p1goldCardCount.style.display = "none";
    updatePlayer1();
}

function updatePlayer1() {
    p1white.innerHTML = playerArray[0].coins["w"];
    p1blue.innerHTML = playerArray[0].coins["u"];
    p1green.innerHTML = playerArray[0].coins["g"];
    p1red.innerHTML = playerArray[0].coins["r"];
    p1black.innerHTML = playerArray[0].coins["k"];
    p1gold.innerHTML = playerArray[0].gold;

    if (playerArray[0].cards["w"] > 0) {
        p1whiteCardCount.innerHTML = playerArray[0].cards["w"];
        p1whiteCard.style.display = "inline";
        p1whiteCardCount.style.display = "inline";
    }
    if (playerArray[0].cards["u"] > 0) {
        p1blueCardCount.innerHTML = playerArray[0].cards["u"];
        p1blueCard.style.display = "inline";
        p1blueCardCount.style.display = "inline";
    }
    if (playerArray[0].cards["g"] > 0) {
        p1greenCardCount.innerHTML = playerArray[0].cards["g"];
        p1greenCard.style.display = "inline";
        p1greenCardCount.style.display = "inline";
    }
    if (playerArray[0].cards["r"] > 0) {
        p1redCardCount.innerHTML = playerArray[0].cards["r"];
        p1redCard.style.display = "inline";
        p1redCardCount.style.display = "inline";
    }
    if (playerArray[0].cards["k"] > 0) {
        p1blackCardCount.innerHTML = playerArray[0].cards["k"];
        p1blackCard.style.display = "inline";
        p1blackCardCount.style.display = "inline";
    }
    if (playerArray[0].reserved.length > 0) {
        p1goldCardCount.innerHTML = playerArray[0].reserved.length;
        p1goldCard.style.display = "inline";
        p1goldCardCount.style.display = "inline";
    }
}

function updatePlayer2() {
    p2white.innerHTML = playerArray[1].coins["w"];
    p2blue.innerHTML = playerArray[1].coins["u"];
    p2green.innerHTML = playerArray[1].coins["g"];
    p2red.innerHTML = playerArray[1].coins["r"];
    p2black.innerHTML = playerArray[1].coins["k"];
    p2gold.innerHTML = playerArray[1].gold;

    if (playerArray[1].cards["w"] > 0) {
        p2whiteCardCount.innerHTML = playerArray[1].cards["w"];
        p2whiteCard.style.display = "inline";
        p2whiteCardCount.style.display = "inline";
    }
    if (playerArray[1].cards["u"] > 0) {
        p2blueCardCount.innerHTML = playerArray[1].cards["u"];
        p2blueCard.style.display = "inline";
        p2blueCardCount.style.display = "inline";
    }
    if (playerArray[1].cards["g"] > 0) {
        p2greenCardCount.innerHTML = playerArray[1].cards["g"];
        p2greenCard.style.display = "inline";
        p2greenCardCount.style.display = "inline";
    }
    if (playerArray[1].cards["r"] > 0) {
        p2redCardCount.innerHTML = playerArray[1].cards["r"];
        p2redCard.style.display = "inline";
        p2redCardCount.style.display = "inline";
    }
    if (playerArray[1].cards["k"] > 0) {
        p2blackCardCount.innerHTML = playerArray[1].cards["k"];
        p2blackCard.style.display = "inline";
        p2blackCardCount.style.display = "inline";
    }
    if (playerArray[1].reserved.length > 0) {
        p2goldCardCount.innerHTML = playerArray[1].reserved.length;
        p2goldCard.style.display = "inline";
        p2goldCardCount.style.display = "inline";
    }
}
function updatePlayer3() {
    p3white.innerHTML = playerArray[2].coins["w"];
    p3blue.innerHTML = playerArray[2].coins["u"];
    p3green.innerHTML = playerArray[2].coins["g"];
    p3red.innerHTML = playerArray[2].coins["r"];
    p3black.innerHTML = playerArray[2].coins["k"];
    p3gold.innerHTML = playerArray[2].gold;

    if (playerArray[2].cards["w"] > 0) {
        p3whiteCardCount.innerHTML = playerArray[2].cards["w"];
        p3whiteCard.style.display = "inline";
        p3whiteCardCount.style.display = "inline";
    }
    if (playerArray[2].cards["u"] > 0) {
        p3blueCardCount.innerHTML = playerArray[2].cards["u"];
        p3blueCard.style.display = "inline";
        p3blueCardCount.style.display = "inline";
    }
    if (playerArray[2].cards["g"] > 0) {
        p3greenCardCount.innerHTML = playerArray[2].cards["g"];
        p3greenCard.style.display = "inline";
        p3greenCardCount.style.display = "inline";
    }
    if (playerArray[2].cards["r"] > 0) {
        p3redCardCount.innerHTML = playerArray[2].cards["r"];
        p3redCard.style.display = "inline";
        p3redCardCount.style.display = "inline";
    }
    if (playerArray[2].cards["k"] > 0) {
        p3blackCardCount.innerHTML = playerArray[2].cards["k"];
        p3blackCard.style.display = "inline";
        p3blackCardCount.style.display = "inline";
    }
    if (playerArray[2].reserved.length > 0) {
        p3goldCardCount.innerHTML = playerArray[2].reserved.length;
        p3goldCard.style.display = "inline";
        p3goldCardCount.style.display = "inline";
    }
}
function updatePlayer4() {
    p4white.innerHTML = playerArray[3].coins["w"];
    p4blue.innerHTML = playerArray[3].coins["u"];
    p4green.innerHTML = playerArray[3].coins["g"];
    p4red.innerHTML = playerArray[3].coins["r"];
    p4black.innerHTML = playerArray[3].coins["k"];
    p4gold.innerHTML = playerArray[3].gold;

    if (playerArray[3].cards["w"] > 0) {
        p4whiteCardCount.innerHTML = playerArray[3].cards["w"];
        p4whiteCard.style.display = "inline";
        p4whiteCardCount.style.display = "inline";
    }
    if (playerArray[3].cards["u"] > 0) {
        p4blueCardCount.innerHTML = playerArray[3].cards["u"];
        p4blueCard.style.display = "inline";
        p4blueCardCount.style.display = "inline";
    }
    if (playerArray[3].cards["g"] > 0) {
        p4greenCardCount.innerHTML = playerArray[3].cards["g"];
        p4greenCard.style.display = "inline";
        p4greenCardCount.style.display = "inline";
    }
    if (playerArray[3].cards["r"] > 0) {
        p4redCardCount.innerHTML = playerArray[3].cards["r"];
        p4redCard.style.display = "inline";
        p4redCardCount.style.display = "inline";
    }
    if (playerArray[3].cards["k"] > 0) {
        p4blackCardCount.innerHTML = playerArray[3].cards["k"];
        p4blackCard.style.display = "inline";
        p4blackCardCount.style.display = "inline";
    }
    if (playerArray[3].reserved.length > 0) {
        p4goldCardCount.innerHTML = playerArray[3].reserved.length;
        p4goldCard.style.display = "inline";
        p4goldCardCount.style.display = "inline";
    }
}

function initPlayer2() {
    p2container.style.display = "inline";
    p2name.innerHTML = playerArray[1].name;
    p2whiteCard.style.display = "none";
    p2whiteCardCount.style.display = "none";
    p2blueCard.style.display = "none";
    p2blueCardCount.style.display = "none";
    p2greenCard.style.display = "none";
    p2greenCardCount.style.display = "none";
    p2redCard.style.display = "none";
    p2redCardCount.style.display = "none";
    p2blackCard.style.display = "none";
    p2blackCardCount.style.display = "none";
    p2goldCard.style.display = "none";
    p2goldCardCount.style.display = "none";
    updatePlayer2()
}

function initPlayer3() {
    p3container.style.display = "inline";
    p3name.innerHTML = playerArray[2].name;
    p3whiteCard.style.display = "none";
    p3whiteCardCount.style.display = "none";
    p3blueCard.style.display = "none";
    p3blueCardCount.style.display = "none";
    p3greenCard.style.display = "none";
    p3greenCardCount.style.display = "none";
    p3redCard.style.display = "none";
    p3redCardCount.style.display = "none";
    p3blackCard.style.display = "none";
    p3blackCardCount.style.display = "none";
    p3goldCard.style.display = "none";
    p3goldCardCount.style.display = "none";
    updatePlayer3()
}

function initPlayer4() {
    p4container.style.display = "inline";
    p4name.innerHTML = playerArray[3].name;
    p4whiteCard.style.display = "none";
    p4whiteCardCount.style.display = "none";
    p4blueCard.style.display = "none";
    p4blueCardCount.style.display = "none";
    p4greenCard.style.display = "none";
    p4greenCardCount.style.display = "none";
    p4redCard.style.display = "none";
    p4redCardCount.style.display = "none";
    p4blackCard.style.display = "none";
    p4blackCardCount.style.display = "none";
    p4goldCard.style.display = "none";
    p4goldCardCount.style.display = "none";
    updatePlayer4()
}

// function updateAllPlayers() {
//     updatePlayer1();
//     updatePlayer2();
//     if (numPlayers == 3) {
//         updatePlayer3();
//     }
//     if (numPlayers == 4) {
//         updatePlayer3();
//         updatePlayer4();
//     }
// }

function updateCurrentPlayer(i) {
    if (i == 0) {
        updatePlayer1();
    }
    if (i == 1) {
        updatePlayer2();
    }
    if (i == 2) {
        updatePlayer3();
    }
    if (i == 3) {
        updatePlayer4();
    }
}

function removeAllPlayerHighlights() {
    p1containerRect.style.stroke = "black";
    p1containerRect.setAttribute("stroke-width", 0.1);
    p2containerRect.style.stroke = "black";
    p2containerRect.setAttribute("stroke-width", 0.1);
    p3containerRect.style.stroke = "black";
    p3containerRect.setAttribute("stroke-width", 0.1);
    p4containerRect.style.stroke = "black";
    p4containerRect.setAttribute("stroke-width", 0.1);
}

function highlightCurrentPlayer(i) {
    removeAllPlayerHighlights();
    if (i == 0) {
        p1containerRect.style.stroke = "#90EE90";
        p1containerRect.setAttribute("stroke-width", 0.5);
    }
    if (i == 1) {
        p2containerRect.style.stroke = "#90EE90";
        p2containerRect.setAttribute("stroke-width", 0.5);
    }
    if (i == 2) {
        p3containerRect.style.stroke = "#90EE90";
        p3containerRect.setAttribute("stroke-width", 0.5);  
    }
    if (i == 3) {
        p4containerRect.style.stroke = "#90EE90";
        p4containerRect.setAttribute("stroke-width", 0.5);
            
    }
}

// showAllDecks()
placeAllCards()
updateCoinPiles(pileVals)
placeAllBonuses()
initTables()




// function addHighlightsAllCardsBlue() {
//     rect11.style.stroke = "cyan";
//     rect12.style.stroke = "cyan";
//     rect13.style.stroke = "cyan";
//     rect14.style.stroke = "cyan";
//     rect21.style.stroke = "cyan";
//     rect22.style.stroke = "cyan";
//     rect23.style.stroke = "cyan";
//     rect24.style.stroke = "cyan";
//     rect31.style.stroke = "cyan";
//     rect32.style.stroke = "cyan";
//     rect33.style.stroke = "cyan";
//     rect34.style.stroke = "cyan";
// }

function rectEvent(deck, i) {
    console.log(deck)
    console.log(i)
    let card = outDecks[deck][i];
    console.log(card)
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    // removeCards();
    removeCard(deck,i);
    // console.log(outDecks[deck][])
    outDecks[deck][i] = decks[deck].pop()
    // removeNulls(outDecks[deck], deck)
    checkEmptyDeck(deck);
    setTimeout(() => {
        replaceCard(deck,i)
    }, 100)
    // replaceCard(deck,i)
    // placeAllCards();
    // setTimeout(placeAllCards, 500);
    // placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}

function createHandler(deck, i) {
    return function() {
        rectEvent(deck,i);
    }
}

function createAllHandlers() {
    const handlers = {}
    for (let deck = 0; deck < 3; deck++) {
        for (let i = 0; i < 4; i++) {
            let key = `${deck},${i}`;
            handlers[key] = createHandler(deck,i)
        }
    }
    return handlers
}

const rectHandlers = createAllHandlers()

function reserveEvent(deck, i) {
    playerArray[turnIndex].reserved.push(outDecks[deck][i]);
    removeCard(deck, i);
    outDecks[deck][i] = decks[deck].pop();
    replaceCard(deck, i)
    // placeAllCards();
    removeAllReserves();
    updatePlayer(turnIndex)
    turnOver();
}

function createReserveHandler(deck, i) {
    return function() {
        reserveEvent(deck, i)
    }
} 

function createAllReserveHandlers() {
    const handlers = {}
    for (let deck = 0; deck < 3; deck++) {
        for (let i = 0; i < 4; i++) {
            let key = `${deck},${i}`;
            handlers[key] = createReserveHandler(deck,i)
        }
    }
    return handlers
}

const reserveHandlers = createAllReserveHandlers()

let whitePileDisabled = false;
let blackPileDisabled = false;
let redPileDisabled = false;
let bluePileDisabled = false;
let greenPileDisabled = false;
let goldPileDisabled = false;

const pilesDisabled = {"w": whitePileDisabled, "k": blackPileDisabled, "r": redPileDisabled, "g": greenPileDisabled, "u": bluePileDisabled, "y": goldPileDisabled}

function pileListenerHandler(color) {
    return function() {
        pileEvent(color)
    }
}
const pileHandlersAll = {"k": pileListenerHandler("k"), "u": pileListenerHandler("u"), "g": pileListenerHandler("g"), "r": pileListenerHandler("r"), "w": pileListenerHandler("w")}
pileHandlersAll["y"] = yellowPileEvent;


function addHighlightsAllCards() {
    rect11.style.stroke = "yellow";
    rect12.style.stroke = "yellow";
    rect13.style.stroke = "yellow";
    rect14.style.stroke = "yellow";
    rect21.style.stroke = "yellow";
    rect22.style.stroke = "yellow";
    rect23.style.stroke = "yellow";
    rect24.style.stroke = "yellow";
    rect31.style.stroke = "yellow";
    rect32.style.stroke = "yellow";
    rect33.style.stroke = "yellow";
    rect34.style.stroke = "yellow";
}

function addYellowEvent() {
    yellowPile.addEventListener("click", yellowPileEvent);
    goldPileDisabled = false;
}

function removeYellowListener() {
    yellowPile.querySelector("circle").style.stroke = "none";
    yellowPile.removeEventListener("click", yellowPileEvent);
    goldPileDisabled = true;
}

function yellowPileEvent() {
    slideChipToPlayer("y")
    playerArray[turnIndex].gold += 1
    goldVal -= 1;
    removeAllCardButtons();
    removeAllPileButtons();
    yellowPile.querySelector("text").innerHTML = goldVal;
    // updateCurrentPlayer(turnIndex)
    updatePlayer(turnIndex)
    rect11.addEventListener("click", reserveHandlers["0,0"]);
    rect12.addEventListener("click", reserveHandlers["0,1"]);
    rect13.addEventListener("click", reserveHandlers["0,2"]);
    rect14.addEventListener("click", reserveHandlers["0,3"]);
    rect21.addEventListener("click", reserveHandlers["1,0"]);
    rect22.addEventListener("click", reserveHandlers["1,1"]);
    rect23.addEventListener("click", reserveHandlers["1,2"]);
    rect24.addEventListener("click", reserveHandlers["1,3"]);    
    rect31.addEventListener("click", reserveHandlers["2,0"]);
    rect32.addEventListener("click", reserveHandlers["2,1"]);
    rect33.addEventListener("click", reserveHandlers["2,2"]);
    rect34.addEventListener("click", reserveHandlers["2,3"]);
    addHighlightsAllCards()
    removeYellowListener()
}
// placeCard(outDeck3[0],0)
function removeAllReserves() {
    rect11.removeEventListener("click", reserveHandlers["0,0"]);
    rect11.style.stroke = "none";
    rect12.removeEventListener("click", reserveHandlers["0,1"]);
    rect12.style.stroke = "none";
    rect13.removeEventListener("click", reserveHandlers["0,2"]);
    rect13.style.stroke = "none";
    rect14.removeEventListener("click", reserveHandlers["0,3"]);
    rect14.style.stroke = "none";
    rect21.removeEventListener("click", reserveHandlers["1,0"]);
    rect21.style.stroke = "none";
    rect22.removeEventListener("click", reserveHandlers["1,1"]);
    rect22.style.stroke = "none";
    rect23.removeEventListener("click", reserveHandlers["1,2"]);
    rect23.style.stroke = "none";
    rect24.removeEventListener("click", reserveHandlers["1,3"]);
    rect24.style.stroke = "none";    
    rect31.removeEventListener("click", reserveHandlers["2,0"]);
    rect31.style.stroke = "none";
    rect32.removeEventListener("click", reserveHandlers["2,1"]);
    rect32.style.stroke = "none";
    rect33.removeEventListener("click", reserveHandlers["2,2"]);
    rect33.style.stroke = "none";
    rect34.removeEventListener("click", reserveHandlers["2,3"]);
    rect34.style.stroke = "none";
}
// console.log(outDeck2)

// function handleReserve11() {
//     playerArray[turnIndex].reserved.push(outDeck1[0]);
//     outDeck1[0] = deck1.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updatePlayer(turnIndex)
//     turnOver();
// }
// function handleReserve12() {
//     playerArray[turnIndex].reserved.push(outDeck1[1]);
//     outDeck1[1] = deck1.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updatePlayer(turnIndex)
//     turnOver();
// }
// function handleReserve13() {
//     playerArray[turnIndex].reserved.push(outDeck1[2]);
//     outDeck1[2] = deck1.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updatePlayer(turnIndex)
//     turnOver();
// }
// function handleReserve14() {
//     playerArray[turnIndex].reserved.push(outDeck1[3]);
//     outDeck1[3] = deck1.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updatePlayer(turnIndex)
//     turnOver();
// }
// function handleReserve21() {
//     playerArray[turnIndex].reserved.push(outDeck2[0]);
//     outDeck2[0] = deck2.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve22() {
//     playerArray[turnIndex].reserved.push(outDeck2[1]);
//     outDeck2[1] = deck2.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve23() {
//     playerArray[turnIndex].reserved.push(outDeck2[2]);
//     outDeck2[2] = deck2.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     turnOver();
// }
// function handleReserve24() {
//     playerArray[turnIndex].reserved.push(outDeck2[3]);
//     outDeck2[3] = deck2.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve31() {
//     playerArray[turnIndex].reserved.push(outDeck3[0]);
//     outDeck3[0] = deck3.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve32() {
//     playerArray[turnIndex].reserved.push(outDeck3[1]);
//     outDeck3[1] = deck3.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve33() {
//     playerArray[turnIndex].reserved.push(outDeck3[2]);
//     outDeck3[2] = deck3.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }
// function handleReserve34() {
//     playerArray[turnIndex].reserved.push(outDeck3[3]);
//     outDeck3[3] = deck3.pop();
//     removeCards();
//     placeAllCards();
//     removeAllReserves();
//     updateCurrentPlayer(turnIndex)
//     turnOver();
// }


function addHighlightsAllChips() {
    blackPile.querySelector("circle").style.stroke = "yellow";
    bluePile.querySelector("circle").style.stroke = "yellow";
    redPile.querySelector("circle").style.stroke = "yellow";
    greenPile.querySelector("circle").style.stroke = "yellow";
    whitePile.querySelector("circle").style.stroke = "yellow";
    yellowPile.querySelector("circle").style.stroke = "yellow";
}


function handleCardClick(event) {
    xVal = this.x
    yVal = this.y

    
}

function takeTurn() {
    // turnOver = false;
    // console.log(pileVals)
    let player = playerArray[turnIndex];
    highlightCurrentPlayer(turnIndex);
    // console.log(player)
    addHighlightsAllChips();
    addChipButtons();
    addYellowEvent();
    // addHighlightsAllCardsBlue();
    addValidCardButtons(player);
}

function showClaimed(i) {
    title = "bonus" + i
    // console.log(document.getElementById(title))
    const group = document.getElementById(title)
    const elements = group.children
    // console.log(elements)
    for (element of elements) {
        element.setAttribute("opacity", 0.3)
    }
    // document.getElementById(title).style.opacity = "0.3"
    document.getElementById(title).querySelector("text").style.opacity = "1"
    document.getElementById(title).querySelector("text").innerHTML = playerArray[bonuses[i].name].name
}

function checkBonuses() {
    // console.log(bonuses)
    for (let i = 0; i < bonuses.length; i++) {
        x = bonuses[i]
        // console.log(x.name)
        if (x.name == -1) {
            if (allPositive(subtractObjects(playerArray[turnIndex].cards, x.cost))){
                console.log("BONUSSSS")
                x.name = turnIndex;
                playerArray[turnIndex].vp += x.vp;
                // document.getElementById(title).querySelector("rect").style.opacity = "0.5"
                // document.getElementById(title).querySelector("text").innerHTML += " " + playerArray[turnIndex].name
                showClaimed(i)
            }
        }
    }
}

function addValidCardButtons(player) {
    if (outDeck1[0] !== undefined) {
    if (checkAffordable(player, outDeck1[0].cost)) {
        rect11.addEventListener("click", rectHandlers["0,0"])
        rect11.style.stroke = "cyan";
    }
    }
    if (outDeck1[1] !== undefined) {
    if (checkAffordable(player, outDeck1[1].cost)) {
        rect12.addEventListener("click", rectHandlers["0,1"])
        rect12.style.stroke = "cyan";
    }
}
    if (outDeck1[2] !== undefined) {
    if (checkAffordable(player, outDeck1[2].cost)) {
        rect13.addEventListener("click", rectHandlers["0,2"])
        rect13.style.stroke = "cyan";
    }
}
    if (outDeck1[3] !== undefined) {
    if (checkAffordable(player, outDeck1[3].cost)) {
        rect14.addEventListener("click", rectHandlers["0,3"])
        rect14.style.stroke = "cyan";
    }
}
    if (checkAffordable(player, outDeck2[0].cost)) {
        rect21.addEventListener("click", rectHandlers["1,0"])
        rect21.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[1].cost)) {
        rect22.addEventListener("click", rectHandlers["1,1"])
        rect22.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[2].cost)) {
        rect23.addEventListener("click", rectHandlers["1,2"])
        rect23.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[3].cost)) {
        rect24.addEventListener("click", rectHandlers["1,3"])
        rect24.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[0].cost)) {
        rect31.addEventListener("click", rectHandlers["2,0"])
        rect31.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[1].cost)) {
        rect32.addEventListener("click", rectHandlers["2,1"])
        rect32.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[2].cost)) {
        rect33.addEventListener("click", rectHandlers["2,2"])
        rect33.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[3].cost)) {
        rect34.addEventListener("click", rectHandlers["2,3"])
        rect34.style.stroke = "cyan";
    }
}

// function addValidCardButtons(player) {
//     if (outDeck1.length > 0) {
//     if (checkAffordable(player, outDeck1[0].cost)) {
//         rect11.addEventListener("click", rect11event)
//         rect11.style.stroke = "cyan";
//     }
//     }
//     if (outDeck1.length > 1) {
//     if (checkAffordable(player, outDeck1[1].cost)) {
//         rect12.addEventListener("click", rect12event)
//         rect12.style.stroke = "cyan";
//     }
// }
//     if (outDeck1.length > 2) {
//     if (checkAffordable(player, outDeck1[2].cost)) {
//         rect13.addEventListener("click", rect13event)
//         rect13.style.stroke = "cyan";
//     }
// }
//     if (outDeck1.length > 3) {
//     if (checkAffordable(player, outDeck1[3].cost)) {
//         rect14.addEventListener("click", rect14event)
//         rect14.style.stroke = "cyan";
//     }
// }
//     if (checkAffordable(player, outDeck2[0].cost)) {
//         rect21.addEventListener("click", rect21event)
//         rect21.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck2[1].cost)) {
//         rect22.addEventListener("click", rect22event)
//         rect22.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck2[2].cost)) {
//         rect23.addEventListener("click", rect23event)
//         rect23.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck2[3].cost)) {
//         rect24.addEventListener("click", rect24event)
//         rect24.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck3[0].cost)) {
//         rect31.addEventListener("click", rect31event)
//         rect31.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck3[1].cost)) {
//         rect32.addEventListener("click", rect32event)
//         rect32.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck3[2].cost)) {
//         rect33.addEventListener("click", rect33event)
//         rect33.style.stroke = "cyan";
//     }
//     if (checkAffordable(player, outDeck3[3].cost)) {
//         rect34.addEventListener("click", rect34event)
//         rect34.style.stroke = "cyan";
//     }
// }

// function removeNulls(arr, i) {
//     // let newArr = []
//     popping = []
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] === null) || (arr[i] === undefined)) {
//             popping.unshift(i)
//         }
//     }
//     // console.log(popping)
//     for (x of popping) {
//         arr.splice(x,1)
//     }
//     // if (popping.length > 0) {
//     //     deckRects[i].style.display = "none";
//     // }
//     // console.log(arr)
//     // return newArr
// }

function checkEmptyDeck(i) {
    if (decks[i].length == 0) {
        deckRects[i].style.display = "none";
    }
}

// console.log(rectHandlers)
function rect11event() {
    let card = outDeck1[0];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    // removeCards();
    removeCard(0,0);
    outDeck1[0] = deck1.pop()
    removeNulls(outDeck1, 0)
    checkEmptyDeck(0);
    setTimeout(() => {
        replaceCard(0,0)
    }, 500)
    // placeAllCards();
    // setTimeout(placeAllCards, 500);
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}

function rect12event() {
    let card = outDeck1[1];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck1[1] = deck1.pop()
    removeNulls(outDeck1, 0)
    checkEmptyDeck(0);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver()
}

function rect13event() {
    let card = outDeck1[2];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck1[2] = deck1.pop()
    removeNulls(outDeck1, 0)
    checkEmptyDeck(0);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}

function rect14event() {
    let card = outDeck1[3];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck1[3] = deck1.pop()
    removeNulls(outDeck1, 0)
    checkEmptyDeck(0);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect21event() {
    let card = outDeck2[0];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();    
    outDeck2[0] = deck2.pop()
    removeNulls(outDeck2, 1)
    checkEmptyDeck(1);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect22event() {
    let card = outDeck2[1];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck2[1] = deck2.pop()
    removeNulls(outDeck2, 1)
    checkEmptyDeck(1);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect23event() {
    let card = outDeck2[2];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck2[2] = deck2.pop()
    removeNulls(outDeck2, 1)
    checkEmptyDeck(1);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect24event() {
    let card = outDeck2[3];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck2[3] = deck2.pop()
    removeNulls(outDeck2, 1)
    checkEmptyDeck(1);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect31event() {
    let card = outDeck3[0];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck3[0] = deck3.pop()
    removeNulls(outDeck3, 2)
    checkEmptyDeck(2);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect32event() {
    let card = outDeck3[1];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck3[1] = deck3.pop()
    removeNulls(outDeck3, 2)
    checkEmptyDeck(2);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect33event() {
    let card = outDeck3[2];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck3[2] = deck3.pop()
    removeNulls(outDeck3, 2)
    checkEmptyDeck(2);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}
function rect34event() {
    let card = outDeck3[3];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    removeCards();
    outDeck3[3] = deck3.pop();
    removeNulls(outDeck3, 2)
    checkEmptyDeck(2);
    placeAllCards();
    placeAllBonuses();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}

// NEED TO ADD THE CHIP BANK THING


function removeAllCardButtons() {
    rect11.removeEventListener("click", rectHandlers["0,0"]);
    rect11.style.stroke = "none";
    rect12.removeEventListener("click", rectHandlers["0,1"]);
    rect12.style.stroke = "none";
    rect13.removeEventListener("click", rectHandlers["0,2"]);
    rect13.style.stroke = "none";
    rect14.removeEventListener("click", rectHandlers["0,3"]);
    rect14.style.stroke = "none";
    rect21.removeEventListener("click", rectHandlers["1,0"]);
    rect21.style.stroke = "none";
    rect22.removeEventListener("click", rectHandlers["1,1"]);
    rect22.style.stroke = "none";
    rect23.removeEventListener("click", rectHandlers["1,2"]);
    rect23.style.stroke = "none";
    rect24.removeEventListener("click", rectHandlers["1,3"]);
    rect24.style.stroke = "none";    
    rect31.removeEventListener("click", rectHandlers["2,0"]);
    rect31.style.stroke = "none";
    rect32.removeEventListener("click", rectHandlers["2,1"]);
    rect32.style.stroke = "none";
    rect33.removeEventListener("click", rectHandlers["2,2"]);
    rect33.style.stroke = "none";
    rect34.removeEventListener("click", rectHandlers["2,3"]);
    rect34.style.stroke = "none";
}

// function removePileListener(color) {

// }

function removePileListener(color) {
    // console.log(`removed ${color}`)
    piles[color].removeEventListener("click", pileHandlersAll[color]);
    piles[color].querySelector("circle").style.stroke = "none";
    pilesDisabled[color] = true;
}

// function removePileListenerHandler(color) {
//     return function() {
//         removePileListener(color)
//     }
// }

// function removeBlackListener() {
//     console.log("removingBlack")
//     blackPile.removeEventListener("click", pileHandlersAll["k"]);
//     blackPile.querySelector("circle").style.stroke = "none";
//     blackPileDisabled = true;
// }

// function removeBlueListener() {
//     bluePile.removeEventListener("click", pileHandlersAll["u"]);
//     bluePile.querySelector("circle").style.stroke = "none";
//     bluePileDisabled = true;
// }

// function removeRedListener() {
//     redPile.removeEventListener("click", pileHandlersAll["r"]);
//     redPile.querySelector("circle").style.stroke = "none";
//     redPileDisabled = true;
// }

// function removeGreenListener() {
//     greenPile.removeEventListener("click", pileHandlersAll["g"]);
//     greenPile.querySelector("circle").style.stroke = "none";
//     greenPileDisabled = true;
// }

// function removeWhiteListener() {
//     whitePile.removeEventListener("click", pileHandlersAll["w"]);
//     whitePile.querySelector("circle").style.stroke = "none";
//     whitePileDisabled = true;
// }

// const removePileListenersDict = {"k": removePileListenerHandler("k"), "u": removePileListenerHandler("u"), "r": removePileListenerHandler("r"), "g": removePileListenerHandler("g"), "w": removePileListenerHandler("w")}
// // removePileListenersDict["k"] = removeBlackListener()


function removeAllPileButtons() {
    // removeBlackListener();
    // removeBlueListener();
    // removeGreenListener();
    // removeRedListener();
    // removeWhiteListener();
    for (x of colors) {
        removePileListener(x)
    }
}

// function removePrevListener(color) {
//     removePileListener(color)
// }

function checkAllDisabled() {
    if ((blackPileDisabled) && (bluePileDisabled) && (greenPileDisabled) && (redPileDisabled) && (whitePileDisabled) && (goldPileDisabled)) {
        turnOver()
    }
}

function pileEvent(color) {
    // console.log(color)
    slideChipToPlayer(color)
    removeAllCardButtons();
    playerArray[turnIndex].coins[color] += 1;
    const number = piles[color].querySelector("text").textContent;
    // console.log(number)
    piles[color].querySelector("text").innerHTML = number-1;
    pileVals[color] -= 1;
    // console.log(pileVals)
    chipsBought.push(color);
    updatePlayer(turnIndex)
    removeYellowListener();
    if ((chipsBought.length == 1) && (number < 4)) {
        // console.log('Yes')
        removePileListener(color)
        checkAllDisabled()
    }
    if (chipsBought.length == 2) {
            if (chipsBought[0] == color) {
            removeAllPileButtons();
            // setTimeout(turnOver,2000);
            turnOver()
        }
        else {
            removePileListener(color)
            removePileListener(chipsBought[0]);
            checkAllDisabled()
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
    }
}

// function blackPileEvent() {
//     removeAllCardButtons();
//     playerArray[turnIndex].coins["k"] += 1;
//     number = blackPile.querySelector("text").textContent;
//     blackPile.querySelector("text").innerHTML = number-1;
//     pileVals["k"] -= 1;
//     chipsBought.push("k");
//     updatePlayer(turnIndex)
//     removeYellowListener();
//     if ((chipsBought.length == 1) && (number < 4)) {
//         removeBlackListener();
//         checkAllDisabled()
//     }
//     if (chipsBought.length == 2) {
//         if (chipsBought[0] == "k") {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver()
//         }
//         else {
//             removeBlackListener();
//             removePrevListener(chipsBought[0]);
//             checkAllDisabled()
//         }
//     }
//     if (chipsBought.length == 3) {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver();
//     }
// }

// function bluePileEvent() {
//     removeAllCardButtons();
//     playerArray[turnIndex].coins["u"] += 1;
//     number = bluePile.querySelector("text").textContent;
//     bluePile.querySelector("text").innerHTML = number-1;
//     pileVals["u"] -= 1;
//     chipsBought.push("u");
//     removeYellowListener();
//     updatePlayer(turnIndex)
//     if ((chipsBought.length == 1) && (number < 4)) {
//         removeBlueListener();
//         checkAllDisabled();
//     }
//     if (chipsBought.length == 2) {
//         if (chipsBought[0] == "u") {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver();
//         }
//         else {
//             removeBlueListener();
//             removePrevListener(chipsBought[0]);
//             checkAllDisabled();
//         }
//     }
//     if (chipsBought.length == 3) {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver();
//     }
// }

// function redPileEvent() {
//     removeAllCardButtons();
//     playerArray[turnIndex].coins["r"] += 1;
//     number = redPile.querySelector("text").textContent;
//     redPile.querySelector("text").innerHTML = number-1;
//     chipsBought.push("r");
//     removeYellowListener();
//     pileVals["r"] -= 1;
//     updatePlayer(turnIndex);
//     if ((chipsBought.length == 1) && (number < 4)) {
//         removeRedListener();
//         checkAllDisabled();
//     }
//     if (chipsBought.length == 2) {
//         if (chipsBought[0] == "r") {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver()
//         }
//         else {
//             removeRedListener();
//             removePrevListener(chipsBought[0]);
//             checkAllDisabled();
//         }
//     }
//     if (chipsBought.length == 3) {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver()
//     }
// }

// function greenPileEvent() {
//     removeAllCardButtons();
//     playerArray[turnIndex].coins["g"] += 1;
//     number = greenPile.querySelector("text").textContent;
//     greenPile.querySelector("text").innerHTML = number-1;
//     chipsBought.push("g");
//     removeYellowListener();
//     pileVals["g"] -= 1;
//     updatePlayer(turnIndex);
//     if ((chipsBought.length == 1) && (number < 4)) {
//         removeGreenListener();
//         checkAllDisabled();
//     }
//     if (chipsBought.length == 2) {
//         if (chipsBought[0] == "g") {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver();
//         }
//         else {
//             removeGreenListener();
//             removePrevListener(chipsBought[0]);
//             checkAllDisabled();
//         }
//     }
//     if (chipsBought.length == 3) {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver()
//     }
// }

// function whitePileEvent() {
//     removeAllCardButtons();
//     playerArray[turnIndex].coins["w"] += 1;
//     number = whitePile.querySelector("text").textContent;
//     whitePile.querySelector("text").innerHTML = number-1;
//     chipsBought.push("w");
//     removeYellowListener();
//     pileVals["w"] -= 1;
//     updatePlayer(turnIndex);
//     if ((chipsBought.length == 1) && (number < 4)) {
//         removeWhiteListener();
//         checkAllDisabled();
//     }
//     if (chipsBought.length == 2) {
//         if (chipsBought[0] == "w") {
//             removeAllPileButtons();
//             // setTimeout(turnOver,2000);
//             turnOver();
//         }
//         else {
//             removeWhiteListener();
//             removePrevListener(chipsBought[0]);
//             checkAllDisabled();
//         }
//     }
//     if (chipsBought.length == 3) {
//         removeAllPileButtons();
//         // setTimeout(turnOver,2000);
//         turnOver();
//     }
// }

// NEED TO HANDLE CASE WHERE THERE IS NOTHING LEFT TO BUY

function addChipButtons() {
    blackPile.disabled = false;
    bluePile.disabled = false;
    redPile.disabled = false;
    greenPile.disabled = false;
    whitePile.disabled = false;

    // blackPile.addEventListener('click', () => {
    //     playerArray[turnIndex].coins["k"] += 1;
    //     number = blackPile.querySelector("text").textContent;
    //     blackPile.querySelector("text").innerHTML = number-1;
    //     chipsBought.push("k");
    //     if ((chipsBought.length == 1) && (number < 4)) {
    //         blackPile.disabled = true;
    //         blackPile.querySelector("circle").style.stroke = "none";
    //     }
    //     if ((chipsBought.length == 2) && (chipsBought[0] == "k")) {
    //         blackPile.disabled = true;
    //         turnOver = true;
    //     }
    // })
    blackPile.addEventListener("click", pileHandlersAll["k"]);
    bluePile.addEventListener("click", pileHandlersAll["u"]);
    redPile.addEventListener("click", pileHandlersAll["r"]);
    greenPile.addEventListener("click", pileHandlersAll["g"]);
    whitePile.addEventListener("click", pileHandlersAll["w"]);

    blackPileDisabled = false;
    bluePileDisabled = false;
    redPileDisabled = false;
    greenPileDisabled = false;
    whitePileDisabled = false;

    // if (pileVals["k"] == 0) {
    //     removeBlackListener()
    // }
    // if (pileVals["u"] == 0) {
    //     removeBlueListener()
    // }
    // if (pileVals["g"] == 0) {
    //     removeGreenListener()
    // }
    // if (pileVals["r"] == 0) {
    //     removeRedListener()
    // }
    // if (pileVals["w"] == 0) {
    //     removeWhiteListener()
    // }

    for (x of colors) {
        if (pileVals[x] == 0) {
            removePileListener(x)
        }
    }

    // bluePile.addEventListener('click', () => {
    //     playerArray[turnIndex].coins["u"] += 1;
    //     number = bluePile.querySelector("text").textContent;
    //     bluePile.querySelector("text").innerHTML = number-1;

    // })
    
    // redPile.addEventListener('click', () => {
    //     playerArray[turnIndex].coins["r"] += 1;
    //     number = redPile.querySelector("text").textContent;
    //     redPile.querySelector("text").innerHTML = number-1;
    // })

    // greenPile.addEventListener('click', () => {
    //     playerArray[turnIndex].coins["g"] += 1;
    //     number = greenPile.querySelector("text").textContent;
    //     greenPile.querySelector("text").innerHTML = number-1;
    // })

    // whitePile.addEventListener('click', () => {
    //     playerArray[turnIndex].coins["w"] += 1;
    //     number = whitePile.querySelector("text").textContent;
    //     whitePile.querySelector("text").innerHTML = number-1;
    // })
}

function removeChipButtons() {
    
}

function checkWinCondition(player) {
    if (player.vp >= victoryValue) {
        return true
    }
    return false;
}

function discardChips(player) {

}

function turnOver() {
    checkBonuses()
    updatePlayer(turnIndex)
    // console.log(elements)
    // console.log(playerArray)
    const victory = checkWinCondition(playerArray[turnIndex])
    if (victory) {

    } 
    else {
        turnIndex += 1;
        if (turnIndex >= playerArray.length) {
            turnIndex = 0;
        }

        
        storeThings();
        chipsBought = [];
        setTimeout(takeTurn,waitTime);
        // removeCards();
        // console.log(playerArray)
        // console.log(pileVals)
    }

}

function storeThings() {
    localStorage.setItem("deck1", JSON.stringify(deck1))
    localStorage.setItem("deck1", JSON.stringify(deck1))
    localStorage.setItem("deck1", JSON.stringify(deck1))
    localStorage.setItem("outDeck1", JSON.stringify(outDeck1))
    localStorage.setItem("outDeck2", JSON.stringify(outDeck2))
    localStorage.setItem("outDeck2", JSON.stringify(outDeck2))

    localStorage.setItem("bonuses", JSON.stringify(bonuses))

    localStorage.setItem("playerArray", JSON.stringify(playerArray))
    localStorage.setItem("turnIndex", turnIndex)

    localStorage.setItem("goldVal", goldVal)
    
    localStorage.setItem("pileVals", JSON.stringify(pileVals))
}



takeTurn()