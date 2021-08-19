const createToDo = (title, description, dueDate, priority, completionStatus) => {


    //i want to be able to create a string that returns all of these values 
   
    //it's just easier to parse an array i think 

        const getVariables = () => {
            return `${title}, ${description}, ${dueDate}, ${priority}, ${completionStatus}`;
        }

    

        const changePriority = (newPriority) => {
            priority= newPriority;
        }

        const changeStatus = (newComplete) =>{
            completionStatus = newComplete;
        }

        return {changePriority, changeStatus, getVariables}; 

}

export {createToDo}