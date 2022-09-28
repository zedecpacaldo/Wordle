"use strict";

const appDiv = document.getElementById('app');
const alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

function makeGameScreen(chosenWord: string) {
    if (appDiv == null) return;


    let elements: HTMLElement[] = [];
    const answerBox = document.createElement("input");

    const staticLetters = document.createElement("div");
    staticLetters.appendChild(document.createTextNode(alphabet));

    answerBox.setAttribute("type", "text");

    elements.push(answerBox);
    elements.push(staticLetters);

    appDiv.replaceChildren(...elements);
    var attempts = 6;
    document.addEventListener('keydown', (event) => {
        if(event.key === "Enter" && document.activeElement === answerBox){
            if((answerBox.value).length == 5){
                attempts--;
                
                var guesses = document.createElement("div");
                var guessString = (answerBox.value).toLowerCase()
                const guess = document.createTextNode(guessString);
                guesses.appendChild(guess);

                elements.push(guesses);
                appDiv.replaceChildren(...elements);

                answerBox.value = "";
                
                if(guessString == chosenWord){
                    alert(`You got the word correctly: ${chosenWord}`);
                    answerBox.disabled = true;
                }
                else if (attempts == 0) {
                    alert(`You ran out of attempts! Correct word is ${chosenWord}`);
                    answerBox.disabled = true;
                    answerBox.value = "";
                    return;
                }
            }
            else
            {
                alert("Input box should have exactly five characters!");
            }
        }
    }, false);


}

function makeStartScreen() {
    if(appDiv !== null) {
        let elements: HTMLElement[] = [];
    
        const inputBox = document.createElement("input");
        const startButton = document.createElement("button");

        inputBox.setAttribute("type", "text")
        startButton.setAttribute("type", "button");
        startButton.textContent = "START";
    
        elements.push(inputBox);

        startButton.addEventListener('click', () => {
            if(inputBox.value !== "") {
                var API_ENDPOINT = inputBox.value;
                let xhr = new XMLHttpRequest();
                xhr.open('GET', API_ENDPOINT, true);
                xhr.onload = function() {  
                    const parsed = (xhr.response).split('\n');
                    const word = parsed[Math.floor(Math.random() * parsed.length)];
                    console.log(word);
                    makeGameScreen(word);
                };
                xhr.send();
                
            }
            else 
            {
                alert("No URL was specified!");
            }

        });
        elements.push(startButton);
    
        appDiv.replaceChildren(...elements);
    } 
}

makeStartScreen();