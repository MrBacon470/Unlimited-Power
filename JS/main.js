


for(let i = 0; i < 8; i++)
    genCosts[i] = (genBaseCosts[i] * Math.pow(1.1, genLevels[i]));

for(let i = 0; i < generatorInfo.length; i++) {
    document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${Notate(genCosts[i])}`
    document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${Notate(genLevels[i])}`
}

function powerClick(number) {
    watts += number
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
            document.getElementById(`${generatorInfo[i].costID}`).innerHTML = `Cost: ${Notate(genCosts[i])}`
            document.getElementById(`${generatorInfo[i].genID}`).innerHTML = `${generatorInfo[i].name}: ${Notate(genLevels[i])}`
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

    document.getElementById("watts").innerHTML = `Watts: ${Notate(watts)}`
}, 100)

window.setInterval(function () {

    localStorage.setItem("data", btoa(JSON.stringify(data)));
}, 1000)

function Notate(x) {
    let exponent = Math.floor(Math.log10(Math.abs(x)));
    let mantissa = x / Math.pow(10, exponent);
    if(x >= 1e3)
        return `${mantissa.toFixed(2)}e${exponent}`
    else if(x < 1e3)
        return `${x.toFixed(2)}`;
    else if(x == 0)
        return '0';
}


