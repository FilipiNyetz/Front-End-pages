const receitasUL = document.querySelector('.lista-receitas');
const categoriaReceitaSpan = document.querySelector('#categoria-titulo');

let listaReceitasSelecionadas = JSON.parse(localStorage.getItem('receitas-salvas')) || [];

window.onload = function() {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const categoria = searchParams.get("categoria");
    categoriaReceitaSpan.innerHTML=categoria
    filtrar(categoria);
};

function filtrar(categoria) {
    let itensFiltrados = receitas.filter(item => item.categoria === categoria);
    exibirFiltro(itensFiltrados);
}

function exibirFiltro(lista) {
    receitasUL.innerHTML = '';
    lista.forEach(item => {
        const li = document.createElement('li');
        li.className = 'itenslista-receitas';

        // Criar a lista de ingredientes
        let ingredientesHTML = '<ul>';
        item.ingredientes.forEach((ingrediente) => {
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
        
        receitasUL.appendChild(li);
    });
}

function selecionar(id) {
    const receitaQueFoiSelecionada = receitas.find(item => item.id === id);
    if (receitaQueFoiSelecionada) {
        // Verifica se a receita já está na lista antes de adicionar
        const receitaJaSelecionada = listaReceitasSelecionadas.some(item => item.id === id);
        if (!receitaJaSelecionada) {
            listaReceitasSelecionadas.push(receitaQueFoiSelecionada);
            localStorage.setItem('receitas-salvas', JSON.stringify(listaReceitasSelecionadas));
            console.log('Receitas selecionadas:', listaReceitasSelecionadas);
        } else {
            console.log('Receita já está na lista de selecionadas.');
        }
    }
}
function exibirReceitasSelecionadas(){
    const spanListaSelecionada = document.querySelector('.lista-receitas-selecionadas')
    if(listaReceitasSelecionadas==[]){
        spanListaSelecionada.innerHTML='Vazio' 
    }else{
        spanListaSelecionada.innerHTML="Ta cheio"
    }
}
