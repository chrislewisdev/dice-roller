function addDie(type) {
    var diceElement = document.getElementById('dice');
    var die = document.createElement("div");
    die.className = 'die ' + type;
    die.innerText = type;
    diceElement.appendChild(die);
}

function rollDie(element, range) {
    var result = Math.floor(Math.random() * range + 1);
    element.innerText = result;
    return result;
}

function rollDice() {
    var result = 0;
    var d4 = document.getElementsByClassName('d4');
    var d6 = document.getElementsByClassName('d6');
    var d8 = document.getElementsByClassName('d8');
    var d10 = document.getElementsByClassName('d10');
    var d12 = document.getElementsByClassName('d12');
    var d20 = document.getElementsByClassName('d20');
    
    for (var i = 0; i < d4.length; i++)
    {
        result += rollDie(d4[i], 4);
    }
    for (var i = 0; i < d6.length; i++)
    {
        result += rollDie(d6[i], 6);
    }
    for (var i = 0; i < d8.length; i++)
    {
        result += rollDie(d8[i], 8);
    }
    for (var i = 0; i < d10.length; i++)
    {
        result += rollDie(d10[i], 10);
    }
    for (var i = 0; i < d12.length; i++)
    {
        result += rollDie(d12[i], 12);
    }
    for (var i = 0; i < d20.length; i++)
    {
        result += rollDie(d20[i], 20);
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}