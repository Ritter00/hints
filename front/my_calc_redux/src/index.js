import React, { createElement } from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import ReduxApp from "./components/AppRedux";

import { createStore, applyMiddleware, compose } from 'redux'       // compose для обьединения нескольки функций
import reducers from "./redux/reducers";
import { logging } from "./redux/middleware/logging";
// можно инициализировать массив для стора и передать в редьюсер
const initialState = {
    libraries: ["redux", "react"],
    frameworks: ["angular"]
}//["redux", "react"] 
// создаем новое хранилище
//const store = createStore(reducers, applyMiddleware(logging));  // второй необязательный аргумент мидлвар
const store = createStore(reducers, compose(applyMiddleware(logging), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// функция редьюсер, меняет хранилище
function changeState(state=initialState, action){
    switch (action.type){
        case "ADD_LIBRARY":
            return {
                ...state,
                libraries: [...state.libraries, action.payload],
            }
            break;
        case "DELETE_LIBRARY":
            return {
                 ...state,
                libraries: [...state.libraries, action.payload],
            }
            break;
        case "ADD_FRAMEWORK":
            return {
                ...state,
                frameworks: [...state.frameworks, action.payload],
            }
            break;
        case "DELETE_FRAMEWORK":
            return {
                 ...state,
                 frameworks: [...state.frameworks, action.payload],
            }
            break;
        default:
            return state
    }
    
    
};
// подписка и вывод инфы
/*store.subscribe(()=>{
    console.log('подписка',store.getState())
    const items = document.querySelector('.test-ul')
    items.innerHTML = ''
    document.querySelector('.test-input').value = ''
    store.getState().map(item => {
        const li = document.createElement('li');
        li.textContent =item;
        items.appendChild(li)
    })
});*/
// создание и обработка action
//store.dispatch({type:'WRITE', payload:"some"});
//store.dispatch({type:'WRITE', payload:"any"});

//console.log(store)
// выводим результат на страницу html
const testButton = document.querySelector('.test-button')
/*testButton.addEventListener('click',()=>{
const val = document.querySelector('.test-input').value
console.log('input=', val)
store.dispatch({type:'WRITE', payload:val});
})*/
//ReactDOM.render(<App/>, document.getElementById("root"));
ReactDOM.render(
<Provider store={store}>
<ReduxApp />
</Provider>, document.getElementById("root"));
