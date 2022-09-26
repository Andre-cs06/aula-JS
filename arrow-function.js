function apresentar(nome) {
    return`meu nome é ${nome}`;
}

//Arrow function
// const apresentarArrow = nome => `meu nome é ${nome}`;
// const soma = (num1, num2) => num1 + num2;

// console.log(apresentar("André"));
// console.log(soma(10, 54));

//Arrow funcion com mais de uma linha 

const somaNumeros = (num1, num2) => {
    if (num1 >10 || num2 > 10) {
        return"somente números menores que nove";
    }else{
        return num1 + num2
    }
}

console.log(somaNumeros(5, 7));