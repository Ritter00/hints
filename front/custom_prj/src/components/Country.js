import React , { useState }from "react";
import Button from 'react-bootstrap/Button';  // подключим бутстрап для кнопок
import "../styles/Country.css";
import PropTypes from "prop-types";

function Country (props){
    
    let [selected, setselected] = useState(false)
    let selectClass = selected ? 'selected-button' : ''
    return (
        <tr className={selectClass}>
            <td>{props.name}</td>
            <td>{props.capital}</td>
            {selected ? 
            <td><Button variant="outline-danger"  onClick={()=> setselected(false)}>Remove</Button>{' '}</td>:
            <td><Button variant="outline-success" onClick={()=> setselected(true)}>Add</Button>{' '}</td>
            
            }
            
        </tr>
    )
}
// заглушка, если нет такой переменной
Country.defaultProps = {
    capital: 'Not available'
}
// для валидации переменных в props. К какому типу должны относиться
Country.propTypes = {
    name: PropTypes.string, // если один тип
    // если переменная, может быть нескольких типов
    capital: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ])
}
// <tr key={props.key}> key д.б., уникальным полем, для оптимизации
export default Country;