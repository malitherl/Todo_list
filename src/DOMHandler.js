
function fillOut (){
    const content = document.getElementById("content");

    //we create a form here so we can fill out todo elements 

    const form = document.createElement("form");
        const label1 = document.createElement("label");
        label1.textContent = "Title: ";
        const input1= document.createElement("input");
        input1.setAttribute("type", "text");
        const label2 = document.createElement("label");
        label2.textContent= "Description: ";
        const input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        const label3 = document.createElement("label");
        label3.textContent= "Due Date: ";
        const input3 = document.createElement("input");
        input3.setAttribute("type", "date");
        const label4 = document.createElement("label");
        label4.textContent= "Priorty: ";
        const input4 = document.createElement("input");
        input4.setAttribute("type", "number");
        input4.setAttribute("min", "1");
        input4.setAttribute("max", "5");
        const label5= document.createElement("label");
        label5.textContent="Completed?";
        const input5 = document.createElement("input");
        input5.setAttribute("type", "checkbox");
        input5.setAttribute("value", "complete");

        const label6 = document.createElement("button");
        label6.textContent="Submit";
        label6.setAttribute("type", "button");
        label6.addEventListener("click", function(){
            let data = [];
            for(let i=0; i<form.length;i++){
                data.push(form[i].value);
            }
            return data;
        });
        console.log(label6.value);
  



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
    content.appendChild(form);



};

export {fillOut}