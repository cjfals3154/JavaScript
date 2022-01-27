const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")


const ToDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(ToDos));
}

function DelleteToDo(event){
    const dellete = event.target.parentElement;
    dellete.remove();

}

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", DelleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    ToDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

































// function paintToDo(newTodo){
//     //html에 li, span을 만들고 li안에 span을 넣어준다 그리고 span에 이너텍스트를 추가해서 뉴투두랑 연결
//     const li = document.createElement("li")
//     const span = document.createElement("span")
//     li.appendChild(span);
//     span.innerText = newTodo;
//     toDoList.appendChild(li);
// };

// function handleToDoSubmit (event){
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     paintToDo(newTodo);
// };


// toDoForm.addEventListener("submit", handleToDoSubmit);






