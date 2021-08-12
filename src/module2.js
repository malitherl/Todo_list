const project = (name, tasks) => {

    const getTasks = () => tasks; 
    const getNames = () => name;

    const addTask = newTask => {
        tasks.push(newTask);
    };

    return {getNames, getTasks, addTask}
};

export {project}