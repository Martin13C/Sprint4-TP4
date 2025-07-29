import { useState } from "react";
import { getPersonajesByUrl, getPersonajesName2 } from "../services/consumoApi";
import { toast } from "react-toastify";

export const BuscadorPruebaj = () => {
  const [datos, setDatos] = useState([]); //valores de personajes recogidos por la peticion
  const [infoPag, setInfoPag] = useState({}); // valores de paginación recogidos por la petición
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(""); // Estado para el nombre a buscar, se puede usar para buscar por nombre

  const mostrarDatos = async (name) => {
    const nameTrimmed = name.trim();

    if (!nameTrimmed) {
      toast.info("Por favor, escribí un nombre para buscar.");
      return;
    }

    setLoading(true);
    setDatos([]);
    try {
      const response = await getPersonajesName2(name);
      setDatos(response.results);
      setInfoPag(response.info);
    } catch (err) {
      toast.error("Error al buscar personajes.");
      setDatos([]);
      setName("")
    } finally {
      setLoading(false);
    }
  };

  const cargarMasPersonajes = async () => {
    if (infoPag.next == null) {
      toast.info("No hay más personajes para cargar.");
      return; // si no hay mas paginas, no hacer nada
    }
    setLoading(true);
    try {
      const response = await getPersonajesByUrl(infoPag.next);
      setDatos((prevDatos) => [...prevDatos, ...response.results]);
      setInfoPag(response.info);
    } catch (err) {
       toast.error("Error al cargar más personajes.");
    } finally {
      setLoading(false);
    }
  };

  const resetBuscador = () => {
    setName("");
    setDatos([]); // ← esta línea limpia los resultados
    setInfoPag({}); // opcional: limpia la info de paginacion
    toast.info("Buscador Reiniciado")
  };
  // mostrarDatos("rick");

  //   // Para buscar automáticamente al montar el hook:
  //   useEffect(() => {
  //     // mostrarDatos("rick");
  //     mostrarDatos("rick");
  //     // console.log("ESTADO datos actualizado:", datos);
  //   }, []);
  //   // <-- el array vacío hace que sólo se llame UNA VEZ

  return {
    resetBuscador,
    mostrarDatos,
    cargarMasPersonajes,
    datos,
    infoPag,
    loading,
    name,
    setName,
  };
};
