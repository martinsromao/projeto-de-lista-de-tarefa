const form = document.querySelector("form")
const input = document.getElementById("input")

const TarefaCriada = document.getElementById("tarefa_criada")
const TarefaConcluida = document.getElementById("tarefa_concluida")
const empty = document.querySelector(".empty")
const lista = document.querySelector("#list")




  

form.addEventListener("submit", function (event){
event.preventDefault();
let lis = document.createElement("li")
let imgCheck = document.createElement("img")
  imgCheck.src = "assets/CircleDuotone.png";
  imgCheck.alt = "Check";
  let NewSpan = document.createElement("span")
  NewSpan.textContent = input.value
  let imgTrash = document.createElement("img")
  imgTrash.src ="assets/TrashRegular.png";


  
lista.append(lis)
lis.append(imgCheck, NewSpan, imgTrash)








})