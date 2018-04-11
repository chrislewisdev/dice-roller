function rollDie(dieElementName) {
    document.getElementById(dieElementName).innerText = Math.floor(Math.random() * 6 + 1);
}