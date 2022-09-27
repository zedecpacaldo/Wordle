"use strict";

const appDiv = document.getElementById('app');

function makeStartScreen() {
    if(appDiv !== null) {
        let elements: HTMLElement[] = [];
    
        const inputBox = document.createElement("input");
        const startButton = document.createElement("button");
    
        inputBox.setAttribute("type", "text")
        startButton.setAttribute("type", "button");
        startButton.textContent = "Start";
    
        elements.push(inputBox);
        elements.push(startButton);
    
        appDiv.replaceChildren(...elements);
    } 
}

makeStartScreen();