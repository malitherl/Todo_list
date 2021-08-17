import {formHandler} from './formHandler';
function fillOut (node){
    
    resetForm();
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
        input4.setAttribute("max", "5");
        const label5= document.createElement("label");
        label5.textContent="Completed?";
        const input5 = document.createElement("input");
        input5.setAttribute("type", "checkbox");
        input5.setAttribute("value", "complete");
        input5.setAttribute("class", "info");

        const label6 = document.createElement("button");
        label6.textContent="Submit";
        label6.setAttribute("type", "button");
        label6.setAttribute("id", "submit");
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
        node.appendChild(form);
    
};



function projectCreation(){

    const content = document.getElementById("content");
    const textbox = document.createElement("label");
    textbox.textContent= "Project Name: ";
    const projectName = document.createElement("input");
    projectName.setAttribute("id", "projName");
    projectName.setAttribute("type", "text");
    const button2 = document.createElement("button");
    button2.textContent="Submit";
    button2.setAttribute("type", "button");
    button2.setAttribute("id", "submit2");

    content.appendChild(textbox);
    content.appendChild(projectName);
    content.appendChild(button2);

}
//we should have a little function to hide away the non current projects but not delete or we'd otherwise lose our event listeners 
//which would be sadge :< 

function projectDisplay(projects){
    const content = document.getElementById("content");
    let prjBar= document.createElement("DIV");
    let i=0;
    projects.forEach(element => {
        prjBar.setAttribute("id", "prjBar");
        let p3 = document.createElement("h3");
        p3.textContent = element.getName() + " (" + element.getTasks().length+ ")" ; 
        p3.setAttribute("class", "projectTitle");
        p3.setAttribute("id", "projTitle");
        p3.dataset.id = i;
        i++;
        let tasks = Array.from(element.getTasks());
        tasks.forEach(task => {
             let taskWords = document.createElement("p");
             taskWords.textContent = task;
             taskWords.style.display = "none";
             p3.appendChild(taskWords);
        })
        //this is where we get the functionality to create a new project in this panel
        prjBar.appendChild(p3);
        content.appendChild(prjBar);

        //this is actually where we need to add tasks, not the index.js page 


        //each project heading needs to be a dropdown menu that displays its tasks 
            //and each task needs a button that would allow the user to modify it and or delete it 
        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown relevant website to our aims 
        //we'll need to make a loop to iterate through all of the tasks and display them 
        //there's also a function we'll need to make to update the webpage once we make these changes 
    });

    let createProj = document.createElement("h3");
    createProj.setAttribute("id", "projectCreation");
    createProj.textContent = "Create New Project...";
    document.getElementById("content").appendChild(createProj);
    //we add an event listener to this in index.js
}

function updateProject(projects){
    projects.forEach(project => {
        let textDisplay = document.getElementById("projTitle"); 
        textDisplay.textContent = project.getName() + " (" + project.getTasks().length+ ")" ;
    })
    
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function body(project){
    resetBody();
    let body = document.createElement("DIV");
    body.setAttribute("id", "toCenter");
    body.setAttribute("class", "toC");
    let titling= document.createElement("h1");
    titling.textContent = project.getName();
    body.appendChild(titling);
    project.getTasks().forEach(task => {
        let writing = document.createElement("h4");
        writing.textContent = task;
        body.appendChild(writing);
    })
    let p4 = document.createElement("h4");
    p4.setAttribute("class","taskCreator");
    p4.textContent = "Add Task(+)";
    
    body.appendChild(p4);
    document.getElementById("content").appendChild(body);
}

function resetBody(){
    if(document.querySelector("#toCenter") !== null){
        document.querySelector("#toCenter").parentElement.removeChild(document.querySelector("#toCenter"));
    }
}

function resetForm(){
    if(document.querySelector("form") !== null){
        document.querySelector("form").parentElement.removeChild(document.querySelector("form"));
    }
}



export {fillOut, projectCreation, projectDisplay, updateProject, body}