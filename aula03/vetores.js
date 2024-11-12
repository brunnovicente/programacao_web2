function dobraVetor (X){
    var D = Array(X.length)
    for(let i=0;i<X.length;i++){
        D[i] = X[i] *2
    }
    return D
}

function somaVetor(X, dobra){
    let D = dobra(X)
    var soma = Array(X.length)
    for(let i=0;i<X.length;i++){
        soma[i] = X[i] + D[i]
    }
    return soma
}

export {dobraVetor, somaVetor}