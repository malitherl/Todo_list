
function fillOut (){
    const content = document.getElementById("content");
    let h3 = Array.from(document.getElementsByClassName("taskCreator"));
    console.log(h3);
    //we create a form here so we can fill out todo elements 
    h3.forEach(element => {
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

        const dropdown = document.createElement("select");
        dropdown.setAttribute("class", "info");
        const option = document.createElement("option");
        option.setAttribute("value", "personal");
        option.textContent= "Personal";

        const option1 = document.createElement("option");
        option1.setAttribute("value", "work");
        option1.textContent ="Work";

        const option2 = document.createElement("option");
        option2.setAttribute("value", "other");
        option2.textContent= "Create New...";

        dropdown.appendChild(option);
        dropdown.appendChild(option1);
        dropdown.appendChild(option2);

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
        form.appendChild(dropdown);
        form.appendChild(label6);
    
        form.style.display= "none";    

    element.appendChild(form);

    });

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





export {fillOut, projectCreation}