function selectionSort(vetor) {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        let menor = i; // Assume que o primeiro elemento é o menor

        // Encontra o menor elemento no restante do array
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j; // Atualiza o índice do menor elemento
            }
        }

        // Troca os elementos, se necessário
        let temp = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = temp;
        
    }

    return vetor;
}

function bubbleSort(vetor){
    for(let i = vetor.length - 1 ; i > 0 ;i--){
        for(let j = 0;j < i;j++){
            if(vetor[j] > vetor[j+1]){
                let temp = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = temp
            }
        }
    }
    return vetor
}

export {selectionSort, bubbleSort}