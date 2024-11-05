const resultadoBusca=document.querySelector('.resultado-busca');
resultadoBusca.innerHTML=` <p id="no-results">Nenhuma receita encontrada. Faça uma busca para ver os resultados.</p>`
function buscarNome() {
    const inputBusca = document.querySelector("#search");
    const palavraBuscada = inputBusca.value.toLowerCase();

    // Limpa os resultados da busca antes de exibir novos resultados
    resultadoBusca.innerHTML = '';

    // Chama a função para exibir a receita buscada
    exibirReceitaBuscada(palavraBuscada);
}

function exibirReceitaBuscada(palavraBuscada) {
    // Filtra as receitas que contêm a palavra buscada (case insensitive)
    const receitasBuscadas = receitas.filter(item => item.nome.toLowerCase().includes(palavraBuscada));
    console.log(receitasBuscadas)
    if(receitasBuscadas.length==0){
        resultadoBusca.innerHTML=` <p id="no-results">Nenhuma receita encontrada com esse nome.</p>`
    }else{
        receitasBuscadas.forEach(item => {
            const li = document.createElement('li');
            li.className = 'itenslista-receitas';
    
            // Criar a lista de ingredientes
            let ingredientesHTML = '<ul>';
            item.ingredientes.forEach(ingrediente => {
                ingredientesHTML += `
                    <li>
                        ${ingrediente.ingrediente}: ${ingrediente.quantidade}
                    </li>`;
            });
            ingredientesHTML += '</ul>';
    
            // Exibir a dificuldade como estrelas
            let dificuldadeHTML = 'Dificuldade: ' + '★'.repeat(item.dificuldade[0]);
    
            // Inserir o HTML completo
            li.innerHTML = `
                <div class="descricao-receita">
                    <h1 class="item-nome">${item.nome}</h1>
                    <p class="item-tempo">Tempo de preparo: ${item.tempo}</p>
                    <div class="item-ingredientes">
                        <h3>Ingredientes:</h3>
                        ${ingredientesHTML}
                    </div>
                    <p class="item-dificuldade">${dificuldadeHTML}</p>
                </div>
                <div class="bt-seleciona-receita">
                    <button onclick="selecionar(${item.id})">Selecionar Receita</button>
                </div>
            `;
    
            resultadoBusca.appendChild(li);
        });
    }
    
}