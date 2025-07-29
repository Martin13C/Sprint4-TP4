import { useCallback, useEffect, useState } from "react";
import { getPersonajes } from "../services/consumoApi";
import { toast } from "react-toastify";


export const PersonajesDataJ = () => {

    const [info, setInfo] = useState({});// Estado para la información de paginación
    const [personajes, setPersonajes] = useState([])// Estado para los personajes obtenidos
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1)// Estado para la página actual
    const [inputValue, setInputValue] = useState("")//Estado para el valor del input



    //funcion para consumir la api con try catch y usando la funcion getCharacters
const getApi = useCallback (async (page) => {
    setLoading(true);
    setError(null);

    try {
        const response = await getPersonajes(page);
        setInfo(response.info);
        setPersonajes(response.results);
    }
    catch (err) {
        setError(err.message);
         toast.error( "Ocurrió un error al obtener los personajes.");
    }
    finally{
      await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(false);
    //   setTimeout(() => {
    //   setLoading(false);
    // }, 2000); 
        // setLoading(false);
    }
},[]);



useEffect(() => {
 
    getApi(page); // llama a la funcion para obtener los personajes
 
//  setInputValue(page);// Sincroniza el input con el valor actual
}, [page, getApi]);

const handleInputChange = (e) => {
  setInputValue(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const pageNumber = Number(inputValue);
  if (isNaN(pageNumber) || pageNumber < 1 || (info && pageNumber > info.pages)) {
    toast.error("Número de página inválido.");
    return;
  }
  setPage(pageNumber); // Actualiza la página con el valor del input
  setInputValue(""); // Limpia el input después de enviar
}

 const handleNext = () => {
    if (info?.next) {
      setPage((prev) => prev + 1);
    }
    else{
      toast.info("Ya estas en la utlima pagina")
    }
  };

  const handlePrev = () => {
    if (info?.prev && page > 1) {
      setPage((prev) => prev - 1);
    }
    else {
      toast.info("Ya estas en la primera pagina")
    }
  };

return {
    getApi,
    // apiExternaData,
    handleNext,
    handlePrev,
    setPage,
  
    page,
    info,
    personajes,
    loading,
    error,

    inputValue,
    setInputValue,
    handleInputChange,
    handleSubmit,
}
}