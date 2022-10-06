const numeros = [43, 50, 65, 12]

//reduce com arrow
//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

//console.log(soma)


//reduce com function
// const soma =numeros.reduce(function (acum, ataul){
//     return ataul + acum
// },0)

// console.log(soma)

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma)