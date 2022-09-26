const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

let posicao = notas1.indexOf(7.5)

let div1 = notas1.slice(0,notas1.length/2)
let div2 = notas1.slice(notas1.length/2)
let conf = notas1.includes(6.5)

console.log(div1)
console.log(div2)
console.log(conf)
console.log(media)

