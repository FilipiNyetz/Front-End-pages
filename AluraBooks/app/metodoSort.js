const btnOrdenarPorPreco=document.getElementById('btnOrdenarPorPreco');

function ordenarPorPreco(){
    let livrosOrdenados=livros.sort((a,b)=>a.preco-b.preco)
    exibirLivros(livrosOrdenados);
    
}