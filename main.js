let watts = 0
let genLevels = new Array(8).fill(0);
let genBaseCosts = [
    10,
    100,
    1e3,
    1e4,
    1e5,
    1e6,
    1e7,
    1e8
]
 let genCosts = new Array(8).fill(0);

for(let i = 0; i < 8; i++)
    genCosts[i] = Math.floor(genBaseCosts[i] * Math.pow(1.1, genLevels[i]));

document.getElementById("genCost1").innerHTML = `Cost: ${genCosts[0]}`
document.getElementById("genCost2").innerHTML = `Cost: ${genCosts[1]}`

function powerClick(number) {
    watts += number
    document.getElementById("watts").innerHTML = `Watts: ${watts}`
}

function purchaseGenerator(number) {

    for(let i = 0; i < 8; i++)
        genCosts[i] = (genBaseCosts[i] * Math.pow(2, genLevels[i]));

    if(watts >= genCosts[number]) {
        genLevels[number]++;
        watts -= genCosts[number];
        for(let i = 0; i < 8; i++)
            genCosts[i] = (genBaseCosts[i] * Math.pow(2, genLevels[i]));
        switch(number) {
            case 0:
                document.getElementById("genCost1").innerHTML = `Cost: ${genCosts[0]}`
                document.getElementById("gen1").innerHTML = `Manual Generators: ${genLevels[0]}`
                break
            case 1:
                document.getElementById("genCost2").innerHTML = `Cost: ${genCosts[1]}`
                document.getElementById("gen2").innerHTML = `Wood Burners: ${genLevels[1]}`
                break
        }

    }
}

window.setInterval(function() {
    powerClick(genLevels[0])
    powerClick(10 * genLevels[1])

    document.getElementById("watts").innerHTML = `Watts: ${watts}`


}, 1000)

