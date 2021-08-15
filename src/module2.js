const project = (name, tasks) => {

    const getTasks = () => tasks; 
    const getName = () => name;

    const addTask = newTask => {
        tasks.push(newTask);
    };

    return {getName, getTasks, addTask}
};

export {project}