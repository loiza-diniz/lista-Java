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
