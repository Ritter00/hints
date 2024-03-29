
const initialState = ["angular"]
function changeFramework(state=initialState, action){
    switch (action.type){
        case "ADD_FRAMEWORK":
            return [...state.frameworks, action.payload]
            break;
        case "DELETE_FRAMEWORK":
            return state
            break;
        default:
            return state
    }
};
export default changeFramework;