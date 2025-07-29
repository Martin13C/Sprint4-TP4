import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LisFavJ = () => {

  const [listaFavoritos, setListaFavoritos] = useState(() => {
   try {
      const stored = localStorage.getItem("favoritos");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      toast.error("Error al cargar favoritos del almacenamiento.");
      return [];
    }
  });

  // sincronizar lista cada vez que se actualiza
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
  }, [listaFavoritos]);


  //   agrega a la lista de favoritos y evita duplicados
  const addFav = (personaje) => {
  
    setListaFavoritos((prev) => {
      // Verifica si el personaje ya está en la lista
      const existe = prev.some((fav) => fav.id === personaje.id);
      if (!existe) {
         toast.success(`${personaje.name} agregado a favoritos.`);
        // Si no está, lo agrega
        return [...prev, personaje];
      }
      else {
        toast.info(`${personaje.name} ya está en favoritos.`);
      }
      // Si ya está, no hace nada
      return prev;
    });
  };

  // quita de la lista de favoritos
  const removeFav = (id) => {
    setListaFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  toast.info("Peronaje eliminado de favoritos.");
  };

  // limpia la lista de favoritos
  const clearFav = () => {
    setListaFavoritos([]);
    toast.info("Todos los favoritos fueron eliminados.");
  };


   // verificar si un personaje esta en favoritos por su ID
  const esFavorito = (id) => {
    return listaFavoritos.some((fav) => fav.id === id);
  };

  // cambia el estado de favorito (agrega o elimina)
  const toggleFavorito = (personaje) => {
    setListaFavoritos((prev) => {
      const existe = prev.some((fav) => fav.id === personaje.id);
      if (existe) {
        toast.info(`${personaje.name} eliminado de favoritos.`);
        return prev.filter((fav) => fav.id !== personaje.id);
      } else {
        toast.success(`${personaje.name} agregado a favoritos.`);
        return [...prev, personaje];
      }
    });
  };

  return {
    listaFavoritos,
    addFav,
    removeFav,
    clearFav,
    esFavorito,
    toggleFavorito,
  };
};
