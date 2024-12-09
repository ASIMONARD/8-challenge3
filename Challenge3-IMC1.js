let poidsBernard1 = 78
let tailleBernard1 = 1.69
let poidsBernard2 = 95
let tailleBernard2 = 1.88

let poidsMarcel1 = 92
let tailleMarcel = 1.95
let poidsMarcel2 = 85
let tailleMarcel2 = 1.76

let imcBernard1 = poidsBernard1 / (tailleBernard2^2)
let imcMarcel1 = poidsMarcel1 / (tailleMarcel2^2)
let imcBernard2 = poidsBernard2 / (tailleBernard2^2)
let imcMarcel2 = poidsMarcel2 / (tailleMarcel2^2)

console.log('données 1')
console.log('IMC Bernard : ' + imcBernard1.toFixed(2))
console.log('IMC Marcel : ' + imcMarcel1.toFixed(2))
console.log("")
console.log('données 2')
console.log('IMC Bernard : ' + imcBernard2.toFixed(2))
console.log('IMC Marcel : ' + imcMarcel2.toFixed(2))
console.log("")

let bernardHigherIMC = imcBernard1 > imcMarcel1
console.log('Donées 1 : ' + bernardHigherIMC)

bernardHigherIMC = imcBernard2 > imcMarcel2
console.log('Donées 2 : ' + bernardHigherIMC)

