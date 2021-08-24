
function fillOut (node){
    //we create a form here so we can fill out todo elements    
        const form = document.createElement("form");
        const label1 = document.createElement("label");
        label1.textContent = "Title: ";
        const input1= document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "info");
        const label2 = document.createElement("label");
        label2.textContent= "Description: ";
        const input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("class", "info");
        const label3 = document.createElement("label");
        label3.textContent= "Due Date: ";
        const input3 = document.createElement("input");
        input3.setAttribute("type", "date");
        input3.setAttribute("class", "info");
        const label4 = document.createElement("label");
        label4.textContent= "Priorty: ";
        const input4 = document.createElement("input");
        input4.setAttribute("class", "info");
        input4.setAttribute("type", "number");
        input4.setAttribute("min", "1");
        input4.setAttribute("max", "3");
        const label5= document.createElement("label");
        label5.textContent="Completed?";
        const input5 = document.createElement("input");
        input5.setAttribute("type", "checkbox");
        input5.setAttribute("value", "complete");
        input5.setAttribute("class", "info");

        const label6 = document.createElement("button");
        label6.textContent="Submit";
        label6.setAttribute("type", "button");
        label6.setAttribute("class", "submit");
        form.appendChild(label1); 
            form.appendChild(input1); 
        form.appendChild(label2);
            form.appendChild(input2);
        form.appendChild(label3);
            form.appendChild(input3);
        form.appendChild(label4);
            form.appendChild(input4);
        form.appendChild(label5);
            form.appendChild(input5);
        form.appendChild(label6);
        form.style.display = "none";
        node.appendChild(form);
    
};

function projectCreation(){

    const content = document.getElementById("projectCreation");
    const creationDIV = document.createElement("DIV");
    creationDIV.setAttribute("id", "creationDIV");
    const textbox = document.createElement("label");
    textbox.textContent= "Project Name: ";
    const projectName = document.createElement("input");
    projectName.setAttribute("id", "projName");
    projectName.setAttribute("type", "text");
    const button2 = document.createElement("button");
    button2.textContent="Submit";
    button2.setAttribute("type", "button");
    button2.setAttribute("id", "submit2");

    creationDIV.appendChild(textbox);
    creationDIV.appendChild(projectName);
    creationDIV.appendChild(button2);
    creationDIV.style.display ="none";
    content.appendChild(creationDIV);
    
}

function displayProjectCreation(){

    document.getElementById("creationDIV").style.display ="block";
}

function projectDeletionDisplay(projects){
    let deletionDIV = document.createElement("DIV");
    deletionDIV.setAttribute("id", "deletionDIV");

    let selectionBar= document.createElement("select");
    selectionBar.setAttribute("id", "selectProject");
    let projectsArray = Array.from(projects);
    projectsArray.forEach( e => {
        let option = document.createElement("option");
        option.value = e.getName();
        option.textContent = e.getName();
        selectionBar.appendChild(option);
    })
    deletionDIV.appendChild(selectionBar);
    let enter = document.createElement("button");
    enter.setAttribute("id", "submit4");
    enter.textContent = "Enter";
    deletionDIV.appendChild(enter);
    document.getElementById("content").appendChild(deletionDIV);
}



//we should have a little function to hide away the non current projects but not delete or we'd otherwise lose our event listeners 
//which would be sadge :< 

function projectDisplay(projects){
    const content = document.getElementById("content");
    const panel = document.createElement("DIV");
    panel.setAttribute("id", "projectPanel");
    let prjBar= document.createElement("DIV");
    prjBar.setAttribute("id", "prjBar");
    let i=0;
    panel.appendChild(prjBar);
    projects.forEach(element => {
        appendTasksToProject(i, element, prjBar, prjBar);
        i++;
    })
    let createProj = document.createElement("h3");
    createProj.setAttribute("id", "projectCreation");
    createProj.textContent = "Create New Project...";
    panel.appendChild(createProj);
    //we add an event listener to this in index.js

    let deleteProj = document.createElement("h3");
    deleteProj.setAttribute("id", "projectDeletion");
    deleteProj.textContent = "Delete Project...";
    panel.appendChild(deleteProj);
    content.appendChild(panel);
}

function appendTasksToProject(i,project, node){
    //important for there to be a starting index for data attributes 
    let p3 = document.createElement("h3");
        p3.textContent = project.getName() + " (" + project.getTasks().length+ ")" ; 
        p3.setAttribute("class", "projectTitle");
        p3.setAttribute("id", "projTitle");
        p3.dataset.id = i;
        let tasks = Array.from(project.getTasks());
        tasks.forEach(task => {
             let taskWords = document.createElement("p");
             taskWords.setAttribute("class", "projectTasks");
             taskWords.textContent = task;
             taskWords.style.display = "none";
             p3.appendChild(taskWords);
        })
    node.appendChild(p3);
        
}

function appendNewTasksToProject(project,i){
    let taskContainer = Array.from(document.getElementsByClassName("taskContainer"));
    let projectTasks = Array.from(project.getTasks());
    let newestTask= projectTasks[projectTasks.length-1];
    console.log(newestTask.getVariables());
    taskManager(taskContainer[i], newestTask.getVariables());
}

