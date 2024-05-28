// encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const btnCancelarTarefa=document.querySelector('.app__form-footer__button--cancel')
const textarea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');//"Pega" o elemento HTML que representa a lista de tarefa no DOM
const paragrafoDescricaoTarefa=document.querySelector('.app__section-active-task-description')

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas')
const btnRemoverTodas = document.querySelector('#btn-remover-todas')

let tarefaSelecionada=null;
let liTarefaSelecionada = null
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []//A lista de tarefas tenata encontrar primeiro os elementos JSON (vai tentar transformar os elementos JSON em strings, usando PARSE) salvos na localStorage, caso nao exista será uma array vazia

function atualizarTarefas(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
}

function criarElementoTarefa(tarefa) {//Funcao que vai criar o elemento (representação da TAREFA)
    const li = document.createElement('li')//cria o elemento <li> para exibir as tarefas
    li.classList.add('app__section-task-list-item')//adiciona estilo ao <li>

    const svg = document.createElement('svg')//cria o elemento svg 
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `
    const paragrafo = document.createElement('p')//cria o elemento <p>
    paragrafo.textContent = tarefa.descricao//Insere o texto de descricao da tarefa
    paragrafo.classList.add('app__section-task-list-item-description')//adiciona o estilo ao texto

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')
    //faz o mesmo processo dos "createElement's acima"

    botao.onclick=()=>{
        const novaDescricao= prompt("Qual o novo nome da sua tarefa ?");
        console.log(`A nova descricao da tarefa é: ${novaDescricao}`)
        if(novaDescricao){//Compilador entende o if como booleano, se ele estiver preenchido existe ent igual ture e entra no bloco de execucao, caso seja false não faz essas instruções
            paragrafo.textContent=novaDescricao;
            tarefa.descricao=novaDescricao;
            atualizarTarefas();
        }
        
    }
    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', '/imagens/edit.png')
    botao.append(imagemBotao);

    li.append(svg)//adiciona o elemento svg ao topico da lista
    li.append(paragrafo)//adiciona o elemento do paragrafo ao topico da lista
    li.append(botao)//adiciona o elemento do botao ao topico da lista

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete')
        botao.setAttribute('disabled', 'disabled')
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
                .forEach(elemento => {
                    elemento.classList.remove('app__section-task-list-item-active')
                })
            if (tarefaSelecionada == tarefa) {
                paragrafoDescricaoTarefa.textContent = ''
                tarefaSelecionada = null
                liTarefaSelecionada = null
                return
            }
            tarefaSelecionada = tarefa
            liTarefaSelecionada = li
            paragrafoDescricaoTarefa.textContent = tarefa.descricao
    
            li.classList.add('app__section-task-list-item-active')
        }
    }
    
    return li //Retorna o elemento <li> que representa a tarefa criada.
}   

function adicionarTarefa(){
    formAdicionarTarefa.classList.toggle('hidden');//Exibe o formulario para criar Tarefa
}

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }//Isso é um objeto com o conteudo da tarefa, associando o nome "descricao" ao valor da informação inserida no textArea. Objeto é uma variavel composta, que armazena varios tipos de informações e pode guardar métodos

    tarefas.push(tarefa)//Insere na lista tarefas os objetos tarefa

    const elementoTarefa = criarElementoTarefa(tarefa)//variavel que irá guardar o que for feito na função de criar o elemento com o conteudo do objeto tarefa(esse elemento vai ter os estilos da lista de tarefas)
    atualizarTarefas();
    ulTarefas.append(elementoTarefa)//adiciona o elemento tarefa na lista toda, dentro dessa lista estara os topicos <li>, que representam cada tarefa

    //VOU USAR LOCAL STORAGE PARA SALVAR O ARRAY DE TAREFAS
    //localStorage armazena informações do lado do cliente de forma persistente (salva as informações).É um tipo de "miniDB" dentro do navegador

    //Transforma o objeto de 'tarefas' em uma string JSON e armazena ela em localStorage, pois localStorage so armazena string

    textarea.value = ''//zera o textArea 
    formAdicionarTarefa.classList.add('hidden');//esconde o formulario de adicionar tarefa
})

function cancelarTarefa(){
    textarea.value='';
    formAdicionarTarefa.classList.add('hidden');
}


tarefas.forEach(tarefa => {//ira percorrer cada elemento do array TAREFAS
    // Para cada tarefa no array de tarefas:

    // Chama a função criarElementoTarefa, passando a tarefa atual como argumento,
    // para criar um elemento HTML que represente a tarefa.
    const elementoTarefa = criarElementoTarefa(tarefa);

    // Adiciona o elemento criado à lista de tarefas no documento HTML.
    ulTarefas.append(elementoTarefa);
});

document.addEventListener('FocoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active')
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete')
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled')
        tarefaSelecionada.completa = true
        atualizarTarefas()
    }
})

const removerTarefas = (somenteCompletas) => {
    let seletor = ".app__section-task-list-item";
    if (somenteCompletas) {
        seletor = ".app__section-task-list-item-complete";
        
    }

    // Remove os elementos do DOM que correspondem ao seletor
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove();
    });

    if (somenteCompletas) {
        // Filtra as tarefas completas e atualiza o array tarefas
        tarefas = tarefas.filter(tarefa => !tarefa.completa);
        
    } else {
        // Remove todas as tarefas
        tarefas = [];
    }

    // Atualiza o localStorage com a nova lista de tarefas sem as completas
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
    if (somenteCompletas && tarefaSelecionada && tarefaSelecionada.completa) {
        paragrafoDescricaoTarefa.textContent = '';
        tarefaSelecionada = null;
        liTarefaSelecionada = null;
    } else if (!somenteCompletas) {
        paragrafoDescricaoTarefa.textContent = '';
        tarefaSelecionada = null;
        liTarefaSelecionada = null;
    }


    // Chama a função para atualizar a interface com as tarefas restantes
    atualizarTarefas();
}

btnRemoverConcluidas.onclick = () => removerTarefas(true)
btnRemoverTodas.onclick = () => removerTarefas(false)
