let count= 0;

export default (state = count , action) => {
    switch (action.type) {
        case "Increment": 
            count ++
            break;
        case "Decrement": 
            count --
            break;
        default:
            count;
    }
    return count;  
}