//initiate the variables

var wins = 0;
var losses = 0;
var guessesleft = 10;
var userGuess =[];


// start the psychic-game

function psychicGame (){
    //create letter string
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var int = Math.round(Math.random() * 26);
    var ramdonLetter = letters[int];

    console.log(int);   // show ramdon number
    console.log(ramdonLetter);  // show ramdon letter

    letterMatch();

    function letterMatch(){
        
        document.onkeyup = function(event){
            var keyunicode = (event.keyCode);
            console.log(keyunicode); // show uncode

            // conver unicode into a character from user input
            var keystring = String.fromCharCode(keyunicode);
            console.log(keystring); // show a character

            var userinput = keystring.toLowerCase();
            console.log(userinput); // show a character in lowercase

            if (keyunicode < 65 || keyunicode > 90){
                alert("Invalid Entry");

            }else if (userGuess.indexOf(userinput) >=0 ){
                alert("You already guessed that!")

            }else if (userinput === ramdonLetter){
                console.log("You win."); // show your choice match ramdon choice
                alert("You win!");

                wins = wins + 1;
                document.getElementById("your-wins").innerHTML = wins;

                resetGame();

            }else {
                guessesleft = guessesleft - 1;

                document.getElementById("guesses-left").innerHTML = guessesleft;
                userGuess.push(userinput); // append userinput to array userguess

                console.log("Your guesses so far: " + userGuess); // show userguess

                document.getElementById("your-guesses").innerHTML = userGuess;

                console.log("Guesses left: " + guessesleft); // show guessesleft

                noGuessesLeft();
            }

        }

    }

    function resetGame(){
        // reset all the rariable
        guessesleft = 10;
        userGuess = [];
        document.getElementById("guesses-left").innerHTML = guessesleft;
        document.getElementById("your-guesses").innerHTML = userGuess;
        
        psychicGame();

    }

    function noGuessesLeft(){
        if (guessesleft === 0){
            alert("YOU LOSE!");
            losses = losses + 1;
            document.getElementById("your-losses").innerHTML = losses;

            resetGame();

        } else {
            console.log("Incorrect. Try again."); // show incorrect
            letterMatch();
        }
    }

}

psychicGame();


