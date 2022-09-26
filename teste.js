let nomes = ["André", "João", "Juliana", "Maria", "Julia"]
let notas = [7, 8, 9 ,6, 5]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

for(let i = 0; i < nomes.length; i++){
    //nomes[i]
    //notas[i]
    console.log(nomes[i], notas[i])
}

//console.log(nomesAtualizados)