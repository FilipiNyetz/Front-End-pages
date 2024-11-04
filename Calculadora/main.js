const numeros = document.querySelectorAll('.bt-num');
const telaCalculadora = document.querySelector('.tela');
const escolheuOperador = document.querySelectorAll('.bt-op');
const botaoResultado = document.querySelector('.bt-resposta');
const botaoVirgula = document.querySelector('.bt-virgula');

let numeroAtual = '';
let primeiroNum = null;
let segundoNum = null;
let operadorAtual = null;
let resposta = 0;
let virgulaUsada=false;
telaCalculadora.innerHTML=resposta;
let resultadoEmTela=false

function passarNum(numD) {
    numeroAtual += numD;  // Concatena os números clicados para formar o número completo
    telaCalculadora.innerHTML = numeroAtual;
}

function apagarValores(){
    if(resultadoEmTela){
        numeroAtual = '';
        primeiroNum = null;
        segundoNum = null;
        operadorAtual = null;
        resposta = 0;
        virgulaUsada=false;
        telaCalculadora.innerHTML=resposta;
        resultadoEmTela=false
    }
    else{
        numeroAtual=''
        primeiroNum = null;
        operadorAtual = null;
        resposta = 0;
        telaCalculadora.innerHTML=resposta;
    }
}

function adicionarVirgula() {
    // Adiciona a vírgula apenas se ainda não tiver sido usada no número atual
    if (!virgulaUsada) {
        if (numeroAtual === '' && resposta !== null) {
            // Se o número atual estiver vazio e há uma resposta anterior, usa o valor da resposta
            numeroAtual = '0,';  
            primeiroNum = null; // Limpa o primeiro número para começar uma nova operação
            resposta = null; // Reseta a resposta
        } else if (numeroAtual === '') {
            numeroAtual = '0,';  
        } else {
            numeroAtual += ',';  // Adiciona a vírgula ao número atual
        }
        telaCalculadora.innerHTML = numeroAtual;
        virgulaUsada = true;  // Marca que a vírgula já foi usada
    }
}





function salvarOperador(operador) {
    if (primeiroNum === null) {
        primeiroNum = parseFloat(numeroAtual.replace(',', '.'));  // Armazena o primeiro número, convertendo vírgula em ponto
        operadorAtual = operador;
        numeroAtual = '';  // Reseta o valor para permitir a inserção do segundo número
        virgulaUsada = false;  // Reseta o uso da vírgula para o segundo número
    } else if (operadorAtual === null) {
        operadorAtual = operador;
    } else {
        // Se um novo operador é clicado, e já há um resultado
        exibirResposta();
        operadorAtual = operador;
        numeroAtual = '';  // Reseta o valor para permitir a inserção do próximo número
    }
}

function exibirResposta() {
    if (primeiroNum !== null && operadorAtual !== null && numeroAtual !== '') {
        segundoNum = parseFloat(numeroAtual.replace(',', '.'));  // Armazena o segundo número
        switch (operadorAtual) {
            case 0:
                resposta = soma(primeiroNum, segundoNum);
                break;
            case 1:
                resposta = subtracao(primeiroNum, segundoNum);
                break;
            case 2:
                resposta = segundoNum == 0 ? "Erro" : divisao(primeiroNum, segundoNum);
                break;
            case 3:
                resposta = multiplicacao(primeiroNum, segundoNum);
                break;
            default:
                alert("Operação inválida");
                return;
        }
        if(resposta%1!=0){
            telaCalculadora.innerHTML = resposta.toFixed(2).toString().replace('.', ','); 
            resultadoEmTela=true
        }else{
            telaCalculadora.innerHTML = resposta.toString().replace('.', ',');
            resultadoEmTela=true
        }
         // Exibe o resultado com vírgula

        primeiroNum = resposta;
        numeroAtual = '';  // Limpa para o próximo número
        operadorAtual = null;
        virgulaUsada = resposta.toString().includes(',');
    }
}

function inverterSinal() {
    if (numeroAtual !== '') {
        numeroAtual = (parseFloat(numeroAtual.replace(',', '.')) * -1).toString().replace('.', ',');
        telaCalculadora.innerHTML = numeroAtual;
    }else if(resultadoEmTela){
        primeiroNum = (parseFloat(primeiroNum) * -1);
        telaCalculadora.innerHTML = primeiroNum;
    }
}

function soma(a, b) {
    
    return a + b;
}

function subtracao(a, b) {
    
    return a - b;
}

function divisao(a, b) {
    
    return a / b;
}

function multiplicacao(a, b) {
    
    return a * b;
}
function porcentagem() {

    if (numeroAtual !== '') {
        // Calcula a porcentagem usando numeroAtual
        let valorParaPorcentagem = parseFloat(numeroAtual.replace(',', '.'));
        resposta = valorParaPorcentagem / 100;
    } else if (primeiroNum !== null) {
        // Se numeroAtual estiver vazio, usa primeiroNum (resultado da operação anterior)
        resposta = primeiroNum / 100;
    } else {
        // Se nenhum número está disponível, não faz nada
        return;
    }

    telaCalculadora.innerHTML = resposta.toString().replace('.', ',');
    numeroAtual = '';  // Resetar numeroAtual para aceitar nova entrada numérica
    primeiroNum = resposta;  // Armazenar a resposta como primeiroNum para a próxima operação
    resultadoEmTela = true;
    operadorAtual = null;
    virgulaUsada = resposta.toString().includes(',');
}




