const html = document.querySelector('html');

const botoes = document.querySelectorAll('.app__card-button');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');//Variáveis dos modos C, DC ou DL
const longoBt = document.querySelector('.app__card-button--longo');

const startPauseBt = document.querySelector('#start-pause');//Todo o botão começar/pausar
const iniciarOuPausarBt = document.querySelector('#start-pause span');//texto do botão
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon");//imagem do botão

const banner = document.querySelector('.app__image');//variável da imagem de fundo
const titulo = document.querySelector('.app__title');//texto de fundo

const musica = new Audio('./sons/luna-rise-part-one.mp3');
const musicaFocoInput = document.querySelector("#alternar-musica");
const audioPlay = new Audio('./sons/play.wav'); //variáveis para tocar música
const audioPausa = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');
musica.loop = true;

let intervaloId = null;
let tempoDecorridoEmSegundos = 10; //tempo padrão (modo foco)
let tempoRepetido=null;
const tempoNaTela = document.querySelector('#timer');//variável para acessar o campo reservado para o timer

musicaFocoInput.addEventListener('change', function () { //adiciona no input (musicaFoco) o evento change
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});//função que toca música

focoBt.addEventListener('click', funcaoFoco);
curtoBt.addEventListener('click', funcaoCurto);
longoBt.addEventListener('click', funcaoLongo);

function funcaoFoco() {
    tempoDecorridoEmSegundos = 10;
    alterarContexto('foco');//chamada da função alterar contexto e passagem de parâmetro contexto=foco
    focoBt.classList.add('active');//adiciona a classe active na lista de classes do elemento focoBt
};//função para personalizar o modo foco

function funcaoCurto() {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
};//função para personalizar o modo desc CURTO

function funcaoLongo() {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
};//função para personalizar o modo desc LONGO

function alterarContexto(contexto) {//recebe como parâmetro o contexto, que é o modo que será selecionado
    html.setAttribute('data-contexto', contexto);//altera o fundo de acordo com o "contexto"
    banner.setAttribute('src', `${contexto}.png`);//altera a imagem 
    mostrarTempo();//exibe o tempo de cada modo

    botoes.forEach(function (botao) {//forEach percorre todos os elementos da variável BOTOES
        botao.classList.remove('active');//essa é a função que remove a classe 'ACTIVE', tira a borda selecionada do botão
    });

    switch (contexto) {//exibe a mensagem definida variando cada contexto
        case "foco":
            titulo.innerHTML =
                `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
            break;//innerHTML insere uma informação no HTML

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície?<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;

        default:
            break;
    }
}//função que altera as coisas específicas de cada modo 

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo finalizado!');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        resetarTempo();
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    
    mostrarTempo();
}

function resetarTempo(){
    console.log("O tempo tem q voltar")
    tempoDecorridoEmSegundos=10;
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/pause.png`);//altera o atributo src do elemento ICON
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/play_arrow.png`);
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' });//formata o tempo
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();//chama a função no global para ficar sempre exibindo
