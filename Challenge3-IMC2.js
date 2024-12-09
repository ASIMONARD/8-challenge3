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

console.log("Donées 1")
if (imcBernard1 > imcMarcel1) {
    console.log('Bernard a un IMC (' + imcBernard1.toFixed(2) + ') plus élevé que Marcel (' + imcMarcel1.toFixed(2) + ')')
} else {
    console.log('Marcel a un IMC (' + imcMarcel1.toFixed(2) + ') plus élevé que Bernard (' + imcBernard1.toFixed(2) + ')')
}
console.log("")

console.log("Donées 2")
if (imcBernard2 > imcMarcel2    ) {
    console.log('Bernard a un IMC (' + imcBernard2.toFixed(2) + ') plus élevé que Marcel (' + imcMarcel2.toFixed(2) + ')')
} else {
    console.log('Marcel a un IMC (' + imcMarcel2.toFixed(2) + ') plus élevé que Bernard (' + imcBernard2.toFixed(2) + ')')
}
