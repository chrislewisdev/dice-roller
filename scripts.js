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
    element.innerText = result;
    return result;
}

function rollDice() {
    var result = 0;
    var dice = document.getElementsByClassName('die');
    
    for (var i = 0; i < dice.length; i++)
    {
        result += rollDie(dice[i]);
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}

function clearDice() {
    var dice = document.getElementsByClassName('die');

    while (dice.item(0)) {
        dice.item(0).remove();
    }

    document.getElementById('result').innerText = '';
}