function addDie(type) {
    var resultElement = document.getElementById('result-tray');
    if (!resultElement.className.match('hidden')) {
        clearDice();
    }
    addClass(resultElement, 'hidden');
    
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die new ' + type;
    die.innerText = type;
    diceElement.appendChild(die);
}

function rollDie(element) {
    removeClass(element, 'new');
    element.className += ' rolling';
    element.innerText = '';
    
    var range = parseInt(element.className.match(/d(\d+)/)[1]);
    var result = Math.floor(Math.random() * range + 1);
    window.setTimeout(function() {
        element.innerText = result;
    }, 1800);
    window.setTimeout(function() {
        removeClass(element, 'rolling');
    }, 2000);
    
    return result;
}

function rollDice() {
    var dice = document.getElementsByClassName('die');
    if (dice.length > 0) {
        var rollButton = document.getElementById('roll-button');
        rollButton.setAttribute('disabled', true);

        var addButtons = document.getElementsByClassName('add-button');
        for (var i = 0; i < addButtons.length; i++)
        {
            addButtons[i].setAttribute('disabled', true);
        }

        var resultElement = document.getElementById('result-tray');
        addClass(resultElement, 'hidden');
        
        var result = 0;
        for (var i = 0; i < dice.length; i++)
        {
            result += rollDie(dice[i]);
        }
    
        window.setTimeout(function() { 
            rollButton.removeAttribute('disabled'); 
            for (var i = 0; i < addButtons.length; i++)
            {
                addButtons[i].removeAttribute('disabled');
            }

            removeClass(resultElement, 'hidden');
            resultElement.innerText = result;
        }, 1900);
    }
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