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