import  Loader  from './Loader';
import { useBuscadorNumber } from '../context/BuscadorNumberContext';
import CartPersonaje2 from './CartPersonajes2';
import { toast } from 'react-toastify';

function Buscador() {
  const {
    mostrarDatos,
    resetBuscador,
    datos,
    loading,
    name,
    setName,
    limit,
    setLimit,
    info
  } = useBuscadorNumber();

  const hayResultados = datos.length > 0;

  const handleBuscar = () => {
  const cantidad = parseInt(limit);
  const nombreValido = name.trim().length > 0;

  // validaciones
  if (!nombreValido) {
    toast.info("Por favor, escribí un nombre para buscar.");
    return;
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    toast.warning("Ingresá un número válido mayor a 0.");
    return;
  }

  // if (cantidad > info.count) {
  //   toast.warning("No hay tantos personajes disponibles.");
  //   setInfo="";
  //   return;
  // }

  // si todo es válido:
  mostrarDatos(name, cantidad);
};

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Buscador de personajes</h1>

      <section className="flex flex-col md:flex-row gap-3 items-center justify-center mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del personaje..."
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Cantidad"
          className="border p-2 rounded w-full md:w-1/4"
          min="1"
        />
        <button
          onClick={handleBuscar}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        {hayResultados && (
          <button
            onClick={resetBuscador}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Reiniciar
          </button>
        )}
      </section>

      {hayResultados && (
        <p className="text-center text-gray-600 mb-2">
          {datos.length} personaje(s) encontrados
        </p>
      )}

      {hayResultados && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {datos.map((personaje) => (
            <CartPersonaje2 key={personaje.id} personaje={personaje} />
          ))}
        </div>
      )}

      {loading && <Loader />}
    </div>
  );
}


export default Buscador