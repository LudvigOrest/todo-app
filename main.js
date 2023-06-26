function Todo(todoName, todoDescription, todoCreated, todoIsFinished, todoFinished) {
    this.todoName = todoName;
    this.todoDescription = todoDescription;
    this.todoCreated = todoCreated;
    this.todoIsFinished = todoIsFinished;
    this.todoFinished = todoFinished;
}

let arrayOfTodo = [];
let arrayOfFinished = [];

let pushTodoBtn = document.getElementById("create-new-todo-button");
pushTodoBtn.addEventListener("click", (event) => {
    let todoName = document.getElementById("input-todo-title");
    let todoDesc = document.getElementById("input-todo-description");
    let today = new Date().toLocaleDateString();

    if (todoName.value != "") {
        arrayOfTodo.push(new Todo(todoName.value, todoDesc.value, today, false, ""));
        console.log(arrayOfTodo);

        let i = arrayOfTodo.length-1;
        createTodoCard(arrayOfTodo[i].todoName, arrayOfTodo[i].todoDescription, i);

        todoName.value = "";
        todoDesc.value = "";
    }
})


//Funktion att skapa ny Todo, hämta information från input-fält och lägg det i Todo-objektet

function createTodoCard(todoHeader, todoDesc, index) {
    let todoList = document.getElementById("todo-container");
    let finishedList = document.getElementById("finished-list");

    let card = document.createElement("div");
    card.className = "todo-card";
    card.setAttribute("title", index);

    let topRow = document.createElement("div");
    topRow.className = "top-row";

    let removeButton = document.createElement("button");
    removeButton.className = "card-button remove-card";
    removeButton.innerText = "X";
    removeButton.addEventListener("click", (event) => {
        document.querySelector('[title="' + index + '"]').innerHTML = "";
    })

    let todoName = document.createElement("h3");
    todoName.className = "todo-header";
    todoName.innerText = todoHeader;

    let finishButton = document.createElement("button");
    finishButton.className = "card-button finish-card";
    finishButton.innerText = "🗸";
    finishButton.addEventListener("click", (event) => {
        arrayOfTodo[index].todoIsFinished = false;

        finishedList.appendChild(card);

        card.appendChild(topRow);
        card.appendChild(description);
        card.appendChild(dateContainer);

        topRow.appendChild(removeButton);
        topRow.appendChild(todoName);
        finishButton.classList.add("untargetable");
        topRow.appendChild(finishButton);

        creationDate.innerText = "created: " + arrayOfTodo[index].todoCreated;
        dateContainer.appendChild(creationDate);

        let today = new Date().toLocaleDateString();
        finishedDate.innerText = "finished: " + today;
        dateContainer.appendChild(finishedDate);
    })

    let description = document.createElement("p");
    description.className = "todo-paragraph";
    description.innerText = todoDesc;

    let dateContainer = document.createElement("div");
    dateContainer.className = "dates";

    let creationDate = document.createElement("p");
    creationDate.className = "todo-creation-date";
    creationDate.innerText = "created: " + arrayOfTodo[index].todoCreated;

    let finishedDate = document.createElement("p");
    finishedDate.className = "todo-finished-date";



    todoList.appendChild(card);

    card.appendChild(topRow);
    card.appendChild(description);
    card.appendChild(dateContainer);

    topRow.appendChild(removeButton);
    topRow.appendChild(todoName);
    topRow.appendChild(finishButton);

    dateContainer.appendChild(creationDate);
    dateContainer.appendChild(finishedDate);
}


//Funktion att ta bort en Todo

//Funktion att markera en Todo som klar