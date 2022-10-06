const nota = [10, 8.5, 10, 9 , 7]

let notas = 0

nota.forEach(somaNotas => {
    notas += somaNotas
})

let media = notas/nota.length

console.log(Math.trunc(media))

let teste = nota.includes(10)

console.log(teste)

let numero = 8

nota.push(numero)

//nota.pop()
nota.splice(1,0,5)

let notasDiv = nota.slice(0, nota.length/2)
let notasDiv2 = nota.slice(nota.length/2)

console.log(notasDiv)
console.log(notasDiv2)