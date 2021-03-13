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
]

let genCosts = new Array(8).fill(0)
