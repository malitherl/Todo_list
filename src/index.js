import { appendNewTasksToProject, body, displayBody, displayForm, displayProjectCreation, fillOut, projectCreation, projectDisplay, updateProject } from "./DOMHandler";
import { formHandler } from "./formHandler";
import { createToDo } from "./module1";
import {project} from "./module2";
//this will be for projects, and there can be three categories for projects 
//we need to give the user the ability to choose which project they would like to add to dos to 

//this will be for little tasks 
//what we need to do is change how the projects are made and make it so that 
//we can add projects via directly in the project panel 
//which would be very helpful instead of just having this form pop up
const personal = project("Personal", []);
const work = project("Work", []);
const newProject = project("a", []);
let projects = [personal, work];

let currentProject = personal; 
//we need to be able to modify tasks as well, which means appending behaviors onto 
//the tasks themselves 

//but before we can approach this, we'll need to make a more functional means 
//of displaying these tasks at hand 


let meeb = createToDo("water the plants", "burh i need to water my plants", "08/15/2022", "1", "complete");
let shmeeb = createToDo("water the plants", "burh i need to water my plants", "08/15/2021", "2", "complete");
let teeb = createToDo("water the plants", "burh i need to water my plants", "08/15/2021", "3", "complete");
personal.addTask(meeb);
personal.addTask(shmeeb);
personal.addTask(teeb);
//we create a current project 

projectDisplay(projects);

///our problem is that none of these generate at the beginning of the program

//if we add a new project we'll need to add the generate function in it
function generate (){
    projects.forEach(project =>{
        body(project);
    })
    projectSelector();
    projectCreation();
    formHandling();
    taskDisplay();
} 
generate();

function projectSelector () {
    Array.from(document.getElementsByClassName("projectTitle")).forEach(h3=> {
        h3.addEventListener("click", function(){
            currentProject = (projects[h3.dataset.id]);   
            displayBody([h3.dataset.id]);
            if(document.getElementsByClassName("taskCreator")!== null){
                console.log("hielfsafd");
            }
            appendingTasks(currentProject);
        })
    });
    document.getElementById("projectCreation").addEventListener("click", function(){
        displayProjectCreation();
        document.getElementById("submit2").addEventListener("click", function(){
            let newName = document.querySelector("#projName");
            let newProj = project(newName.value, []);
            projects.push(newProj);
            console.log(projects);
            updateProject(newProj, projects);
            body(newProj);
            projectSelector();  
            formHandling();
            taskDisplay();
        })
    })
}

function formHandling() {
    Array.from(document.getElementsByClassName("taskCreator")).forEach(elem =>{
            fillOut(elem);
            elem.addEventListener("click", function(){
                displayForm(elem);
            });  
        });
    }

function taskDisplay(){
    Array.from(document.getElementsByClassName("taskBox")).forEach(elem => {
        elem.addEventListener("click", function(){
            elem.children[1].style.display="block";
        })
    })
}





function appendingTasks(currentProject){
    let index = projects.indexOf(currentProject);
    let a = Array.from(document.getElementsByTagName("form"));
    a[index].elements[5].addEventListener("click", function(){
        let data = a[index].getElementsByClassName("info");
        let dataArray = Array.from(data);
        let task = createToDo(dataArray[0].value, dataArray[1].value, 
            dataArray[2].value,dataArray[3].value,dataArray[4].value);
        currentProject.addTask(task);
        let i = projects.indexOf(currentProject);
        appendNewTasksToProject(currentProject, i);
    })
}

/* 

p4.addEventListener("click", function(){
    resetForm();
    fillOut(p4);
    document.getElementById("submit").addEventListener("click", function(){
        p4.dataset.id= Array.from(document.getElementsByClassName("info"));
    })
})

 */
/* 
document.getElementById("submit").addEventListener("click", function(){
    let data = Array.from(document.getElementsByClassName("info"));
    let task = createToDo(data[0].value, data[1].value, 
            data[2].value,data[3].value,data[4].value);
    currentProject.addTask(task);
    console.log(currentProject.getTasks());
}) 
 */

    
    //create a module that sorts the different tasks 
    /* let category = data[5].value;
    if(category == "other"){
        projectCreation();
        console.log("will initiate project creation");
        document.getElementById("submit2").addEventListener("click", function(){
            let newName = document.querySelector("#projName");
            let newProj = project(newName.value, []);
            console.log(newName.value);
            projects.push(newProj);
            updateProject();
            projectDisplay(projects);
            
        }) */
   /*  } else {
       let proj= taskSort(category, projects); 
       proj.addTask(task);
       console.log(projects);
    } */

//next thing would be to find a way of displaying the projects --also did this 
//and be able to add different types of projects -- did this  


        //there's also a function we'll need to make to update the webpage once we make these changes
            //managed this and realized i need to reorganize how i wrote all of this code 

    //we could add a tab to each project that would allow us to add a new task directly there 
    //which would be a lot easier than
            //make a function that will allow us to create a new project in the project panel itself too 
            /* let data = Array.from(document.getElementsByClassName("info"));
            console.log(data);
            let task = createToDo(data[0].value, data[1].value, 
            data[2].value,data[3].value,data[4].value);
            currentProject.addTask(task);
            console.log(currentProject.getTasks());
            let index = projects.indexOf(currentProject);
            appendNewTasksToProject(currentProject, index); */