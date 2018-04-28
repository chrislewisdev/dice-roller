function addDie(type) {
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die ' + type;
    die.innerText = type;
    diceElement.appendChild(die);
}

function rollDie(element) {
    var range = parseInt(element.className.match(/d(\d+)/)[1]);
    var result = Math.floor(Math.random() * range + 1);
    element.className += ' rolling';

    element.innerText = '';
    window.setTimeout(function() {
        element.innerText = result;
        removeClass(element, 'rolling');
    }, 2000);

    return result;
}

function rollDice() {
    var result = 0;
    
    var button = document.getElementById('roll-button');
    button.setAttribute('disabled', true);

    var dice = document.getElementsByClassName('die');
    for (var i = 0; i < dice.length; i++)
    {
        result += rollDie(dice[i]);
    }

    window.setTimeout(function() { 
        button.removeAttribute('disabled'); 
        var resultElement = document.getElementById('result-tray');
        removeClass(resultElement, 'hidden');
        resultElement.innerText = result;
    }, 2000);
}

function clearDice() {
    var dice = document.getElementsByClassName('die');

    while (dice.item(0)) {
        dice.item(0).remove();
    }

    addClass(document.getElementById('result-tray'), 'hidden');
}

function addClass(element, className) {
    if (!element.className.match(className)) {
        element.className += ' ' + className;
    }
}

function removeClass(element, className) {
    element.className = element.className.replace(className, '');
}