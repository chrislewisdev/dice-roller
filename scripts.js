function addDie() {
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die d6';
    die.innerText = 'd6';
    diceElement.appendChild(die);
}

function rollDie(element) {
    element.innerText = Math.floor(Math.random() * 6 + 1);
}

function rollDice() {
    var dice = document.getElementsByClassName('d6');
    for (var i = 0; i < dice.length; i++)
    {
        rollDie(dice[i]);
        // dice[i].innerText = Math.floor(Math.random() * 6 + 1);
    }
}