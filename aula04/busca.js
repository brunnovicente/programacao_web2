function linear(v, vetor){
    for(let i=0;i<vetor.length;i++){
        if(v === vetor[i]){
            return i
        }
    }
    return null
}

function binaria(v, vetor) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (vetor[meio] === v) {
            return meio;
        }
        if (vetor[meio] < v) {
            inicio = meio + 1;
        }
        else {
            fim = meio - 1;
        }
    }
    return null;
}

export default{linear, binaria}