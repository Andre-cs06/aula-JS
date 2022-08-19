function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(3, 5));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("André", 21));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3 ,3)));

