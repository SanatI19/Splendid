let board = document.getElementById("board")
const deck1string = JSON.parse(localStorage.getItem("deck1"));
const deck2string = JSON.parse(localStorage.getItem("deck2"));
const deck3string = JSON.parse(localStorage.getItem("deck3"));

let outDeck1string = JSON.parse(localStorage.getItem("outDeck1"));
let outDeck2string = JSON.parse(localStorage.getItem("outDeck2"));
let outDeck3string = JSON.parse(localStorage.getItem("outDeck3"));

let pileVals = JSON.parse(localStorage.getItem("pileVals"))
// console.log(pileVals)
// console.log(pileVals["k"])

let victoryValue = 15;

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


const bonusesString = JSON.parse(localStorage.getItem("bonuses"));
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
            player.coins = subtractObjects(player.coins,subtractObjects(cardCost, player.cards));
            adjustCoinTallies(subtractObjects(initCoins, player.coins))
        }
        else {
            if (getTotalDiff(totalAvail, cardCost) <= player.gold) {
                player.gold -= getTotalDiff(totalAvail, cardCost);
                player.coins = makePositive(subtractObjects(player.coins,subtractObjects(cardCost, player.cards)));
                adjustCoinTallies(subtractObjects(initCoins, player.coins))
            }
        }
    }
}

function adjustCoinTallies(payment) {
    blackPile.querySelector("text").innerHTML = parseInt(blackPile.querySelector("text").textContent) + payment["k"];
    bluePile.querySelector("text").innerHTML = parseInt(bluePile.querySelector("text").textContent) + payment["u"];
    redPile.querySelector("text").innerHTML = parseInt(redPile.querySelector("text").textContent) + payment["r"];
    greenPile.querySelector("text").innerHTML = parseInt(greenPile.querySelector("text").textContent) + payment["g"];
    whitePile.querySelector("text").innerHTML = parseInt(whitePile.querySelector("text").textContent) + payment["w"];

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
    constructor(name, coins, cards, vp, gold) {
        this.name = name;
        this.coins = coins;
        this.cards = cards;
        this.vp = vp;
        this.gold = gold;
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

function convertToCards(array) {
    out = []
    for (const x of array) {
        out.push(new Card(x["color"], x["vp"], x["cost"], x["deck"]));
    }
    return out
}

function convertToPlayers(array) {
    out = []
    for (const x of array) {
        out.push(new Player(x["name"], x["coins"], x["cards"], x["vp"], x["gold"]));
    }
    return out
}

function convertToBonuses(array) {
    out = []
    for (const x of array) {
        out.push(new Bonus(x["cost"], x["vp"]));
    }
    return out
}

const deck1 = convertToCards(deck1string);
const deck2 = convertToCards(deck2string);
const deck3 = convertToCards(deck3string);
const outDeck1 = convertToCards(outDeck1string);
const outDeck2 = convertToCards(outDeck2string);
const outDeck3 = convertToCards(outDeck3string);

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
    return i*10+20;
}

function getY(i) {
    return i*12-12
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


function showAllDecks() {
    for (let i = 1; i<=3; i++) {
        showDeck(i)
    }
}
function showDeck(i) {
    let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    let x = 10;
    let y = getY(i);

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
    piece.setAttribute("fill", "grey")
    piece.style.display = "inline";
    container.appendChild(piece)

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = i;
    number.setAttribute("x", x+2);
    number.setAttribute("y", y+5);
    number.setAttribute("font-size",5);
    number.setAttribute("fill","silver");
    number.setAttribute("stroke", "black")
    number.setAttribute("stroke-width",0.1)
    container.appendChild(number);

    board.appendChild(container)
}

function placeCard(card, i) {
    // let chips = document.getElementById("chips");
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

function placeAllCards() {
    for (let i = 0; i < 4; i++) {
        placeCard(outDeck1[i], i);
        placeCard(outDeck2[i], i);
        placeCard(outDeck3[i], i);
    }
    moveButtonsToFront();
}

function removeCards() {
    moveButtonsToBack();
    for (let i = 0; i<12; i++) {
        board.removeChild(board.lastChild)
        // board.removeChild()
    }
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

function initCoinPiles(pileVals) {
    blackPile.querySelector("text").innerHTML = pileVals["k"];
    bluePile.querySelector("text").innerHTML = pileVals["u"];
    redPile.querySelector("text").innerHTML = pileVals["r"];
    greenPile.querySelector("text").innerHTML = pileVals["g"];
    whitePile.querySelector("text").innerHTML = pileVals["w"];
}
showAllDecks()
placeAllCards()
initCoinPiles(pileVals)


const yellowPile = document.getElementById("yellowPile");

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


yellowPile.addEventListener(('click'), () => {
    rect11.addEventListener("click", handleReserve);
    rect12.addEventListener("click", handleReserve);
    rect13.addEventListener("click", handleReserve);
    rect14.addEventListener("click", handleReserve);
    rect21.addEventListener("click", handleReserve);
    rect22.addEventListener("click", handleReserve);
    rect23.addEventListener("click", handleReserve);
    rect24.addEventListener("click", handleReserve);    
    rect31.addEventListener("click", handleReserve);
    rect32.addEventListener("click", handleReserve);
    rect33.addEventListener("click", handleReserve);
    rect34.addEventListener("click", handleReserve);
    addHighlightsAllCards()
})
// placeCard(outDeck3[0],0)

// console.log(outDeck2)
function handleReserve(event) {
    // LETS DO THIS LAST SINCE IT IS ANNOYING AS FREAK
}

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
    let player = playerArray[turnIndex];
    // console.log(player)
    addHighlightsAllChips();
    addChipButtons();
    // addHighlightsAllCardsBlue();
    addValidCardButtons(player);
}



function addValidCardButtons(player) {
    if (checkAffordable(player, outDeck1[0].cost)) {
        rect11.addEventListener("click", rect11event)
        rect11.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck1[1].cost)) {
        rect12.addEventListener("click", rect12event)
        rect12.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck1[2].cost)) {
        rect13.addEventListener("click", rect13event)
        rect13.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck1[3].cost)) {
        rect14.addEventListener("click", rect14event)
        rect14.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[0].cost)) {
        rect21.addEventListener("click", rect21event)
        rect21.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[1].cost)) {
        rect22.addEventListener("click", rect22event)
        rect22.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[2].cost)) {
        rect23.addEventListener("click", rect23event)
        rect23.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck2[3].cost)) {
        rect24.addEventListener("click", rect24event)
        rect24.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[0].cost)) {
        rect31.addEventListener("click", rect31event)
        rect31.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[1].cost)) {
        rect32.addEventListener("click", rect32event)
        rect32.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[2].cost)) {
        rect33.addEventListener("click", rect33event)
        rect33.style.stroke = "cyan";
    }
    if (checkAffordable(player, outDeck3[3].cost)) {
        rect34.addEventListener("click", rect34event)
        rect34.style.stroke = "cyan";
    }
}

