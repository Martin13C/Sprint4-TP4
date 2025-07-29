import axios from "axios";
import { toast } from "react-toastify";

// const API_BASE = "https://rickandmortyapi.com/api";
const API_BASE = import.meta.env.VITE_API_URL

// Función para obtener personajes por página
export const getPersonajes = async (page) => {
  const url = `${API_BASE}/character?page=${page}`;
  try {
    const response = await axios.get(url);
    toast.success("Datos de personajes con exito");
    return response.data;
  } catch (error) {
    const status = error.response.status;
    switch (status) {
      case 404:
        toast.error(`${status} No se encontraron personajes.`);
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
    }
    throw error;
  }
};

// Funcion para buscar personajes por nombre
// prueba
export const getPersonajesName2 = async (name) => {
  const url = `${API_BASE}/character?name=${name}`;
  // const response = await axios.get(url);
  // return response.data;
  try {
    const response = await axios.get(url);
    toast.success(`Datos de ${name} recolectados con exito`);
    return response.data;
  } catch (error) {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.info("No se encontraron personajes con ese nombre.");
        break;
      case 429:
        toast.warning("Demasiadas solicitudes. Esperá un momento.");
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
      default:
        toast.error("Error inesperado al buscar personajes.");
        break;
    }
    throw error;
  }
};

// Funcion para obtener personajes por URL
// Funcion para cargar mas personajes cuando hay una paginacion
export const getPersonajesByUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.error("Página no encontrada.");
        break;
      case 429:
        toast.warning("Demasiadas solicitudes. Esperá un momento.");
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
      default:
        toast.error("Ocurrió un error al obtener la siguiente página.");
        break;
    }

    throw error;
  }
};

// 🔁 Busca por nombre y acumula hasta `limite` resultados (paginar si es necesario)
export const getPersonajesConLimite = async (nombre, limite = null) => {
  try {
    let acumulados = [];
    let url = `${API_BASE}/character?name=${encodeURIComponent(nombre.trim())}`;
    let continuar = true;
    let totalCount = 0; // nuevo

    while (url && continuar) {
      const response = await axios.get(url);
      const { results, info } = response.data;

      acumulados = [...acumulados, ...results];

      // solo una vez tomamos el count
      if (totalCount === 0) {
        totalCount = info.count;
      }

      if (limite && acumulados.length >= limite) {
        continuar = false;
      } else {
        url = info.next;
      }
    }

    const final = limite ? acumulados.slice(0, limite) : acumulados;
    toast.success(`Se cargaron ${final.length} personaje(s)`);
    return {
      results: final,
      info: {
        count: totalCount,
      },
    }
  } catch (error) {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.info("No se encontraron personajes con ese nombre.");
        break;
      case 429:
        toast.warning("Demasiadas solicitudes. Esperá un momento.");
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
      default:
        toast.error("Error inesperado al buscar personajes.");
        break;
    }

    throw error;
  }
};

export const getPersonajesPorIds = async (ids) => {
  try {
    const response = await axios.get(`${API_BASE}/character/${ids.join(",")}`);
    const data = Array.isArray(response.data) ? response.data : [response.data];
    return data;
  } catch (error) {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.info("No se encontraron personajes con ese nombre.");
        break;
      case 429:
        toast.warning("Demasiadas solicitudes. Esperá un momento.");
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
      default:
        toast.error("Error inesperado al buscar personajes.");
        break;
    }

    throw error;
  }
};

export const getCantidadTotalPersonajes = async () => {
  try {
    const response = await axios.get(`${API_BASE}/character`);
    return response.data.info.count; // cantidad total de personajes disponibles
  } catch (error) {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.info("No se encontraron personajes con ese nombre.");
        break;
      case 429:
        toast.warning("Demasiadas solicitudes. Esperá un momento.");
        break;
      case 500:
        toast.error("Error del servidor. Intenta más tarde.");
        break;
      default:
        toast.error("Error inesperado al buscar personajes.");
        break;
    }

    throw error;
  }
};
