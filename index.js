"use strict";

const createPrompt = require("prompt-sync");
const prompt = createPrompt();

function randomInt(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

function readInt(message, min, max) {
    let valid = false;
    let result;
    while (!valid) {
        let input = prompt(message);
        result = parseInt(input, 10);
        if (isNaN(result)) {
            console.log(`${input} is not a number.`);
        } else if (result < min || result > max) {
            console.log(`Value must be between ${min} and ${min}.`);
        } else {
            valid = true;
        }
    }
    return result;
}

function getRevealedDoor(prizeDoor, playerDoor) {
    let result;
    if (prizeDoor === playerDoor) {
        result = (prizeDoor + 1 + randomInt(2)) % 3; 
    } else {
        result = 3 - prizeDoor - playerDoor;
    }
    return result;
}

function playGame() {
    console.log("Let's Solve the Monty Hall Problem!");
    console.log("There are three doors labeled 1-3.");
    let prizeDoor = randomInt(3);
    let playerDoor = readInt("Choose a door [1-3]: ", 1, 3);
    playerDoor--;

    console.log(`You chose door #${playerDoor + 1}`);
    let revealedDoor = getRevealedDoor(prizeDoor, playerDoor);
    console.log(`A goat is behind door #${revealedDoor + 1}`);
    let change = prompt("Switch doors [y/n]: ").toLowerCase() === "y";

    if (change) {
        playerDoor = 3 - playerDoor - revealedDoor;
        console.log(`You switched to door #${playerDoor + 1}`);
    }

    if (playerDoor === prizeDoor) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playGame();