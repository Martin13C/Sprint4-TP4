import { createContext, useContext } from "react";
import { LisFavJ } from "../hook/LisFav";

const ListaFavoritosContext = createContext();


export const FavoritosProvider = ({ children }) => {

    const hook = LisFavJ()
    return (
        <ListaFavoritosContext.Provider value={ hook }>
            {children}
        </ListaFavoritosContext.Provider>
    );
}

export function useFavorito() {
    return useContext(ListaFavoritosContext);
}   