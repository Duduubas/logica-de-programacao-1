// SEÇÃO DE COMENTÁRIOS DURANTE AS AULAS
// OPERADORES
// NÃO É IGUAL: !=
// IGUAL: ==
// MAIOR: >
// Para atribuir mais 1: ++
// AND = && - Avaliar se duas condições são verdadeiras
// OR = || - Verificar a existência de duas condições verdadeiras


alert('Boas vindas ao jogo do número secreto!');

let numeroMaximo = 100;

//Definição de variaveis = let
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console.log(numeroSecreto);

let chute
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`)

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        // alert('Ah, você errou! 😔 O número secreto é ${numeroSecreto}.' + numeroSecreto)
    }
}

// Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} 🤠`)

//if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas 🤠`)
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa 🤠`)
//}