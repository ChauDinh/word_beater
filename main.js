window.addEventListener('load', init);

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const currentLevel = levels.medium;

// Global variables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const seconds = document.querySelector("#seconds");
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");

const words = [
    'hat',
    'river',
    'baby',
    'cocktail',
    'runaway',
    'stubborn',
    'establishment',
    'accommodate',
    'handkerchief',
    'rhythm',
    'conscience',
    'disinterested',
    'lieutenant',
    'millennium',
    'maintenance',
    'pronunciation',
    'pseudocode',
    'squirrelled',
    'subdermatoglyphic',
    'incomprehensibilities',
    'hypothentically',
    'inconsequential',
    'interdisciplinary',
];

// Initialize game
function init() {
    // Show number of seconds
    seconds.innerHTML = currentLevel;

    // Load word from array
    showWord(words);

    // Start matching on word input
    wordInput.addEventListener('input', startMatch);

    // Call countdown every second
    setInterval(countdown, 1000);

    // Check status
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // if score is -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to word input
function matchWords() {
    if(wordInput.value ===  currentWord.innerHTML) {
        message.innerHTML = 'Congratulation!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}