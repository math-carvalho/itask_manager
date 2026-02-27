// Define variável para lista de tarefas no HTML
const lista_tarefas = document.getElementById("task-list") as HTMLUListElement;

// Define classe Tarefa 
class Tarefa {
    nome: string;
    descricao: string;
    data: string;
    horario: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = new Date().toLocaleDateString('pt-BR');
        this.horario = new Date().toLocaleTimeString('pt-BR');
    }

    // Renderiza lista de tarefas no HTML
    renderizar() {
        // Cria item da lista de tarefas
        const item = document.createElement("li");

        // Define o conteúdo do item da lista de tarefas 
        item.textContent = `${this.nome}: ${this.descricao} - ${this.data}; ${this.horario}`;
        
        // Adiciona o item na lista de tarefas
        lista_tarefas.appendChild(item);

        // Cria checkbox para o item adicionado na lista de tarefas
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        item.appendChild(checkbox);
    }
}

// Define variável para formulário de tarefa no HTML
const form = document.getElementById("task-form") as HTMLFormElement;

// Define variáveis para campos da tarefa no HTML
const tarefa_nome = document.getElementById("task") as HTMLInputElement;
const tarefa_descricao = document.getElementById("task-description") as HTMLInputElement;

// Adiciona evento de submissão do formulário
form.addEventListener("submit", (event: SubmitEvent) => {
    // Impede que a página seja recarregada 
    event.preventDefault();
    // Define variáveis para conteúdo do nome e da descrição da tarefa do novo item
    const novoItem = new Tarefa(tarefa_nome.value, tarefa_descricao.value);  
    // Renderiza novo item na lista de tarefas
    novoItem.renderizar();
});




