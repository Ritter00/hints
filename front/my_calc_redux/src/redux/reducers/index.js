import { combineReducers } from "redux";
import changeFramework from "./frameworks";
import changeLibrary from "./libraries";

// обьединяем редьюсеры
export default combineReducers({
    changeFramework,
    changeLibrary
});