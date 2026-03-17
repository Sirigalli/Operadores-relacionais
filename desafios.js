// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

var readline = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:

let pessoas = [
    {
        nome: readline.question("Digite o nome da primeira pessoa: "),
        idade: readline.questionInt("Digite a idade da primeira pessoa: ")
    },
    {
        nome: readline.question("Digite o nome da segunda pessoa: "),
        idade: readline.questionInt("Digite a idade da segunda pessoa: ")
    },
    {
        nome: readline.question("Digite o nome da terceira pessoa: "),
        idade: readline.questionInt("Digite a idade da terceira pessoa: ")
    }
];

console.table(pessoas);

let maisVelha = (pessoas[0].idade > pessoas[1].idade);
let maisNova = (pessoas[0].idade < pessoas[2].idade);
let idadeIgual = (pessoas[0].idade === pessoas[2].idade);
let pessoa1 = (pessoas[0].idade >= 18);
let pessoa2 = (pessoas[1].idade >= 18);
let pessoa3 = (pessoas[2].idade >= 18);

console.log(`O ${pessoas[0].nome} é mais velho que o ${pessoas[1].nome}?: ${maisVelha ? "Sim" : "Não"}`);
console.log(`O ${pessoas[1].nome} é mais novo que a ${pessoas[2].nome}?: ${maisNova ? "Sim" : "Não"}`);
console.log(`O ${pessoas[0].nome} tem a mesma idade que o ${pessoas[2].nome}?: ${idadeIgual ? "Sim" : "Não"}`);
console.log(`O ${pessoas[0].nome} é maior de idade?: ${pessoa1 ? "Sim" : "Não"}`);
console.log(`O ${pessoas[1].nome} é maior de idade?: ${pessoa2 ? "Sim" : "Não"}`);
console.log(`O ${pessoas[2].nome} é maior de idade?: ${pessoa3 ? "Sim" : "Não"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:

let nome1 = readline.question("Digite o nome do primeiro produto: ");
let preco1 = readline.questionFloat("Digite o preco do primeiro produto: ");
let nome2 = readline.question("Digite o nome do segundo produto: ");
let preco2 = readline.questionFloat("Digite o preco do segundo produto: ");

let produto1 = {
    nome: nome1,
    preco: preco1
};
let produto2 = {
    nome: nome2,
    preco: preco2
};

console.table(produto1);
console.table(produto2);

let diferenca = Math.abs(produto1 - produto2);

let maior = (preco1 > preco2);
let mesmoPreco = (preco1 === preco2);
let maisBarato = (preco1 < preco2? nome1 : nome2);
let maisCaro = (preco1 > preco2? nome1 : nome2);
let menorQue50 = (maisBarato < 50);
let maiorQue200 = (maisCaro > 200);

console.log(`O ${nome1} é mais caro que o ${nome2}?: ${maior ? "sim" : "nao"}`);
console.log(`O ${nome1} tem o mesmo preco que o ${nome2}?: ${mesmoPreco ? "sim" : "nao"}`);
console.log(`O ${maisBarato} custa menos de R$50?: ${menorQue50 ? "sim" : "nao"}`);
console.log(`O ${maisCaro} custa mais que R$200?: ${maiorQue200 ? "sim" : "nao"}`);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:

let nome1 = readline.question("Digite o nome do aluno: ");
let nota1 = readline.questionFloat("Digite a primeira nota: "); 
let nota2 = readline.questionFloat("Digite a segunda nota: "); 
let nota3 = readline.questionFloat("Digite a terceira nota: "); 
let nota4 = readline.questionFloat("Digite a quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

let boletim = {
    nome: nome1,
    notas: [
        nota1,
        nota2,
        nota3,
        nota4
    ],
    media: media
};

console.table(boletim);

let aprovado = (media >= 6);
let recuperacao = (media >= 4 && media < 6);
let maiorQue9 = boletim.notas.some(nota => nota > 9);
let mais3 = (Math.max(boletim.notas) - Math.min(boletim.notas));
let mais32 = (mais3 => 3 ? "Sim" : "Nao");

console.log(`O ${boletim.nome} esta aprovado?: ${aprovado ? "sim" : "nao"}`);
console.log(`O ${boletim.nome} precisa de recuperacao?: ${recuperacao ? "Sim" : "Nao"}`);
console.log(`Alguma nota é maior que 9?: ${maiorQue9 ? "Sim" : "Nao"}`);
console.log(`A maior nota é maior que a menor nota em mais de 3 pontos?: ${mais32 ? "Sim" : "Nao"}`);




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:

let produto1 = {
    nome: readline.question("Digite o nome do primeiro produto: "),
    preco: readline.questionFloat("Digite o valor do primeiro produto: "),
    quantidadeEstoque: readline.questionInt("Digite a quantidade de estoque do primeiro produto: ")
};
let produto2 = {
    nome: readline.question("Digite o nome do segundo produto: "),
    preco: readline.questionFloat("Digite o valor do segundo produto: "),
    quantidadeEstoque: readline.questionInt("Digite a quantidade de estoque do segundo produto: ")
};
let produto3 = {
    nome: readline.question("Digite o nome do terceiro produto: "),
    preco: readline.questionFloat("Digite o valor do terceiro produto: "),
    quantidadeEstoque: readline.questionInt("Digite a quantidade de estoque do terceiro produto: ")
};

let estoque = [produto1, produto2, produto3];

console.table(estoque);

let estoqueDisponivel1 = (produto1.quantidadeEstoque > 0);
let estoqueBaixo1 = (produto1.quantidadeEstoque <= 5);
let produtoCaro1 = (produto1.preco > 100);
let precoBaixo1 = (produto1.preco < 50);

let estoqueDisponivel2 = (produto2.quantidadeEstoque > 0);
let estoqueBaixo2 = (produto2.quantidadeEstoque <= 5);
let produtoCaro2 = (produto2.preco > 100);
let precoBaixo2 = (produto2.preco < 50);

let estoqueDisponivel3 = (produto3.quantidadeEstoque > 0);
let estoqueBaixo3 = (produto3.quantidadeEstoque <= 5);
let produtoCaro3 = (produto3.preco > 100);
let precoBaixo3 = (produto3.preco < 50);


console.log(`O ${produto1.nome} tem estoque disponivel?: ${estoqueDisponivel1 ? "Sim" : "Nao"}`);
console.log(`O ${produto1.nome} esta com estoque baixo?: ${estoqueBaixo1 ? "Sim" : "Nao"}`);
console.log(`O ${produto1.nome} é considerado caro?: ${produtoCaro1 ? "Sim" : "Nao"}`);
console.log(`O ${produto1.nome} tem o preco abaixo de R$50?: ${precoBaixo1 ? "Sim" : "Nao"}`);

console.log(`O ${produto2.nome} tem estoque disponivel?: ${estoqueDisponivel2 ? "Sim" : "Nao"}`);
console.log(`O ${produto2.nome} esta com estoque baixo?: ${estoqueBaixo2 ? "Sim" : "Nao"}`);
console.log(`O ${produto2.nome} é considerado caro?: ${produtoCaro2 ? "Sim" : "Nao"}`);
console.log(`O ${produto2.nome} tem o preco abaixo de R$50?: ${precoBaixo2 ? "Sim" : "Nao"}`);

console.log(`O ${produto3.nome} tem estoque disponivel?: ${estoqueDisponivel3 ? "Sim" : "Nao"}`);
console.log(`O ${produto3.nome} esta com estoque baixo?: ${estoqueBaixo3 ? "Sim" : "Nao"}`);
console.log(`O ${produto3.nome} é considerado caro?: ${produtoCaro3 ? "Sim" : "Nao"}`);
console.log(`O ${produto3.nome} tem o preco abaixo de R$50?: ${precoBaixo3 ? "Sim" : "Nao"}`);

console.log("_______________________________");