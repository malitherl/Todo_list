const formHandler = () => {
    let data = [];
    const setData = (array) => {
        data= array;
    }
    const getData = () => {
        return data;
    }
    return {setData, getData}
};

export {formHandler}