import { createContext, useState } from "react";

const CityContext = createContext();

const ContextComponents = ({children}) => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    return (
        <CityContext.Provider value={{ city, setCity, state, setState}}>
            {children}
        </CityContext.Provider>
    )
}
export {ContextComponents, CityContext}