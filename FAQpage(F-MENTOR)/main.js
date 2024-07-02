function exibir(button){
    const botaoClidado = button.className
    // Pego qual botao eu cliquei, no nosso caso precisamos saber em qual botao eu cliquei pois é a partir dele que saberemos qual elemento precisamos mostrar ou esconder.
    // Precisei tbm adicionar a class="text-1", class="text-2"... em cada button, nao tem como fugir. 
    // estou recebendo button por parametro la do html, porem lá eu nao mando text-1, text-2 etc.. mando apenas o this que é referenciando o próprio botao em questao.
    const icon = button.children[0]
    //children pega a classe filha do botão ("a q esta dentro do botao") <butto ><img ></button> ou seja pega IMG, então recebe os valores de ID e src
    const elemento = document.getElementsByClassName(botaoClidado)
    if(elemento[1].classList.contains('invisivel')) {
        icon.src = 'icon-minus.svg'
        //troca o valor de src da tag para o icon minus
        elemento[1].classList.remove('invisivel')
        //remove a classe invisivel, classList[1] mostra o indice da classe que esta dentro do class de elemento
    } else {
        icon.src = 'icon-plus.svg'
        elemento[1].classList.add('invisivel')
    }
}
