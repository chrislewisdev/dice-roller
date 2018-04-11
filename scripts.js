function addDie() {
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die d6';
    die.innerText = 'd6';
    diceElement.appendChild(die);
}

function rollDie(element) {
    var result = Math.floor(Math.random() * 6 + 1);
    element.innerText = result;
    return result;
}

function rollDice() {
    var result = 0;
    var dice = document.getElementsByClassName('d6');
    
    for (var i = 0; i < dice.length; i++)
    {
        result += rollDie(dice[i]);
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}