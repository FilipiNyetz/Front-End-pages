function exibirOi(){
    console.log("Olá, mundo!!");
}

function exibirNome(nome){
    console.log(nome)
}
exibirNome("Filipi")

function calcularDobro(num){
    let resposta=num*2;
    console.log(resposta)
}

calcularDobro(5);

function calcularMedia(n1,n2,n3){
    let media=(n1+n2+n3)/3;
    console.log(media);
}

calcularMedia(6,7,8);

function verificarMaior(n1,n2){
    let maior=n1;
    if(n2>maior){
        maior=n2
    }
    console.log(maior);
}

verificarMaior(5,15)

function calcularQuadrado(num){
    let quadrado=num*num;
    console.log(quadrado);
}

calcularQuadrado(2);