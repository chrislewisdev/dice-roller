function addDie(type) {
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die ' + type;
    die.innerText = type;
    diceElement.appendChild(die);

    addClass(document.getElementById('result-tray'), 'hidden');
}

function rollDie(element) {
    element.className += ' rolling';
    element.innerText = '';

    window.setTimeout(function() {
        element.remove();
    }, 2000);
    
    var range = parseInt(element.className.match(/d(\d+)/)[1]);
    var result = Math.floor(Math.random() * range + 1);
    return result;
}

function rollDice() {
    var dice = document.getElementsByClassName('die');
    if (dice.length > 0) {
        var button = document.getElementById('roll-button');
        button.setAttribute('disabled', true);
        
        var result = 0;
        for (var i = 0; i < dice.length; i++)
        {
            result += rollDie(dice[i]);
        }
    
        window.setTimeout(function() { 
            button.removeAttribute('disabled'); 
            var resultElement = document.getElementById('result-tray');
            removeClass(resultElement, 'hidden');
            resultElement.innerText = result;
        }, 1900);
    }
}

function addClass(element, className) {
    if (!element.className.match(className)) {
        element.className += ' ' + className;
    }
}

function removeClass(element, className) {
    element.className = element.className.replace(className, '');
}