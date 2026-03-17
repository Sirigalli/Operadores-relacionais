// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

var readline = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

let num1 = 10;
let num2 = 10;
console.log(`${num1} == ${num2} → ${num1 == num2}`);
console.log(`${num1} === ${num2} → ${num1 === num2}`);

let num3 = 10;
let num4 = "10";
console.log(`${num3} == ${num4} → ${num3 == num4}`);
console.log(`${num3} === ${num4} → ${num3 === num4}`);

let num5 = 0;
let boolean = false;
console.log(`${num5} == ${boolean} → ${num5 == boolean}`);
console.log(`${num5} === ${boolean} → ${num5 === boolean}`);

let nulo = null;
let indefinido = undefined;
console.log(`${nulo} == ${indefinido} → ${nulo == indefinido}`);
console.log(`${nulo} === ${indefinido} → ${nulo === indefinido}`);

let string1 = "JS";
let string2 = "JS";
console.log(`${string1} == ${string2} → ${string1 == string2}`);
console.log(`${string1} === ${string2} → ${string1 === string2}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

let num1 = 5;
let num2 = 5;
console.log(`${num1} != ${num2} → ${num1 != num2}`);
console.log(`${num1} !== ${num2} → ${num1 !== num2}`);

let num3 = 5;
let num4 = "5";
console.log(`${num3} != ${num4} → ${num3 != num4}`);
console.log(`${num3} !== ${num4} → ${num3 !== num4}`);

let num5 = 7;
let num6 = 3;
console.log(`${num5} != ${num6} → ${num5 != num6}`);
console.log(`${num5} !== ${num6} → ${num5 !== num6}`);

let boolean = true;
let num7 = 1;
console.log(`${boolean} != ${num7} → ${boolean != num7}`);
console.log(`${boolean} !== ${num7} → ${boolean !== num7}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

let salarioA = 3500;
let salarioB = 4200;

let maior = salarioA > salarioB;
let menor = salarioA < salarioB;
let maiorIgual = salarioA >= salarioB;
let menorIgual = salarioA <= salarioB;
let igual = salarioA === salarioB;

console.log(`Salario A (R$${salarioA} > Salario B (R$${salarioB}): ${maior})`);
console.log(`Salario A (R$${salarioA} < Salario B (R$${salarioB}): ${menor})`);
console.log(`Salario A (R$${salarioA} >= Salario B (R$${salarioB}): ${maiorIgual})`);
console.log(`Salario A (R$${salarioA} <= Salario B (R$${salarioB}): ${menorIgual})`);
console.log(`Salario A (R$${salarioA} === Salario B (R$${salarioB}): ${igual})`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

let estoque = 0;
let temEstoque = (estoque > 0);
let estoqueZerado = (estoque === 0);
let temperatura = 36.5;
let febre = (temperatura >= 37.6);

console.log(estoque);
console.log(temEstoque);
console.log(estoqueZerado);
console.log(temperatura);
console.log(febre);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

let num1 = readline.questionFloat("Digite o primeiro numero: ");
let num2 = readline.questionFloat("Digite o segundo numero: ");

let maior = (num1 > num2);
let menor = (num1 < num2);
let igual = (num1 === num2);
let maiorIgual = (num1 >= num2);

console.log(maior);
console.log(menor);
console.log(igual);
console.log(maiorIgual);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

let precoProduto = readline.questionFloat("Digite o valor do produto: ");
const precoMaximo = 100;
let estaDentroDoOrcamento = (precoProduto <= precoMaximo);
let esteItemEhCaro = (precoProduto > precoMaximo);

console.log(`Preco informado: R$${precoProduto}`);
console.log(`Dentro do orcamento (≤ R$${precoMaximo})?: ${estaDentroDoOrcamento ? "Sim": "Nao"}`);
console.log(`Item caro (> R$${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

let cadastro = [
    {
        nome: readline.question("Digite o nome da primeira pessoa: "),
        idade: readline.questionInt("Digite a idade da primeira pessoa: ")
    },
    {
        nome: readline.question("Digite o nome da segunda pessoa: "),
        idade: readline.questionInt("Digite a idade da segunda pessoa: ")
    }
];

let maior = (cadastro[0].idade > cadastro[1].idade);
let igual = (cadastro[0].idade === cadastro[1].idade);
let maiorIgual1 = (cadastro[0].idade >= 18);
let maiorIgual2 = (cadastro[1].idade >= 18);

console.log(`Idade do ${cadastro[0].nome} é ${cadastro[0].idade} e ele é ${cadastro[0].idade >= 18 ? "maior de idade" : "menor de idade"}.`);

console.log(`A pessoa mais velha é o ${cadastro[0].idade > cadastro[1].idade ? cadastro[0].nome : cadastro[1].nome}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

let alunos = [
    {
        nome: readline.question("Digite o nome do primeiro aluno: "),
        nota1: readline.questionFloat("Digite a primeira nota do primeiro aluno: "),
        nota2: readline.questionFloat("Digite a segunda nota do primeiro aluno: "),
        nota3:readline.questionFloat("Digite a terceira nota do primeiro aluno: ")
    },
    {
        nome: readline.question("Digite o nome do segundo aluno: "),
        nota1: readline.questionFloat("Digite a primeira nota do segundo aluno: "),
        nota2: readline.questionFloat("Digite a segunda nota do segundo aluno: "),
        nota3:readline.questionFloat("Digite a terceira nota do segundo aluno: ")
    },
];

let mediaAluno1 = (alunos[0].nota1 + alunos[0].nota2 + alunos[0].nota3) / 3;
let mediaAluno2 = (alunos[1].nota1 + alunos[1].nota2 + alunos[1].nota3) / 3;

console.log(`O aluno com maior média é o ${mediaAluno1 > mediaAluno2 ? alunos[0].nome : alunos[1].nome}`);
console.log(`Aluno com a primeira maior nota: ${alunos[0].nota1 > alunos[1].nota1 ? alunos[0].nome : alunos[1].nome}`);
console.log(`Aluno com a segunda maior nota: ${alunos[0].nota2 > alunos[1].nota2 ? alunos[0].nome : alunos[1].nome}`);
console.log(`Aluno com a terceira maior nota: ${alunos[0].nota3 > alunos[1].nota3 ? alunos[0].nome : alunos[1].nome}`);

console.log("_______________________________");