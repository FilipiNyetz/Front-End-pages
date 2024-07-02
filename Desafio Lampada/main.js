const ligarBT=document.querySelector('.ligarBT');
const desligarBT=document.querySelector('.desligarBT');
const corpo = document.querySelector('body');

const imagem=document.querySelector('.lampada');

function Ligar() {
    imagem.setAttribute('src', './imagens/Ligada.jpg');
    corpo.style.backgroundColor = "yellow";
    ligarBT.classList.add('active');
    desligarBT.classList.remove('active');
}

function Desligar() {
    imagem.setAttribute('src', './imagens/Desligada.jpg');
    corpo.style.backgroundColor = "black";
    desligarBT.classList.add('active');
    ligarBT.classList.remove('active');
}

function Quebrar(){
    imagem.setAttribute('src','./imagens/MRjsF.jpg')
}