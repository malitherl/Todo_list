import { fillOut } from "./DOMHandler";
import { createToDo } from "./module1";
import {project} from "./module2";

//this will be for projects, and there can be three categories for projects 
//we need to give the user the ability to choose which project they would like to add to dos to 

const personal = project("personal", tasks);
const work = [];
const other = [];
let projects = [personal, work, other];
//this will be for little tasks 
fillOut();
let tasks = [];

const personal = project("personal", tasks);
const newProject = project("a", tasks);
console.log(newProject.getTasks());
document.getElementById("submit").addEventListener("click", function(){
    let data = Array.from(document.getElementsByClassName("info"));
    let task = createToDo(data[0].value, data[1].value, 
            data[2].value,data[3].value,data[4].value);
    newProject.addTask(task); 
     let category = data[5].value;
    if(category == "personal"){
        personal.push(task);
    } else if (category == "work"){
        work.push(task);
    } else {
        other.push(task);
    } 
})

//next thing would be to find a way of displaying the projects 
//and be able to add different types of projects 
