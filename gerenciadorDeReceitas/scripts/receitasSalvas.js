const receitasSalvasUL = document.querySelector('.lista-receitas-salvas');
const listaComprasUL = document.querySelector('.lista-compras');
let receitasSalvas = JSON.parse(localStorage.getItem('receitas-salvas')) || [];
let itensQuePossui = JSON.parse(localStorage.getItem('itens-que-possui')) || [];
let ingredientesParaComprar = JSON.parse(localStorage.getItem('itens-listaCompra')) || [];

// Função para exibir receitas salvas
function exibirReceitasSalvas() {
    receitasSalvasUL.innerHTML = ''; // Limpa a lista

    receitasSalvas.forEach((receita, receitaIndex) => {
        const li = document.createElement('li');
        li.className = 'itenslista-receitas-salvas';

        // Criar a lista de ingredientes com checkboxes
        let ingredientesHTML = '<ul>';
        receita.ingredientes.forEach((ingrediente, index) => {
            const checked = itensQuePossui.some(item => item.ingrediente === ingrediente.ingrediente) ? 'checked' : '';
            ingredientesHTML += `
                <li>
                    <input type="checkbox" class="check-ingrediente" id="ingrediente-${receitaIndex}-${index}" ${checked}>
                    ${ingrediente.ingrediente}: ${ingrediente.quantidade}
                </li>`;
        });
        ingredientesHTML += '</ul>';

        li.innerHTML = `
            <h1 class="item-nome">${receita.nome}</h1>
            <p class="item-tempo">Tempo de preparo: ${receita.tempo}</p>
            <div class="item-ingredientes">
                <h3>Ingredientes (marque o que já tem):</h3>
                ${ingredientesHTML}
            </div>
            <p class="item-modo-de-preparo">Modo de preparo: ${receita.modoPreparo}</p>
            <button class="bt-add-listaCompras" onclick="adicionarListaCompras(${receitaIndex})">Adicionar à Lista de Compras</button>
        `;

        receitasSalvasUL.appendChild(li);
    });
}

// Função para adicionar itens à lista de compras
function adicionarListaCompras(receitaIndex) {
    const receita = receitasSalvas[receitaIndex];
    
    // Recupera os itens já salvos no localStorage ou cria um array vazio se não houver nada
    ingredientesParaComprar = JSON.parse(localStorage.getItem('itens-listaCompra')) || [];
    
    // Percorre os ingredientes e captura os não selecionados
    receita.ingredientes.forEach((ingrediente, index) => {
        const checkbox = document.querySelector(`#ingrediente-${receitaIndex}-${index}`);
        
        // Adiciona o ingrediente à lista apenas se não estiver marcado e não já estiver na lista
        if (!checkbox.checked && !ingredientesParaComprar.some(item => item.ingrediente === ingrediente.ingrediente)) {
            ingredientesParaComprar.push(ingrediente);
        }

        // Atualiza a lista de itens que o usuário possui
        if (checkbox.checked && !itensQuePossui.some(item => item.ingrediente === ingrediente.ingrediente)) {
            itensQuePossui.push(ingrediente);
        }
    });

    // Atualiza o localStorage com o novo array combinado (antigos + novos)
    localStorage.setItem('itens-listaCompra', JSON.stringify(ingredientesParaComprar));
    localStorage.setItem('itens-que-possui', JSON.stringify(itensQuePossui));

    // Limpa a lista de compras exibida no DOM para evitar duplicações
    listaComprasUL.innerHTML = '';

    // Exibe os ingredientes para comprar na lista de compras
    ingredientesParaComprar.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = `${ingrediente.ingrediente}: ${ingrediente.quantidade}`;
        listaComprasUL.appendChild(li);
    });

    console.log(ingredientesParaComprar);
}

// Chama a função para exibir receitas salvas ao carregar a página
window.onload = function() {
    exibirReceitasSalvas();
};
