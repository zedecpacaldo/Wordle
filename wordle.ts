"use strict";

const appDiv = document.getElementById('app');

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