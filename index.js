import { readInt, readString } from "./standard-in.js";
import { HumanPlayer, ComputerPlayer } from "./players.js";
import { Game } from "./game.js";

function getPlayer() {
    console.log("\nDo you want to play as:");
    console.log("1. Human");
    console.log("2. Computer");

    const playerType = readInt("Choose [1-2]: ", 1, 2);
    if (playerType === 1) {
        return new HumanPlayer();
    }

    const switchDoor = readString("Always switch doors [y/n]?: ")
        .toLowerCase() === "y";
    return new ComputerPlayer(switchDoor);
}

function runGameLoop() {
    console.log("\n=============  🚪  🚪  🚪  ================");
    console.log("Welcome to the Monty Hall Problem Simulator");
    const player = getPlayer();

    let rounds = 0;
    if (player instanceof HumanPlayer) {
        rounds = readInt("How many rounds to you want to play [1-10]? ", 1, 10);
    } else if (player instanceof ComputerPlayer) {
        rounds = readInt("How many rounds to you want to play [100-99,999]? ", 100, 99999);
    }

    let wins = 0;
    for (let r = 0; r < rounds; r++) {
        console.log(`\nRound #${r + 1}: `);
        let game = new Game(player);
        if (game.play()) {
            wins++;
        }
    }

    console.log("\n===== Summary =====");
    console.log(`Total Games: ${rounds}`);
    console.log(`Wins:        ${wins}`);
    console.log(`Losses:      ${rounds - wins}\n`);
}

runGameLoop();