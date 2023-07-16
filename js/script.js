const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingLetters = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span")
const guessMessage = document.querySelector (".message");
const playAgain = document.querySelector (".play-again");

let word = "magnolia";

const guessedLetters = [];

let remainingGuesses = 8; 

const getWord = async function () {
    const retrieve = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await retrieve.text();
    const wordArray = words.split("\n");
    const randomWord = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomWord].trim();
    placeholder(word);
}

getWord();



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
    };

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

};

const makeGuess = function (inputLetter) {
    inputLetter = inputLetter.toUpperCase();
    if (guessedLetters.includes(inputLetter)) {
        guessMessage.innerText = "You already guessed that letter! Try again!";
    } else {
        guessedLetters.push(inputLetter);
        console.log(guessedLetters);
        updateGuessesRemaining(inputLetter);
        displayGuessedLetters();
        guessInProgress(guessedLetters);
    }
};
    
const displayGuessedLetters = function () {
    lettersGuessed.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li")
        li.innerText = letter;
        lettersGuessed.append(li);
    }
};

const guessInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
         } else {
        revealWord.push("●");
        }

    }

    wordInProgress.innerText = revealWord.join("");
    youWin();
};

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        guessMessage.innerText = `Sorry, there's no ${guess}.`; 
        remainingGuesses -= 1;
    } else {
        guessMessage.innerText = `Correct! Good guess!`;
    }

    if (remainingGuesses === 0) {
        guessMessage.innerHTML = `Good try! The word was <span class="highlight">${word}</span>.`; 
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess left!`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses left!`;
    }
};

const youWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        guessMessage.classList.add("win");
        guessMessage.innerHTML = `<p class="highlight"> Congratulations! You guessed the word!</p>`;
    }
};




