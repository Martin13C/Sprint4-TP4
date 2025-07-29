import { createContext, useContext } from "react";
// import { BuscadorJ } from "../hook/Buscador";
// import { Buscador2J } from "../hook/Buscador2";
import { Buscadorj } from "../hook/Buscado";

const BuscadorNumberContext = createContext();


export const BuscadorNumberProvider = ({ children }) => {

    const hook = Buscadorj()
    return (
        <BuscadorNumberContext.Provider value={ hook }>
            {children}
        </BuscadorNumberContext.Provider>
    );
}

export function useBuscadorNumber() {
    return useContext(BuscadorNumberContext);
}   