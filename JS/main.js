


for(let i = 0; i < 8; i++)
    genCosts[i] = (genBaseCosts[i] * Math.pow(1.1, genLevels[i]));

for(let i = 0; i < generatorInfo.length; i++) {
    document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${genCosts[i].toFixed(2)}`
    document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${genLevels[i].toFixed(2)}`
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

        for(let i = 0; i < generatorInfo.length; i++) {
            document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${genCosts[i].toFixed(2)}`
            document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${genLevels[i].toFixed(2)}`
        }

    }
}

window.setInterval(function() {
    watts += genLevels[0];
    watts += 10 * genLevels[1];
    watts += 100 * genLevels[2];
    watts += 1e3 * genLevels[3];
    watts += 1e4 * genLevels[4];
    watts += 1e5 * genLevels[5];
    watts += 1e6 * genLevels[6];
    watts += 1e7 * genLevels[7];

    document.getElementById("watts").innerHTML = `Watts: ${watts.toFixed(2)}`
}, 100)

window.setInterval(function () {

    localStorage.setItem("data", btoa(JSON.stringify(data)));
}, 1000)


