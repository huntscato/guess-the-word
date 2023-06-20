const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingLetters = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining-span")
const guessMessage = document.querySelector (".message");
const playAgain = document.querySelector (".play-again");

const word = "magnolia";

const holder = function() {
    const holderLetters = [];
    for (const letter of word) {
        console.log(letter);
        holderLetters.push("●");
    }
    wordInProgress.innerText = holderLetters.join("");
};

holder(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const inputLetter = guessInput.value
    console.log(inputLetter);
    guessInput.value = "";
});