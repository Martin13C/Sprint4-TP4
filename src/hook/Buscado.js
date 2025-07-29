import { useState } from "react";
import { getPersonajesConLimite } from "../services/consumoApi";
import { toast } from "react-toastify";

export const Buscadorj = () => {
   const [datos, setDatos] = useState([]);
   const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(""); // nuevo input

  const mostrarDatos = async (nombre, limite = null) => {
    const nameTrimmed = nombre.trim();

    if (!nameTrimmed) {
      toast.info("Por favor, escribí un nombre para buscar.");
      return;
    }

    setLoading(true);
    setInfo({})
    setDatos([]);
    try {
      const resultados = await getPersonajesConLimite(nameTrimmed, limite);
      setDatos(resultados.results);
      setInfo(resultados.info);
    } catch (err) {
      setName("");
    } finally {
      setLoading(false);
    }
  };

  const resetBuscador = () => {
    setName("");
    setLimit("");
    setDatos([]);
    toast.info("Buscador Reiniciado");
  };

  return {
    mostrarDatos,
    resetBuscador,
    datos,
    loading,
    name,
    setName,
    limit,
    setLimit,
    info
  };
};