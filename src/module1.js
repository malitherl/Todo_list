const createToDo = (title, description, dueDate, priority, completionStatus) => {

    const todo = {};
    todo.title = title;
    todo.description= description;
    todo.dueDate= dueDate;
    todo.priority=priority;
    todo.completionStatus= completionStatus;
    return todo;

}

function edit(todo) {

    function changePriority(newPriority){
        todo.priority= newPriority;
    }

    function completionStatus(newComplete){
        todo.completionStatus = newComplete;
    }

    return changePriority, completionStatus; 

}





let todo1 = createToDo("a", "b", "4", "1", false);

console.log(todo1);