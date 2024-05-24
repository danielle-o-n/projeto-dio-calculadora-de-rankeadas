var nomeDoHeroi, vitorias, derrotas, nivel
nomeDoHeroi = "Felipe Aguiar"
vitorias = 10
derrotas = 2
saldo = calcularRankeadas(vitorias, derrotas)
nivel = determinaClassificacao(saldo)

function calcularRankeadas (vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

function determinaClassificacao (saldo) {
    
    if(saldo <= 10){
        return "Ferro"
    }
    else if (saldo >= 11 && saldo <= 20){
        return "Bronze"
    }
    else if (saldo >= 21 && saldo <= 50){
        return "Prata"
    }
    else if (saldo >= 51 && saldo <= 80){
        return "Ouro"
    }
    else if (saldo >= 81 && saldo <= 90){
        return "Diamante"
    }
    else if (saldo >= 91 && saldo <= 100){
        return "Lendário"
    }
    else if (saldo >= 101){
        return "Imortal"
    }
}

console.log(`O Herói ${nomeDoHeroi} tem ${saldo} de saldo e está no nível de ${nivel}`);