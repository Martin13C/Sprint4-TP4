import { createContext, useContext } from "react";
import { BuscadorPruebaj } from "../hook/BuscadoPrueba";

const BuscadorContext = createContext();


export const BuscadorProvider = ({ children }) => {

    const hook = BuscadorPruebaj()
    return (
        <BuscadorContext.Provider value={ hook }>
            {children}
        </BuscadorContext.Provider>
    );
}

export function useBuscador() {
    return useContext(BuscadorContext);
}   