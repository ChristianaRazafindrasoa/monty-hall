import createPrompt from "prompt-sync";

const prompt = createPrompt();

export function readString(message) {
    return prompt(message);
}

export function readInt(message, min, max) {
    let valid = false;
    let result;
    while (!valid) {
        let input = prompt(message);
        result = parseInt(input, 10);
        if (isNaN(result)) {
            console.log(`${input} is not a number.`);
        } else if (result < min || result > max) {
            console.log(`Value must be between ${min} and ${max}.`);
        } else {
            valid = true;
        }
    }
    return result;
}