const btnTarefa=document.querySelector('.add-task-button');
const btSalvar=document.getElementsByClassName('task-form')
const textArea =document.getElementsByClassName('task-input');
const formTarefa=document.getElementsByClassName('task-form');


const liTarefa=document.querySelector('.task-item')

let descricaoTarefa='';

let tarefas = JSON.parse(localStorage.getItem('toDo')) || []

function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('toDo')) || [];

    tarefasSalvas.forEach(tarefa => {
        exibirTarefa(tarefa.tarefa, tarefa.dia,tarefa.finished);

    });

}

function atualizarTarefas(){
    localStorage.setItem('toDo', JSON.stringify(tarefas))
    
}

function adicionarTarefa(dayId) {
    console.log('Adicionar tarefa:', dayId);
    const taskForm = document.getElementById(dayId).querySelector('.task-form');
    taskForm.classList.toggle("hidden");
    limparText(dayId);
}

function escreverTarefa(event, dayId) {
    event.preventDefault();
    const dayContainer = document.getElementById(dayId);
    const textArea = dayContainer.querySelector('.task-input');
    const descricaoTarefa = textArea.value;
    console.log(descricaoTarefa);

    // Adiciona a tarefa ao array com o formato desejado
    tarefas.push({ dia: dayId, tarefa: descricaoTarefa, finished: false });
    atualizarTarefas()
    console.log(tarefas);

    // Exibe a nova tarefa na lista
    exibirTarefa(descricaoTarefa, dayId);
    
    const taskForm = document.getElementById(dayId).querySelector('.task-form');
    taskForm.classList.add("hidden");
}


function exibirTarefa(descricaoTarefa,dayId,status){
    const dayContainer = document.getElementById(dayId);
    const taskList=dayContainer.querySelector('.task-list');

    let liTarefa=document.createElement('li');
    liTarefa.classList.add('task-item');
    liTarefa.textContent=descricaoTarefa;
    

    if(liTarefa.classList.contains('example')){
       liTarefa.innerHTML=''
    }
    const botoes=document.createElement('div');
    botoes.classList.add('botoes');

    const doneBt = document.createElement('button');
    doneBt.classList.add('done-task-bt');
    doneBt.textContent = 'Done';
    doneBt.onclick = function() {
        confirmarTarefa(dayId, liTarefa, descricaoTarefa);
    };

    if(status==true){
        liTarefa.classList.add('finished');
    }
    
    const removeBT = document.createElement('button');
    removeBT.classList.add('remove-task-bt');
    removeBT.textContent = 'Remove';
    removeBT.onclick = function() {
        removerTarefa(dayId, liTarefa, descricaoTarefa);
    };
    const exampleTask = taskList.querySelector('.example');
    if (exampleTask) {
        taskList.removeChild(exampleTask);
    }

    botoes.appendChild(doneBt);
    botoes.appendChild(removeBT);
    liTarefa.appendChild(botoes)// Adiciona o botão "Remove"
    taskList.appendChild(liTarefa)
}

function limparText(dayId) {
    console.log('Limpar texto:', dayId);
    const textArea = document.getElementById(dayId).querySelector('.task-input');
    if (!textArea) return;
    textArea.value = '';
}

function confirmarTarefa(dayId, tarefaElemento, descricaoTarefa) {
    // Adiciona a classe "finished" à tarefa selecionada
    tarefaElemento.classList.add('finished');

    // Atualiza o status "finished" da tarefa correspondente no array "tarefas"
    tarefas.forEach(tarefa => {
        if (tarefa.dia === dayId && tarefa.tarefa === descricaoTarefa) {
            tarefa.finished = true;
        }
    });

    
    atualizarTarefas();

    console.log("Tarefas após confirmação:", tarefas);
}
function removerTarefa(dayId,tarefaElemento,descricaoTarefa){
    tarefaElemento.remove()
    tarefas = tarefas.filter(tarefa => !(tarefa.dia === dayId && tarefa.tarefa === descricaoTarefa));
    atualizarTarefas();

    console.log("Tarefas após remoção:", tarefas);
}


document.addEventListener('DOMContentLoaded', carregarTarefas);