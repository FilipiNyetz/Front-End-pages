let livros =[];//Define o array de livros
const endPointDaAPI='https://guilhermeonrails.github.io/casadocodigo/livros.json'//Define qual sera o endereço da API
getBuscarLivrosDaAPI()//Funcao para requisição na API

//função assincrona para requisição da API
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI);//Faz a busca na API com o fetch, e o await aguarda a promessa da busca ser confirmada
    livros= await res.json();//transforma o resultado em JSON

    console.table(livros);//Exibe no console as informações do array livros em formato de tabela

    let livrosComDesconto=aplicarDesconto(livros);//Cria a variavel livros com desconto e recebe como valor dela o retorno da função aplicar Desconto, que tem como parametro a lista de livros

    exibirLivros(livrosComDesconto);//chama a função que exibira na tela, passando livros como o parametro
}


