"use strict";
var appDiv = document.getElementById('app');
function makeStartScreen() {
    if (appDiv !== null) {
        var elements = [];
        var inputBox = document.createElement("input");
        var startButton = document.createElement("button");
        inputBox.setAttribute("type", "text");
        startButton.setAttribute("type", "button");
        startButton.textContent = "Start";
        elements.push(inputBox);
        elements.push(startButton);
        appDiv.replaceChildren.apply(appDiv, elements);
    }
}
makeStartScreen();
