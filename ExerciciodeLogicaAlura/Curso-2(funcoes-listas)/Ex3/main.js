function calcularIMC(h,p){
    let IMC=p/(h*h);
    console.log(`O IMC e ${IMC}`);
}
calcularIMC(1.81,75)

function fatorial(num){
    let i=num-1;
    for(i;i>0;i--){
        num*=i;
    }
    console.log(`O fatorial e ${num}`);
}
fatorial(6)

function converterDolar(dolar){
    let reais=dolar*4.80
    console.log(reais)
}
converterDolar(100)

function calcularCirculo(raio){
    let area = (3.14*3.14)*raio
    console.log(area)
}
calcularCirculo(5)

function exibirTabela(num){
    let i=0;
    for(i;i<=10;i++){
        console.log(`A tabuada do ${num} e ${num} ${i}=${num*i}`);
    }
}
exibirTabela(2)
