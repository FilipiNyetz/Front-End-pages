const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
const btnFiltrarLivrosDeBack = document.getElementById('btnFiltrarLivrosBack');
const btnFiltrarLivrosDeDados = document.getElementById('btnFiltrarLivrosDados');
const btnFiltrarLivrosDisponiveis=document.getElementById('btnLivrosDisponiveis')

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria=='disponivel' ? livros.filter(livro=>livro.quantidade>0) : livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados);
    exibirLivros(livrosFiltrados);
}