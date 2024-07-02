let elementoChutado=document.getElementById('chute');

window.SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition()
recognition.lang="pt-BR";
recognition.start()

recognition.addEventListener('result',onSpeak);

function onSpeak(e){
    chute=e.results[0][0].transcript;
    console.log(chute);
    exibeChuteNaTela(chute);
    verificarValor(chute)
}

function exibeChuteNaTela(chute){
    elementoChutado.innerHTML=`
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}
recognition.addEventListener('end',()=>recognition.start())
