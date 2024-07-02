const titulo=document.querySelector('h1');
titulo.innerHTML="Hora do desafio"


function exibirConsole(){
    console.log("O botao foi clicado")
}
function exibirAlerta(){
    alert("Eu amo JS")
}

function perguntarCidade(){
    let cidade=prompt("Qual cidade voce nasceu ?");
    alert(`voce nasceu em ${cidade}`)
}

function somar(){
    let numA = prompt("Digite o 1º número");
    let numB = prompt("Digite o 2º número");

    const resultado = parseInt(numA) + parseInt(numB);

    alert(`O resultado é ${resultado}`);
}