function updateProject(project, projects){
    let i = projects.indexOf(project);
    let newProject = document.createElement("h3");
        newProject.textContent= project.getName() + " (" + project.getTasks().length+ ")";
        newProject.setAttribute("class", "projectTitle");
        newProject.setAttribute("id", "projTitle");
        newProject.dataset.id = i;
    document.getElementById("prjBar").appendChild(newProject);
}


function displayBody(index){
    let bodies= Array.from(document.getElementsByClassName("toC"));
    bodies.forEach(body => {
        body.style.display= "none";
    })
    bodies[index].style.display= "grid";
}

function displayForm(node){
    let forms= Array.from(document.getElementsByTagName("form"));
    forms.forEach(form=> {
        form.style.display="none";
    })
    for(let i=0; i < node.children.length; i++){
        node.children[i].style.display = "block";
    }
}
 function createEditor(node){
    let editorDiv = document.createElement("DIV");
    editorDiv.setAttribute("class" , "editor");
    let changePriorityInput = document.createElement("label");
    changePriorityInput.textContent = "New Priority";
    let changePriorityInput1 = document.createElement("input");
    changePriorityInput1.setAttribute("class", "info1");
    changePriorityInput1.setAttribute("type", "number");
    changePriorityInput1.setAttribute("min", "1");
    changePriorityInput1.setAttribute("max", "3");
    let submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submit3"); 
    submitButton.textContent = "Save";
    editorDiv.appendChild(changePriorityInput);
    editorDiv.appendChild(changePriorityInput1);
    editorDiv.appendChild(submitButton);
    editorDiv.style.display = "none";
    node.appendChild(editorDiv);
 }
//this is not the function to remove a task but rather it displays to do so 
//the deleteTask function is the function that removes a task from the page
function removeTask(node){
    let removalDiv = document.createElement("DIV");
    removalDiv.setAttribute("class", "delete");
    removalDiv.style.display = "none";
    let deletion = document.createElement("button");
    deletion.textContent="Delete Task";
    deletion.setAttribute("class", "deletion");
    removalDiv.appendChild(deletion);
    node.appendChild(removalDiv);
}

function deleteTask(indexInProjects, indexOfTask){
    let tasks = Array.from(document.getElementsByClassName("taskContainer"));
    console.log(tasks[indexInProjects].children[indexOfTask]);
    tasks[indexInProjects].children[indexOfTask].remove();
}

function update(indexOfProject, project){
    let projects = document.getElementById("prjBar"); 
    projects.children[indexOfProject].textContent= project.getName() + " (" + project.getTasks().length + ") ";
}


function body(project){

    let body = document.createElement("DIV");
    body.dataset.id = project.getName();
    body.setAttribute("id", "toCenter");
    body.setAttribute("class", "toC");
    let titling= document.createElement("h1");
    titling.textContent = project.getName();
    let taskContainer = document.createElement("DIV");
    taskContainer.setAttribute("class", "taskContainer");
    body.appendChild(titling);
    body.appendChild(taskContainer);
    
    project.getTasks().forEach(task => {
        let writing = document.createElement("h4"); 
        writing.setAttribute("class", "text");
        taskManager(writing, task.getVariables());
        taskContainer.appendChild(writing);
        createEditor(writing);
        removeTask(writing);
    })
    let p4 = document.createElement("h4");
    p4.setAttribute("class","taskCreator");
    p4.setAttribute("id","formCreator");
    
    p4.textContent = "Add Task(+)";
    
    let p5 = document.createElement("h4");
    p5.setAttribute("class", "taskEditor");
    p5.setAttribute("id", "modifyTasks");
    p5.textContent ="Edit Tasks"; 

    body.appendChild(p5);
    body.appendChild(p4);
    document.getElementById("content").appendChild(body);
    body.style.display = "none"; 
}

//we need to make a div to contain all of the tasks, maybe modify taskbox first 
function taskManager(node, string){

    let cutUpArray = string.split(",");
    let taskBox= document.createElement("DIV");
    taskBox.setAttribute("class", "taskBox");
        let title = document.createElement("h4");
        title.textContent= cutUpArray[0];
        title.setAttribute("class", "taskTitle");
        let hiddenDetails= document.createElement("DIV");
        hiddenDetails.setAttribute("id", "hiddenDetails");
        hiddenDetails.style.display= "none";
        let desc = document.createElement("p");
        desc.textContent = cutUpArray[1];
        let date = document.createElement("p");
        date.textContent = cutUpArray[2];
        let priortyNumber = parseInt(cutUpArray[3]);
        let priority = document.createElement("p");
        priority.textContent = cutUpArray[3] +"";
            switch (priortyNumber){
                case 1:
                    priority.style.color = "rgb(204, 255, 51)";
                break; 
                case 2: 
                    priority.style.color= "rgb(255, 214, 51)";
                break;
                case 3: 
                    priority.style.color="rgb(230, 0, 0)";
                break;
                default: 
                    priority.style.color="black";
                break;
            }
        taskBox.appendChild(title);
            hiddenDetails.appendChild(desc);
            hiddenDetails.appendChild(date);
            hiddenDetails.appendChild(priority);
        taskBox.appendChild(hiddenDetails);
    node.appendChild(taskBox);

}



export {fillOut, projectCreation, projectDisplay, update, updateProject, body, displayBody, displayForm,displayProjectCreation, appendNewTasksToProject, deleteTask, projectDeletionDisplay}