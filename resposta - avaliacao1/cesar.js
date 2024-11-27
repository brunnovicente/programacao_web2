function criptografia(mensagem, chave, converter){
    let cifrada = ''
    for(let i=0;i < mensagem.length;i++){
        let cifra = converter(mensagem[i], chave)
        cifrada = cifrada + cifra
    }
    return cifrada
}

function cifraLetra(letra, chave){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0;i<alfabeto.length;i++){
        if(alfabeto[i] === letra){
            let pulo = i + chave
            if(pulo > alfabeto.length){
                pulo = pulo - alfabeto.length
            }
            return alfabeto[pulo]
        }
    }
}

function decifraLetra(letra, chave){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0;i<alfabeto.length;i++){
        if(alfabeto[i] === letra){
            let pulo = i - chave
            if(pulo < 0){
                pulo = alfabeto.length + pulo
            }
            return alfabeto[pulo]
        }
    }
}

export default {criptografia, cifraLetra, decifraLetra}