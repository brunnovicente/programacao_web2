import {somaVetor, dobraVetor} from './vetores.js'

var X = [10, 2, 8, 25, 15]

//UTILIZANDO FUNÇÃO PRONTA
var resultado = somaVetor(X, dobraVetor)

//CRIANDO A FUNÇÃO ANÔNIMA NO MOMENTO DA PASSAGEM POR PARÂMETRO
var resultado2 = somaVetor(X, function(a){
    var D = Array(a.length)
    for(let i=0;i<a.length;i++){
        D[i] = a[i] *2
    }
    return D
})

console.log(resultado)
console.log(resultado2)