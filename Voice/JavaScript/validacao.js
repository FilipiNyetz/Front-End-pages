function verificarValor(chute){
    const numero =parseInt(chute);
    if (chute.toLowerCase() === 'game over') {
        document.body.innerHTML = `
            <h2> GAME OVER!</h2>
            <h3> O número secreto era: ${numeroSecreto}</h3>
            <button id="jogar-novamente">Jogar novamente</button>
        `;
        return;
    }
    if(chuteForInvalido(numero)){
        console.log("CHUTE INVALIDO");
        elementoChutado.innerHTML+=`<div> valor invalido </div>`
    }
    if(limiteValor(numero)){
        console.log('numero fora do limite')
        elementoChutado.innerHTML+=`<div> valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
    }

    if(acertou(numero)){
        document.body.innerHTML=`<h2> VOCE ACERTOU!</h2>
                                <h3> O numero secreto era: ${numeroSecreto}</h3>
                                <button id="jogar-novamente">jogar novamente</button>`
    }else if(numero>numeroSecreto){
        elementoChutado.innerHTML+=`<div>O número secreto é menor <i class="fa-solid fa-dow-long"></i></div>`
    }else{
        elementoChutado.innerHTML+=`<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function limiteValor(numero) {
    return numero>maiorValor||numero<menorValor;
}
function acertou(numero){
    return numero==numeroSecreto;
}

document.body.addEventListener('click',e =>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})