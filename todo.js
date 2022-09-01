// document.getElementById('adicionar').onclick = function() {...}
const inputTarefa = document.getElementById('tarefa');
//inputTarefa.onkeyup
inputTarefa.onkeydown = function (event) {
    if (event.key === 'Enter') { adicinarTarefa();}
}
document.getElementById('adicionar').addEventListener('click', adicionarTarefa); 
function adicinarTarefa() {
    const tarefa = inputTarefa.value;
    if (tarefa.trim()) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const textNode = document.createTextNode(tarefa.trim());
        span.appendChild(textNode);
        span.onclick = function() {
            if (span.classList.contains('done')) {
                span.classList.remove('done');
            }else {
                span.classList.add('done');
            }
        };
        li.appendChild(span);
        const ol = document.getElementById('tarefas');
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Excluir'));
        button.onclick = function () {
            if (confirm('Deseja Excluir?')) { ol.removeChild(li); }
        };
        li.appendChild(button);
        ol.appendChild(li);
        inputTarefa.value = '';
        alert('Tarefs adicionada com sucesso!');
    }
}
