function Todo(todoName, todoDescription, todoCreated, todoIsFinished, todoFinished) {
    this.todoName = todoName;
    this.todoDescription = todoDescription;
    this.todoCreated = todoCreated;
    this.todoIsFinished = todoIsFinished;
    this.todoFinished = todoFinished;
}

let todo1 = new Todo("Skrapa rutan", "skrapa is från framrutan", "2023-06-26", false);

let arrayOfTodo = [];
let arrayOfFinished = [];

arrayOfTodo.push(todo1);

console.log(arrayOfTodo);