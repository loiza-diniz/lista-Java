// 01
function exibirVariaveis() {
    let nome = "Maria";
    let idade = 25;
    let estudante = true;

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Estudante:", estudante);
}

// 02
function somarDez(valor) {
    let num = Number(valor);
    console.log("Resultado:", num + 10);
}

//03
function nomeCompleto(nome, sobrenome) {
    console.log("Nome completo:", nome + " " + sobrenome);
}

//04
function Media(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    console.log("Média:", media.toFixed(2));
}

//05
function ParOuImpar(numero) {
    console.log(numero % 2 === 0 ? "Par" : "Ímpar");
}

//06
function resolverExpressao() {
    let resultado = (10 + 5) * 2 / 4;
    console.log("Resultado da expressão:", resultado);
}

//07
function compararNumeros(a, b) {
    if (a > b) console.log("O primeiro número é maior");
    else if (b > a) console.log("O segundo número é maior");
    else console.log("Os números são iguais");
}

//08
function demonstrarDiferencas() {
    console.log("Number(\"10\") + 5 =", Number("10") + 5);
    console.log("\"10\" + 5 =", "10" + 5);
}

//09
function verificarMaioridade(idade) {
    console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");
}

//10
function calculadora(a, b, operacao) {
    switch (operacao) {
        case "+": console.log(a + b); break;
        case "-": console.log(a - b); break;
        case "*": console.log(a * b); break;
        case "/": console.log(b !== 0 ? a / b : "Divisão por zero"); break;
        default: console.log("Operação inválida");
    }
}

//11
function verificarSinal(numero) {
    if (numero > 0) console.log("Positivo");
    else if (numero < 0) console.log("Negativo");
    else console.log("Zero");
}

//12
function classificarNota(nota) {
    if (nota < 5) console.log("Reprovado");
    else if (nota < 7) console.log("Recuperação");
    else console.log("Aprovado");
}

//13
function diaDaSemana(numero) {
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    console.log(dias[numero - 1] || "Número inválido");
}

//14
function IMC(peso, altura) {
    const imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau I";
    else if (imc < 40) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
}

//15
function Bissexto(ano) {
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    console.log(bissexto ? "Bissexto" : "ano comum");
}

//16
function classificarIdade(idade) {
    let faixa = "";
    switch (true) {
        case idade <= 12: faixa = "Criança"; break;
        case idade <= 17: faixa = "Adolescente"; break;
        case idade <= 59: faixa = "Adulto"; break;
        default: faixa = "Idoso";
    }
    console.log(faixa);
}

//17
function imprimirUmADez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//18
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//19
function somarAteZero() {
    let soma = 0;
    let numero;
    do {
        numero = Number(prompt("Digite um número (0 para parar): "));
        soma += numero;
    } while (numero !== 0);
    console.log("Resultado:", soma);
}

//20
function mediaAteNegativo() {
    let soma = 0, count = 0;
    let numero;
    do {
        numero = Number(prompt("Digite um número (negativo para parar): "));
        if (numero >= 0) {
            soma += numero;
            count++;
        }
    } while (numero >= 0);
    const media = soma / count;
    console.log("Média:", media);
}

//21
function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    console.log(`Fatorial de ${n} é ${resultado}`);
}

//22
function contagemRegressiva() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

//23
function paresUmAVinte() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

//24
function somarParesImpares(numeros) {
    let pares = 0, impares = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) pares += numero;
        else impares += numero;
    }
    console.log("Soma dos pares:", pares);
    console.log("Soma dos ímpares:", impares);
}

//25
function fibonacci(n) {
    let a = 1, b = 1;
    console.log(a);
    if (n > 1) console.log(b);
    for (let i = 3; i <= n; i++) {
        let prox = a + b;
        console.log(prox);
        a = b;
        b = prox;
    }
}