function rect11event() {
    let card = outDeck1[0];
    let player = playerArray[turnIndex];
    player.cards[card.color] += 1;
    player.vp += card.vp;
    payForCard(player, card.cost)
    outDeck1[0] = deck1.pop()
    removeCards();
    placeAllCards();
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
    outDeck1[1] = deck1.pop()
    removeCards();
    placeAllCards();
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
    outDeck1[2] = deck1.pop()
    removeCards();
    placeAllCards();
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
    outDeck1[3] = deck1.pop()
    removeCards();
    placeAllCards();
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
    outDeck2[0] = deck2.pop()
    removeCards();
    placeAllCards();
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
    outDeck2[1] = deck2.pop()
    removeCards();
    placeAllCards();
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
    outDeck2[2] = deck2.pop()
    removeCards();
    placeAllCards();
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
    outDeck2[3] = deck2.pop()
    removeCards();
    placeAllCards();
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
    outDeck3[0] = deck3.pop()
    removeCards();
    placeAllCards();
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
    outDeck3[1] = deck3.pop()
    removeCards();
    placeAllCards();
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
    outDeck3[2] = deck3.pop()
    removeCards();
    placeAllCards();
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
    outDeck3[3] = deck3.pop();
    removeCards();
    placeAllCards();
    removeAllCardButtons();
    removeAllPileButtons();
    turnOver();
}

// NEED TO ADD THE CHIP BANK THING


function removeAllCardButtons() {
    rect11.removeEventListener("click", rect11event);
    rect11.style.stroke = "none";
    rect12.removeEventListener("click", rect12event);
    rect12.style.stroke = "none";
    rect13.removeEventListener("click", rect13event);
    rect13.style.stroke = "none";
    rect14.removeEventListener("click", rect14event);
    rect14.style.stroke = "none";
    rect21.removeEventListener("click", rect21event);
    rect21.style.stroke = "none";
    rect22.removeEventListener("click", rect22event);
    rect22.style.stroke = "none";
    rect23.removeEventListener("click", rect23event);
    rect23.style.stroke = "none";
    rect24.removeEventListener("click", rect24event);
    rect24.style.stroke = "none";    
    rect31.removeEventListener("click", rect31event);
    rect31.style.stroke = "none";
    rect32.removeEventListener("click", rect32event);
    rect32.style.stroke = "none";
    rect33.removeEventListener("click", rect33event);
    rect33.style.stroke = "none";
    rect34.removeEventListener("click", rect34event);
    rect34.style.stroke = "none";
}

