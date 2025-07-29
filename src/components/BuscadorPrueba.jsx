import  Loader  from './Loader';
import { useBuscador } from '../context/BuscadorContext';
import CartPersonaje2 from './CartPersonajes2';

function BuscadorPrueba() {
    const { mostrarDatos, cargarMasPersonajes, datos, infoPag, loading, name, setName, resetBuscador } = useBuscador();

    // validaciones
    const hayResultados = datos.length > 0;
    const hayMasPaginas = infoPag.next !== null;

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Buscador de personajes</h1>

            <section className="flex flex-col md:flex-row gap-3 items-center justify-center mb-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Buscar personaje..."
                    className="border p-2 rounded w-full md:w-1/2"
                />
                <button
                    onClick={() => mostrarDatos(name)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Buscar
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
                    {infoPag.count} personaje(s) encontrados
                </p>
            )}

            {/* resultados */}
            {hayResultados && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {datos.map((personaje) => (
                        <CartPersonaje2 key={personaje.id} personaje={personaje} />
                    ))}
                </div>
            )}

            {/* {loading && <Loader />} */}

            {/* Botón cargar más */}
            {hayResultados && hayMasPaginas && (
                <div className="flex justify-center">
                    <button
                        onClick={cargarMasPersonajes}
                        disabled={loading}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
                    >
                        {loading ? 'Cargando...' : 'Cargar más'}
                    </button>
                </div>
            )}
            {loading && <Loader />}

        </div>
    );
}


export default BuscadorPrueba