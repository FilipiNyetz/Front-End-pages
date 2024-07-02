const elementoLivros=document.getElementById('livros');//Elemento no DOM com o ID livro 
function exibirLivros(listaDeLivros){
    elementoLivros.innerHTML=''
    listaDeLivros.forEach(livro =>{//Usado para percorrer cada elemento e realizar uma instrução para cada elemento
        let disponibilidade=verificarDisponibilidade(livro)
        elementoLivros.innerHTML+=`
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

function verificarDisponibilidade(livro){
    if(livro.quantidade>0){
        return 'livro.imagens'
    }else{
        return 'livro.imagens indisponivel'
    }
}