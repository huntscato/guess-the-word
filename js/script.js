const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingLetters = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining-span")
const guessMessage = document.querySelector (".message");
const playAgain = document.querySelector (".play-again");

const word = "magnolia";

const guessedLetters = [];

const placeholder = function() {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    guessMessage.innerText = "";
    const inputLetter = guessInput.value;
    const goodGuess = playerInput(inputLetter);

    if (goodGuess) {
        makeGuess(inputLetter);
    }

    guessInput.value = "";

});

const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if (input.length === 0) {
        // If the input is empty. //
        guessMessage.innerText = "Enter a letter!";
    } else if (input.length > 1) {
        // If there is more than 1 letter. //
        guessMessage.innerText = "Only enter one letter at a time!";
    } else if (!input.match(acceptedLetter)) {
        // If anything other than a letter is entered. //
        guessMessage.innerText = "Only enter a letter from A to Z!";
    } else {
        // Single letter entered. //
        return input;
    }

const makeGuess = function (inputLetter) {
    inputLetter = inputLetter.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter! Try again!";
    } else {
        guessedLetters.push(inputLetter);
        console.log(guessedLetters);
    }
};
    
};
