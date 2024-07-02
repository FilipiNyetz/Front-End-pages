//Declaracao da função de aplicar Desconto
function aplicarDesconto(livros){
    const desconto = 0.3;//Desconto padrão de 30% 
    livrosComDesconto=livros.map(livro=>{//metodo map, que ira iterar sobre todos os livros da lista livro, um por um e realizar a instrução
        return{...livro,preco:livro.preco-(livro.preco*desconto)}//retorna uma cópia da array de livro (...) e altera o preço, aplicando o desconto
    })
    return livrosComDesconto //retorna a copia da nova array livrosComDesconto, sem alterar a array padrão de livros
}