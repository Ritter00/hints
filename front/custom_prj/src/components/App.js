import React from "react";      // импортируем React !!!обязательно
import 'bootstrap/dist/css/bootstrap.min.css'  //подключим стили для бутстрап
import "../styles/App.css"      // импортируем стили 
import Header from "./Header"
import Main from "./Main"

// создаем компонент (класс), называется также как и этот файл
// функция render возвращает JSX
/*
class App extends React.Component {
    render(){
        return (
            <React.Fragment>  
                <Header />
                <Main />
            </React.Fragment>
        );
    }
}
*/
// в функциях можно передавать переменные для компонентов , также и с функциями
function App (){
    let classNameBtn = 'btn123'
    let someVar = 1
    return (
        <>  
            <Header classNameBtn ={classNameBtn} someVar={someVar} />
            <Main />
        </>
    );

}
// <React.Fragment></React.Fragment> - чтоба можно было делать элементы параллельными, если без него , то д.б. вложенность или так '<> </>'

// <Header /> вставляем новый компонент с названием Header

export default App;  // экспортируется стандартным способом 
