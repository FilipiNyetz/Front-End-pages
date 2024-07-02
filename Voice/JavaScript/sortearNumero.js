const menorValor=0;
const maiorValor=99;
const numeroSecreto=gerarNumero()


function gerarNumero(){
    return parseInt(Math.random()*maiorValor+1);
}
console.log(`numero secreto: ${numeroSecreto}`);

const elementoMenor=document.querySelector('#menor-valor');
elementoMenor.innerHTML=menorValor;
const elementoMaior=document.querySelector('#maior-valor');
elementoMaior.innerHTML=maiorValor;