
const initialState = ["redux", "react"]
function changeLibrary(state=initialState, action){
    switch (action.type){
        case "ADD_LIBRARY":
            return [...state, action.payload]
            break;
        case "DELETE_LIBRARY":
            return state
            break;
        default:
            return state
    }
    
    
};
export default changeLibrary;