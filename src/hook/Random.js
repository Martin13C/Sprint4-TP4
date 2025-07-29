import { useState } from "react";
import { getCantidadTotalPersonajes, getPersonajesPorIds } from "../services/consumoApi";
import { toast } from "react-toastify";

export const RandomJ = () => {

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerPersonajesAleatorios = async (cantidad = 6) => {
    setLoading(true);
    setDatos([]);

    try {
      const total = await getCantidadTotalPersonajes();

      const idsAleatorios = new Set();
      while (idsAleatorios.size < cantidad) {
        const id = Math.floor(Math.random() * total) + 1;
        idsAleatorios.add(id);
      }

      const personajes = await getPersonajesPorIds([...idsAleatorios]);
      setDatos(personajes);
    } catch (err) {
      toast.error("Error al obtener personajes aleatorios", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    datos,
    loading,
    obtenerPersonajesAleatorios,
  };
};
