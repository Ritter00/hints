import React, { Component, useState } from "react";
import "../styles/Header.css"




function Header(props){
    let buttonName = 'Кнопка'
    let buttonName1 = 'Кнопуля'
    console.log(props)
    console.log(props.someVar) //доступ к переданной переменной
    /* let [item, someFunction] = useState(0)
        создаём переменную item и функцию someFunction, useState(0) - это React следит за переменной item, в скобках значение
        потом, при клике меняем переменную, с помщью созданной фунуции someFunction(item + 1)
    */
    let [item, someFunction] = useState(0)  // следим и отображаем переменную item

    const clickButton = () =>{
        someFunction(item + 1)
        console.log("Нажми на кнопку")
    }
    return (
        <header>This is header
            <button className={props.classNameBtn} onClick={clickButton}>{ item < 10 ?  buttonName : buttonName1}, Уже: {item}</button>
        </header>
    )
}

export default Header;