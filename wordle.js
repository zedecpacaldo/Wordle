"use strict";
var appDiv = document.getElementById('app');
var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
function includes(basis, letter) {
    for (var i = 0; i < basis.length; i++) {
        if (letter === basis[i]) {
            return true;
        }
    }
    return false;
}
function makeGameScreen(chosenWord) {
    if (appDiv == null)
        return;
    var elements = [];
    var answerBox = document.createElement("input");
    var staticLetters = document.createElement("div");
    staticLetters.appendChild(document.createTextNode(alphabet));
    answerBox.setAttribute("type", "text");
    elements.push(answerBox);
    elements.push(staticLetters);
    appDiv.replaceChildren.apply(appDiv, elements);
    var attempts = 6;
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && document.activeElement === answerBox) {
            if ((answerBox.value).length == 5) {
                attempts--;
                var guesses = document.createElement("div");
                var guessString = (answerBox.value).toLowerCase();
                var entry = [];
                // const guess = document.createTextNode(guessString);
                for (var i = 0; i < guessString.length; i++) {
                    var letter = guessString[i];
                    var guess = document.createElement("letter");
                    if (includes(chosenWord, letter)) {
                        if (chosenWord[i] == letter) {
                            guess.textContent = letter;
                            guess.classList.add('correct');
                        }
                        else {
                            guess.textContent = letter;
                            guess.classList.add('misplaced');
                        }
                    }
                    else {
                        guess.textContent = letter;
                    }
                    entry.push(guess);
                }
                guesses.replaceChildren.apply(guesses, entry);
                elements.push(guesses);
                appDiv.replaceChildren.apply(appDiv, elements);
                answerBox.value = "";
                if (guessString == chosenWord) {
                    alert("You got the word correctly: ".concat(chosenWord));
                    answerBox.disabled = true;
                }
                else if (attempts == 0) {
                    alert("You ran out of attempts! Correct word is ".concat(chosenWord));
                    answerBox.disabled = true;
                    answerBox.value = "";
                    return;
                }
            }
            else {
                alert("Input box should have exactly five characters!");
            }
        }
    }, false);
}
function makeStartScreen() {
    if (appDiv !== null) {
        var elements = [];
        var inputBox_1 = document.createElement("input");
        var startButton = document.createElement("button");
        inputBox_1.setAttribute("type", "text");
        startButton.setAttribute("type", "button");
        startButton.textContent = "START";
        elements.push(inputBox_1);
        startButton.addEventListener('click', function () {
            if (inputBox_1.value !== "") {
                var API_ENDPOINT = inputBox_1.value;
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', API_ENDPOINT, true);
                xhr_1.onload = function () {
                    var parsed = (xhr_1.response).split('\n');
                    var word = parsed[Math.floor(Math.random() * parsed.length)];
                    console.log(word);
                    makeGameScreen(word);
                };
                xhr_1.send();
            }
            else {
                alert("No URL was specified!");
            }
        });
        elements.push(startButton);
        appDiv.replaceChildren.apply(appDiv, elements);
    }
}
makeStartScreen();
