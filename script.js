const form = document.querySelector("form")
const input = document.getElementById("input")

const TarefaCriada = document.getElementById("tarefa_criada")
const TarefaConcluida = document.getElementById("tarefa_concluida")
const lista = document.querySelector("#list")
const empty = document.querySelector(".empty")

let valorTarefa = 0; // Variável global para contar tarefas concluídas

form.addEventListener("submit", function (event) {
  event.preventDefault();
  empty.style = "display:none"
  let lis = document.createElement("li")
  let imgCheck = document.createElement("img")
  imgCheck.src = "assets/CircleDuotone.png";
  imgCheck.alt = "Check";

  let NewSpan = document.createElement("span")
  NewSpan.textContent = input.value

  let imgTrash = document.createElement("img")
  imgTrash.src = "assets/TrashRegular.png";

  lista.append(lis)
  lis.append(imgCheck, NewSpan, imgTrash)

  // Atualiza o número de tarefas criadas
  TarefaCriada.textContent = lista.children.length;

  let isChecked = false;

  imgCheck.addEventListener("click", function () {
    if (isChecked) {
      imgCheck.src = "assets/CircleDuotone.png";
      NewSpan.style.textDecoration = "none";
      NewSpan.style.color = "var(--gray-600)";
      valorTarefa--; // Decrementa quando desmarca
    } else {
      imgCheck.src = "assets/CheckCircleFill.svg";
      NewSpan.style.textDecoration = "line-through";
      NewSpan.style.color = "var(--gray-500)";
      valorTarefa++; // Incrementa quando marca como concluída
    }

    TarefaConcluida.textContent = valorTarefa;
    isChecked = !isChecked; // Alterna o estado
  });

  // Evento para remover a tarefa
  imgTrash.addEventListener("click", function (event) {
    const itemRemover = event.target.closest("li");

    // Se a tarefa estava concluída, decrementa a contagem de concluídas
    if (isChecked) {
      valorTarefa--;
      TarefaConcluida.textContent = valorTarefa;
    }

    // Remove o item da lista
    itemRemover.remove();

    // Atualiza o número de tarefas criadas
    TarefaCriada.textContent = lista.children.length;
  });

  // Limpa o campo de input
  input.value = "";
});
