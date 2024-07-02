const vermelhoBT=document.querySelector('.btn-vermelho');
const amareloBT =document.querySelector('.btn-amarelo');
const verdeBT=document.querySelector('.btn-verde');
const automaticoBT=document.querySelector('.btn-auto')

const semaforo=document.querySelector('.semaforo');

let intervaloID=null;

function parar(){
    semaforo.setAttribute('src','./imagens/vermelho.jpg');
    stopAutomatic()
}

function alertar(){
    semaforo.setAttribute('src','./imagens/amarelo.jpg');
    stopAutomatic()
}

function andar(){
    semaforo.setAttribute('src','./imagens/vai.jpg');
    stopAutomatic()
}

const changeColor =()=>{
    const cores = ['vermelho','amarelo','verde']
    let i = 0;
    return () => {
        console.log(cores[i]); // Exibe o elemento atual do array
        
        if (cores[i]=='vermelho'){
            semaforo.setAttribute('src','./imagens/vermelho.jpg');
        }else if(cores[i]=='amarelo'){
            semaforo.setAttribute('src','./imagens/amarelo.jpg'); 
        }else{
            semaforo.setAttribute('src','./imagens/vai.jpg');
        }
        i = (i + 1) % cores.length; // Atualiza o índice para o próximo elemento
    };
    
    
}

const stopAutomatic =()=>{
    clearInterval(intervaloID)
}
function automatico(){
    const mostrarCor = changeColor();
    intervaloID=setInterval(mostrarCor, 1000);
}

