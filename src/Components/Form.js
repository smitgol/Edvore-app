import React, {useState, useContext} from 'react'
import {FormContainer, FilterLabel, FiterSelect} from "../styles/gobalStyles";
import {CityContext} from "../context";


const Form = ({city_list, state_list}) => {
    const {city, setCity, setState, state} = useContext(CityContext)
    
    return (
        <React.Fragment>
            <FormContainer>
                <FilterLabel>Filter</FilterLabel>
                <FiterSelect onChange={(event)=> {setState(event.target.value)}}>
                    <option selected hidden>State</option>
                    <option value="">All</option>
                    {state_list.map((state)=> {return <option value={state}>{state}</option>})}
                </FiterSelect>
                <FiterSelect onChange={(event)=> {setCity(event.target.value)}}>
                <option selected hidden>City</option>
                    <option value="">All</option>
                    {city_list.map((city)=> {return <option value={city}>{city}</option>})}
                </FiterSelect>
            </FormContainer>
        </React.Fragment>
    )
}

export default Form;