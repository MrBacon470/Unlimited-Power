
for(let i = 0; i < 8; i++)
    genCosts[i] = (genBaseCosts[i] * Math.pow(1.1, genLevels[i]));

for(let i = 0; i < 2; i++) {
    document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${genCosts[i].toFixed(2)}`
    document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${genCosts[i].toFixed(2)}`
}

function powerClick(number) {
    watts += number
    document.getElementById("watts").innerHTML = `Watts: ${watts.toFixed(2)}`
}

function purchaseGenerator(number) {

    for(let i = 0; i < 8; i++)
        genCosts[i] = (genBaseCosts[i] * Math.pow(1.15, genLevels[i]));

    if(watts >= genCosts[number]) {
        genLevels[number]++;
        watts -= genCosts[number];
        for(let i = 0; i < 8; i++)
            genCosts[i] = (genBaseCosts[i] * Math.pow(1.15, genLevels[i]));

        for(let i = 0; i < 2; i++) {
            document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${genCosts[i].toFixed(2)}`
            document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${genCosts[i].toFixed(2)}`
        }

    }
}

window.setInterval(function() {
    watts += genLevels[0];
    watts += 10 * genLevels[1];

    document.getElementById("watts").innerHTML = `Watts: ${watts.toFixed(2)}`


}, 50)

