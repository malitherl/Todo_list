import { fillOut, projectCreation } from "./DOMHandler";
import { createToDo } from "./module1";
import {project} from "./module2";
import { taskSort } from "./taskOrdering";
import {projectDisplay, updateProject} from './projectDisplay';
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
 

//we need to be able to modify tasks as well, which means appending behaviors onto 
//the tasks themselves 

//but before we can approach this, we'll need to make a more functional means 
//of displaying these tasks at hand 

projectDisplay(projects);

let meeb = createToDo("water the plants", "burh i need to water my plants", "08/15/2022", "1", "complete");
let shmeeb = createToDo("water the plants", "burh i need to water my plants", "08/15/2021", "1", "complete");
personal.addTask(meeb);
personal.addTask(shmeeb);
fillOut();
console.log(document.getElementsByClassName("taskCreator"));

Array.from(document.getElementsByClassName("taskCreator")).forEach(p => {
    p.addEventListener("click", function(){
        p.firstElementChild.style.display = "block";
    })
});

document.getElementById("submit").addEventListener("click", function(){
    updateProject();
    projectDisplay(projects);
    let data = Array.from(document.getElementsByClassName("info"));
    let task = createToDo(data[0].value, data[1].value, 
            data[2].value,data[3].value,data[4].value);

    //create a module that sorts the different tasks 
    let category = data[5].value;
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
            
        })
    } else {
       let proj= taskSort(category, projects); 
       proj.addTask(task);
       console.log(projects);
    }
});

//next thing would be to find a way of displaying the projects --also did this 
//and be able to add different types of projects -- did this  


        //there's also a function we'll need to make to update the webpage once we make these changes
            //managed this and realized i need to reorganize how i wrote all of this code 

    //we could add a tab to each project that would allow us to add a new task directly there 
    //which would be a lot easier than
            //make a function that will allow us to create a new project in the project panel itself too 

