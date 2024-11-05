document.addEventListener('DOMContentLoaded', () => {
    const listaComprasUL = document.querySelector('#lista-compras');
    const itensQuePossuiUL = document.querySelector('#itens-que-possui');
    let ingredientesParaComprar = JSON.parse(localStorage.getItem('itens-listaCompra')) || [];
    let itensQuePossui = JSON.parse(localStorage.getItem('itens-que-possui')) || [];

    function atualizarLista() {
        listaComprasUL.innerHTML = '';
        itensQuePossuiUL.innerHTML = '';

        ingredientesParaComprar.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="item-${index}" ${item.comprado ? 'checked' : ''} />
                ${item.ingrediente}: ${item.quantidade}
            `;
            listaComprasUL.appendChild(li);

            // Adiciona um evento para o checkbox
            li.querySelector('input[type="checkbox"]').addEventListener('change', () => {
                marcarComoComprado(index);
            });
        });

        itensQuePossui.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.ingrediente}: ${item.quantidade}`;
            itensQuePossuiUL.appendChild(li);
        });
    }

    function marcarComoComprado(index) {
        // Move o item da lista de compras para a lista de itens que possui
        const item = ingredientesParaComprar.splice(index, 1)[0];
        item.comprado = true;  // Adiciona uma marcação para indicar que foi comprado
        itensQuePossui.push(item);

        // Atualiza o localStorage
        localStorage.setItem('itens-listaCompra', JSON.stringify(ingredientesParaComprar));
        localStorage.setItem('itens-que-possui', JSON.stringify(itensQuePossui));

        // Atualiza a lista exibida
        atualizarLista();
    }

    atualizarLista();
});
