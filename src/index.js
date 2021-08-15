import { fillOut, projectCreation } from "./DOMHandler";
import { createToDo } from "./module1";
import {project} from "./module2";
import { taskSort } from "./taskOrdering";


//this will be for projects, and there can be three categories for projects 
//we need to give the user the ability to choose which project they would like to add to dos to 

//this will be for little tasks 
fillOut();

const personal = project("personal", []);
const work = project("work", []);
const other = project("other", []);
const newProject = project("a", []);
let projects = [personal, work, other];

document.getElementById("submit").addEventListener("click", function(){
    let data = Array.from(document.getElementsByClassName("info"));
    let task = createToDo(data[0].value, data[1].value, 
            data[2].value,data[3].value,data[4].value);

    //create a module that sorts the different tasks 
    let category = data[5].value;
    if(category == "other"){
        projectCreation();
        console.log("will initiate project creation");
        document.getElementById("submit2").addEventListener("click", function(){
            let newName = document.getElementById("projName").value;
            let newProj = project(newName.value, []);
            projects.push(newProj);
            
        })
    } else {
       let proj= taskSort(category, projects); 
       proj.addTask(task);
       console.log(projects);
    }
})

//next thing would be to find a way of displaying the projects 
//and be able to add different types of projects 
