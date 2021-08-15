

function taskSort(projectName, projects){

        const sort = projects.find(project => project.getName() == projectName);
        return sort;
}

export {taskSort}