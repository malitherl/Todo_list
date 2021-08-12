const project = (name, tasks) => {

    const getTasks = () => tasks; 
    const getNames = () => name;

    const addTask = newTask => {
        tasks.push(newTask);
        console.log(tasks);
    };

    return {getNames, getTasks, addTask}
};

export {project}