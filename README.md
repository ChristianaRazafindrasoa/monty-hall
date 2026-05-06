# Monty Hall Simulator 🚪🚪🚪

A Node.js CLI simulation of the classic Monty Hall Problem, demonstrating how switching doors dramatically increases your chances of winning.

Play as a human for a few rounds, or let the computer run hundreds/thousands of simulations to see the probability shift from ~33% to ~67% when switching consistently.

## Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/ChristianaRazafindrasoa/monty-hall
   cd monty-hall
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the game:
   ```bash
   npm start
   ```

## How to Run

- Choose `1` to play as a human.
- Choose `2` to let the computer play.
- If you choose the human player, you can play `1-10` rounds.
- If you choose the computer player, you can run `100-99999` rounds.
- The game will print a summary of wins and losses.

## Tech Stack

- Node.js
- ECMAScript modules (`type: module`)
- `prompt-sync` for console input

## Example Outputs

### Human player

```text
==============  🚪  🚪  🚪  =================
Welcome to the Monty Hall Problem Simulator.

Do you want to play as:
1. Human
2. Computer
Choose [1-2]: 1
How many rounds to you want to play [1-10]? 1

Round #1: 
There are three doors labeled 1-3.
Choose a door [1-3]: 3
You chose door #3
A goat is behind door #2
Switch doors [y/n]?: n
You win!

===== Summary =====
Total Games: 1
Wins:        1
Losses:      0
```

### Computer player

```text
==============  🚪  🚪  🚪  =================
Welcome to the Monty Hall Problem Simulator.

Do you want to play as:
1. Human
2. Computer
Choose [1-2]: 2
Always switch doors [y/n]?: y
How many rounds to you want to play [100-99,999]? 1000

Round #1:
...

Round #1000: 
There are three doors labeled 1-3.
You chose door #3
A goat is behind door #1
You switched to door #2
You lose!

===== Summary =====
Total Games: 1000
Wins:        658
Losses:      342
```