import busca from './busca.js'
import { selectionSort, bubbleSort} from './ordenacao.js'

var vetor = [45, 23, 78, 12, 90, 34, 56, 67, 89, 10]

vetor = selectionSort(vetor)

console.log(vetor)