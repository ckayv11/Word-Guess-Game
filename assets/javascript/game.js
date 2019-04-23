//VARIABLES
var wordBank = ["lannister", "hodor", "jonsnow", "nightking", "tyrion", "dracarys", "dragon"];

var randomWord = "";
var lettersArray = [];
var wrongGuess = [];

//Counter Variables
var guessesRemaining = 10;
var wins = 0;
var losses = 0;


//MAIN GAME LOOP

function gameStart() {
    //computer generates random word from words array
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < randomWord.length; i++) {
        lettersArray[i] = "_";
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + lettersArray.join("  ");

};


//AUDIO & CAPTION VARIABLES & FUNCTIONS

var themesong = document.getElementById("themesong");
var imagecaption = document.getElementById("imagecaption");

function aud() {

    if (randomWord === "lannister") {
        themesong.play();
        document.getElementById("image").src = "assets/images/lannister.gif";
        document.getElementById("imagecaption").innerHTML = "Lannister";
    }

    else if (randomWord === "hodor") {
        themesong.play();
        document.getElementById("image").src = "assets/images/hodor.gif";
        document.getElementById("imagecaption").innerHTML = "Hodor";
    }

    else if (randomWord === "jonsnow") {
        themesong.play();
        document.getElementById("image").src = "assets/images/jonsnow.gif";
        document.getElementById("imagecaption").innerHTML = "JonSnow";
    }

    else if (randomWord === "nightking") {
        themesong.play();
        document.getElementById("image").src = "assets/images/nightking.gif";
        document.getElementById("imagecaption").innerHTML = "Nightking";
    }

    else if (randomWord === "tyrion") {
        themesong.play();
        document.getElementById("image").src = "assets/images/tyrion.gif";
        document.getElementById("imagecaption").innerHTML = "Tyrion";
    }

    else if (randomWord === "dracarys") {
        themesong.play();
        document.getElementById("image").src = "assets/images/dracarys.gif";
        document.getElementById("imagecaption").innerHTML = "Dracarys";
    }

    else if (randomWord === "dragon") {
        themesong.play();
        document.getElementById("image").src = "assets/images/dragon.gif";
        document.getElementById("imagecaption").innerHTML = "Dragon";
    }
};


//RESET FUNCTION

function reset() {
    lettersArray = [];
    wrongGuess = [];
    guessesRemaining = 10;
    gameStart()
};


//CHECK LETTERS

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] == letter) {
                lettersArray[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else if (wrongGuess.indexOf(letter) === -1) {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
};

//Reset input function
function resetInputField() {
    document.getElementById("input-field").value = '';
}

//FINAL COMPLETE FUNCTION

//check to see if player won...
function complete() {
    //if WON...then add a point to wins, play audio, display image and reset new round
    if (lettersArray.indexOf("_") == -1) {
        wins++;
        aud()
        reset()
        document.getElementById("wins").innerHTML = " " + wins;
        resetInputField()
        

    //if LOST...then add to the losses, display image
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "assets/images/arya.jpg"
        document.getElementById("imagecaption").innerHTML = "Sorry!";
        document.getElementById("losses").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = " " + lettersArray.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
};


//EXECUTE CODE //Key Up

//call start game function
gameStart()

// window.onload = function() {
//     document.getElementById("input-field").focus();
//   };

//check for keyup then store in guesses
document.addEventListener("keyup", function (event) {
    console.log(event);
    var guesses = event.key;
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //display/store incorrect letters on screen
    document.getElementById("lettersguessed").innerHTML = "  " + wrongGuess.join(" ");
    
}) 

document.addEventListener("touchend", function (event) {
    console.log(event);
    var guesses = event.key;
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //display/store incorrect letters on screen
    document.getElementById("lettersguessed").innerHTML = "  " + wrongGuess.join(" ");
    
}) 


