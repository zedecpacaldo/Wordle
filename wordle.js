"use strict";
var appDiv = document.getElementById('app');
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
