const arrayNums = [1, 2, 3, 4]

// for(i = 0; i < arrayNums.length; i++){
//     console.log(arrayNums[i] * 10)
// }

function multiplicaNumeros(num){
    return num *10
}

//const arraySomada = arrayNums.map(num => num * 10)
const arraySomada = arrayNums.map(multiplicaNumeros)

console.log(arraySomada)