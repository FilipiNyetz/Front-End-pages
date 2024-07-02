function tocaSom(idElementoAudio){
    console.log(idElementoAudio)
    document.querySelector(idElementoAudio).play()
}

const listaTeclas = document.querySelectorAll('.tecla');

let i=0;

while (i<listaTeclas.length){
    const tecla=listaTeclas[i];
    //classList mostra as classes de um mesmo elemento exemplo "tecla tecla_pom" classLista[0]=tecla classList[1]=tecla_pom
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;
    console.log(instrumento);
    console.log(idAudio)

    tecla.onclick=function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        

        if(evento.code ==='Enter' || evento.code==='Space'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    console.log(i);
    i++;
}
