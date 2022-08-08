import React , { useState }from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';  // подключим бутстрап для таблиц
import Country from "./Country"
import '../styles/Countries.css'



function Countries () {
    let [countries, setCountries] = useState([])
    if(!countries.length){
        axios.get('https://restcountries.com/v2/all').then(res => {
            setCountries(res.data)
            console.log(res)
        } )
    }
    
    return (
        <Table striped bordered hover className="countries">
            <thead><tr><th>Name</th><th>Capital</th><th>Button</th></tr></thead>
            <tbody>
                {countries.map(country => country.capital? 
                <Country key={country.alpha3Code} name={country.name} capital={country.capital} />:
                <Country key={country.alpha3Code} name={country.name} />
                )}
            </tbody>
        </Table>
    )
}

export default Countries;