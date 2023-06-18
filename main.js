fetchAPI();
fetchSingleTodo(2);
addTodo("hello man");
editTodo("goodbye man", 3).then(
    fetchSingleTodo(3)
);

fetchSingleTodo(3);

function fetchAPI() {
    fetch('https://dummyjson.com/todos')
    .then (res => res.json())
    .then (console.log);
}

function fetchSingleTodo(number) {
    fetch('https://dummyjson.com/todos/' + number)
    .then (res => res.json())
    .then (console.log);
}

async function addTodo(todoText) {
    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: todoText.toString(),
            completed: false,
            userId: 5,
        })
    })
    .then(res => res.json())
    .then(console.log);
}

async function editTodo(todoText, postId) {
    fetch('https://dummyjson.com/todos/' + postId, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: todoText.toString(),
            completed: false,
        })
    })
    .then(res => res.json())
    
}

//Ändringarna eller nya todo:s sparas inte på API:et och kan därför inte hämtas senare. 