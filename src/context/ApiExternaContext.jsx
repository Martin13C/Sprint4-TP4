import { createContext, useContext } from "react";
import { PersonajesDataJ } from "../hook/PersonajesData";

const ApiExternaContext = createContext();

export const ApiExternaProvider = ({ children }) =>{
    
    const hook = PersonajesDataJ();

    return (    
        <ApiExternaContext.Provider value={ hook }>
            {children}  
        </ApiExternaContext.Provider>
    )
}

export function useApiExterna() {
    return useContext(ApiExternaContext);
}