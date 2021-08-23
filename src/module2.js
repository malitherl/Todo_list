const project = (name, tasks) => {

    const getTasks = () => tasks; 
    const getName = () => name;

    const addTask = newTask => {
        tasks.push(newTask);
    };
    const removeTask = indexOfTaskToDelete => {
        tasks.splice(indexOfTaskToDelete, 1);
    }


    return {getName, getTasks, addTask, removeTask}
};

export {project}