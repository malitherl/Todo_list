

function projectDisplay(projects){
    const content = document.getElementById("content");
    let prjBar= document.createElement("DIV");
    projects.forEach(element => {
        prjBar.setAttribute("id", "prjBar");
        let p3 = document.createElement("h3");
        p3.textContent = element.getName() + " (" + element.getTasks().length+ ")" ; 
        let tasks = Array.from(element.getTasks());
        tasks.forEach(task => {
             let taskWords = document.createElement("p");
             taskWords.textContent = task;
             taskWords.style.display = "none";
             p3.appendChild(taskWords);
        })
        let p4 = document.createElement("p");
        p4.setAttribute("id","taskCreator");
        p4.textContent = "Add Task(+)";
        p3.appendChild(p4);
        p3.addEventListener("click", function(){
            Array.from(document.querySelectorAll("p")).forEach(words =>{
               
                words.style.display = "block";
            })
        })
        
        p3.addEventListener("click", function(){
         
        })    
        prjBar.appendChild(p3);

        //this is where we get the functionality to create a new project in this panel
       
        content.appendChild(prjBar);

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

function updateProject(){
    let prjBar = document.getElementById("prjBar");
    if(prjBar !== null){
        prjBar.parentElement.removeChild(prjBar);
    }
}

export{projectDisplay, updateProject}