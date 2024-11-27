import cesar from "./cesar.js"

var mensagem = "bruno"
var cifrada = cesar.criptografia(mensagem, 4, cesar.cifraLetra)
var decifrada = cesar.criptografia(cifrada, 4, cesar.decifraLetra)

console.log('ORIGINAL: '+mensagem)
console.log('CIFRADA: '+cifrada)
console.log('DECIFRADA: '+decifrada)