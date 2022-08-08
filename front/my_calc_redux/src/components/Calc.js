import React from "react";
import "../styles/Calc.css"
import Button from 'react-bootstrap/Button';
import { number } from "prop-types";

function Calc(){
    let [output, setOutput] = React.useState('')
    let [output1, setOutput1] = React.useState('')
    let [znak, setznak] = React.useState('')
    let [rav, setRav] = React.useState(false)
    let [res, setRes] = React.useState('')
    
    const Res = function(){
        //let result = 'Ooops'number(output) + number(output1)
        setOutput(eval(output + znak + output1))
        setOutput1('')
        setznak('')
        setRav(true)


    };
    const Res1 = function(){
        setOutput('')
        setOutput1('')
        setznak('')

    }
    
    return(
        <>
            <h1>My calc!</h1>
            <div id="calc-div">
                <div className="screen-div">{output}{znak}{output1}</div>
                <div>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'1'):setOutput(output +'1')}>1</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'2'):setOutput(output +'2')}>2</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'3'):setOutput(output +'3')}>3</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'4'):setOutput(output +'4')}>4</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'5'):setOutput(output +'5')}>5</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'6'):setOutput(output +'6')}>6</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'7'):setOutput(output +'7')}>7</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'8'):setOutput(output +'8')}>8</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'9'):setOutput(output +'9')}>9</Button>
                    <Button variant="info" onClick={()=> znak? setOutput1(output1 +'0'):setOutput(output +'0')}>0</Button>
                    <Button variant="warning" onClick={()=>setznak('+')}>+</Button>
                    <Button variant="warning" onClick={()=>setznak('-')}>-</Button>
                    <Button variant="warning" onClick={()=>setznak('/')}>/</Button>
                    <Button variant="warning" onClick={()=>setznak('*')}>*</Button>
                    <Button variant="danger" onClick={Res}>=</Button>
                    <Button variant="danger" onClick={Res1}>clear</Button>
                    

                </div>
            </div>
        </>
    )
}

export default Calc;