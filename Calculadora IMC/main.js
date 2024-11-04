
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const respota=document.getElementById('resposta');

function calcular(){
    const altura = parseFloat(alturaInput.value) / 100; // Convertendo altura para metros
    const peso = parseFloat(pesoInput.value);
    
    const IMC = (peso / (altura * altura)).toFixed(2);
    console.log(IMC);

    respota.innerHTML=`IMC: ${IMC}`;
}


// const botaoClicado=document.getElementById('botao');
// botaoClicado.addEventListener('click',function(){
//     const peso = parseFloat(document.getElementById('peso').value);
//     const altura = parseFloat(document.getElementById('altura').value);

//     const resultadoIMC = calcular(peso, altura);
//     console.log(resultadoIMC);
// })
// function calcular(peso,altura) {
    

//    // Verifica se os valores inseridos são números válidos
//    if (isNaN(peso) || isNaN(altura)) {
//     console.log('Por favor, insira valores numéricos válidos.');
//     return; // Encerra a função se os valores não forem numéricos
// }

//     altura = altura / 100; // Convertendo altura para metros

//     const IMC = peso / (altura * altura);
//     return IMC; // Retorna o valor do IMC
// }

// Esta variável irá armazenar o IMC retornado pela função calcular



// function calcular(peso, altura) {
//     let IMC=peso / (altura * altura);
//     console.log(IMC)
// }

// let pesoInput = document.getElementById('peso').value; // Assuming peso is an input field
// let alturaInput = document.getElementById('altura').value; // Assuming altura is an input field

// // Convert the values to numbers
// let peso = parseFloat(pesoInput);
// let altura = parseFloat(alturaInput);

// let IMC = calcular(peso, altura);
// console.log(IMC);
