
function projectDisplay(projects){
    const content = document.getElementById("content");
    projects.forEach(element => {
        let prjBar= document.createElement("DIV");
        let p3 = document.createElement("h3");
        p3.textContent = element.getName() + " (" + element.getTasks().length+ ")" ;        
        prjBar.appendChild(p3);
        content.appendChild(prjBar);
        //each project heading needs to be a dropdown menu that displays its tasks 
            //and each task needs a button that would allow the user to modify it and or delete it 
    });

}

export{projectDisplay}