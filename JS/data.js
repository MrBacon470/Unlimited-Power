
function Save() {
    let data = {
        watts: watts,
        genLevels: genLevels,
    }
    localStorage.setItem("data",JSON.stringify(data))
}

function Load() {

    let saveData = localStorage.getItem("data")

    if(!saveData) {
        return
    }
    else {
        saveData = JSON.parse(saveData)
    }

    if(typeof saveData.watts !== "undefined"){
        watts = saveData.watts
    }
    for(let i = 0; i < 8; i++) {
        if(typeof saveData.genLevels !== "undefined") genLevels[i] = saveData.genLevels[i]
    }

}
console.log(localStorage.getItem("data"))


let watts = 0
let genLevels = new Array(8).fill(0)
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


let generatorInfo = [
    {genID: 'gen1', costID: 'genCost1', name:'Manual Generators'},
    {genID: 'gen2', costID: 'genCost2', name:'Wood Burners'},
    {genID: 'gen3', costID: 'genCost3', name:'Coal Generators'},
    {genID: 'gen4', costID: 'genCost4', name:'Oil Generators'},
    {genID: 'gen5', costID: 'genCost5', name:'Natural Gas Generators'},
    {genID: 'gen6', costID: 'genCost6', name:'Steam Turbines'},
    {genID: 'gen7', costID: 'genCost7', name:'Nuclear Reactor'},
    {genID: 'gen8', costID: 'genCost8', name:'Fusion Reactor'},
]

let genCosts = new Array(8).fill(0)

Load()
