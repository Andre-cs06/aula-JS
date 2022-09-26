const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7 ,9 ,6]

let alunosEMedias = [alunos, mediasDosAlunos]

const exibirNotas = (nomeDoAluno) => {
    if(alunosEMedias[0].includes(nomeDoAluno)){
        let indice = alunosEMedias[0].indexOf(nomeDoAluno)
        return alunosEMedias[0][indice] + " a sua media é " + alunosEMedias[1][indice]
    }else{
        "Aluno não encontrado"
    }
}

console.log(exibirNotas("João"))