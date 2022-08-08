import React, { Component } from "react";
import "../styles/Main.css"
import Countries from "./Countries";
import Alerts from "./Alerts";


let text1 = 'Some text from alert!'
let text2 = <b>and it</b>
class Main extends Component {
    
    render(){

        return(
            <main>
                <h1>Привет, бро!</h1>
                <Alerts>{text1} {text2}</Alerts>
                <Countries />
            </main>
        )
    }
}
// передать что-то можно между элементами компонента
export default Main;