function removeBlackListener() {
    blackPile.removeEventListener("click", blackPileEvent);
    blackPile.querySelector("circle").style.stroke = "none";
}

function removeBlueListener() {
    bluePile.removeEventListener("click", bluePileEvent);
    bluePile.querySelector("circle").style.stroke = "none";
}

function removeRedListener() {
    redPile.removeEventListener("click", redPileEvent);
    redPile.querySelector("circle").style.stroke = "none";
}

function removeGreenListener() {
    greenPile.removeEventListener("click", greenPileEvent);
    greenPile.querySelector("circle").style.stroke = "none";
}

function removeWhiteListener() {
    whitePile.removeEventListener("click", whitePileEvent);
    whitePile.querySelector("circle").style.stroke = "none";
}

function removeAllPileButtons() {
    removeBlackListener();
    removeBlueListener();
    removeGreenListener();
    removeRedListener();
    removeWhiteListener();
}

function removePrevListener(color) {
    if (color == "k") {
        removeBlackListener();
    }
    if (color == "w") {
        removeWhiteListener();
    }
    if (color == "r") {
        removeRedListener();
    }
    if (color == "g") {
        removeGreenListener();
    }
    if (color == "u") {
        removeBlueListener();
    }
}

function blackPileEvent() {
    removeAllCardButtons();
    playerArray[turnIndex].coins["k"] += 1;
    number = blackPile.querySelector("text").textContent;
    blackPile.querySelector("text").innerHTML = number-1;
    chipsBought.push("k");
    if ((chipsBought.length == 1) && (number < 4)) {
        removeBlackListener();
    }
    if (chipsBought.length == 2) {
        if (chipsBought[0] == "k") {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver()
        }
        else {
            removeBlackListener();
            removePrevListener(chipsBought[0]);
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
    }
}

function bluePileEvent() {
    removeAllCardButtons();
    playerArray[turnIndex].coins["u"] += 1;
    number = bluePile.querySelector("text").textContent;
    bluePile.querySelector("text").innerHTML = number-1;
    chipsBought.push("u");
    if ((chipsBought.length == 1) && (number < 4)) {
        removeBlueListener();
    }
    if (chipsBought.length == 2) {
        if (chipsBought[0] == "u") {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
        }
        else {
            removeBlueListener();
            removePrevListener(chipsBought[0]);
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
    }
}

function redPileEvent() {
    removeAllCardButtons();
    playerArray[turnIndex].coins["r"] += 1;
    number = redPile.querySelector("text").textContent;
    redPile.querySelector("text").innerHTML = number-1;
    chipsBought.push("r");
    if ((chipsBought.length == 1) && (number < 4)) {
        removeRedListener();
    }
    if (chipsBought.length == 2) {
        if (chipsBought[0] == "r") {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver()
        }
        else {
            removeRedListener();
            removePrevListener(chipsBought[0]);
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver()
    }
}

function greenPileEvent() {
    removeAllCardButtons();
    playerArray[turnIndex].coins["g"] += 1;
    number = greenPile.querySelector("text").textContent;
    greenPile.querySelector("text").innerHTML = number-1;
    chipsBought.push("g");
    if ((chipsBought.length == 1) && (number < 4)) {
        removeGreenListener();
    }
    if (chipsBought.length == 2) {
        if (chipsBought[0] == "g") {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
        }
        else {
            removeGreenListener();
            removePrevListener(chipsBought[0]);
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver()
    }
}

function whitePileEvent() {
    removeAllCardButtons();
    playerArray[turnIndex].coins["w"] += 1;
    number = whitePile.querySelector("text").textContent;
    whitePile.querySelector("text").innerHTML = number-1;
    chipsBought.push("w");
    if ((chipsBought.length == 1) && (number < 4)) {
        removeWhiteListener();
    }
    if (chipsBought.length == 2) {
        if (chipsBought[0] == "w") {
            removeAllPileButtons();
            // setTimeout(turnOver,2000);
            turnOver();
        }
        else {
            removeWhiteListener();
            removePrevListener(chipsBought[0]);
        }
    }
    if (chipsBought.length == 3) {
        removeAllPileButtons();
        // setTimeout(turnOver,2000);
        turnOver();
    }
}

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
    blackPile.addEventListener("click", blackPileEvent);
    bluePile.addEventListener("click", bluePileEvent);
    redPile.addEventListener("click", redPileEvent);
    greenPile.addEventListener("click", greenPileEvent);
    whitePile.addEventListener("click", whitePileEvent);


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

function turnOver() {
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
        setTimeout(takeTurn,2000);
        // removeCards();
        console.log(playerArray)
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
    
    localStorage.setItem("pileVals", JSON.stringify(pileVals))
}



takeTurn()