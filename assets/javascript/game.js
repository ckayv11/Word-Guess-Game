//VARIABLES
var words = ["lannister", "hodor", "jonsnow", "nightking", "tyrion", "dracarys", "dragon"];

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;


//MAIN GAME LOOP

function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

};


//AUDIO FUNCTION

var themesong = document.getElementById("themesong");

function aud() {

    if (randomWord === words[0]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/lannister.gif";
    }

    else if (randomWord === words[1]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/hodor.gif";
    }

    else if (randomWord === words[2]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/jonsnow.gif";
    }

    else if (randomWord === words[3]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/nightking.gif";
    }

    else if (randomWord === words[4]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/tyrion.gif";
    }

    else if (randomWord === words[5]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/dracarys.gif";
    }

    else if (randomWord === words[6]) {
        themesong.play();
        document.getElementById("image").src = "assets/images/dragon.gif";
    }
};


//RESET FUNCTION

function reset() {
    guessesRemaining = 15;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
};


//CHECK LETTERS

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
};

//FINAL COMPLETE FUNCTION

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guessesremaining:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("wins").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "assets/images/arya.jpg"
        document.getElementById("losses").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
};


//EXECUTE CODE 

//call start game function
Game()

//check for keyup then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("lettersguessed").innerHTML = "  " + wrongGuess.join(" ");
};
