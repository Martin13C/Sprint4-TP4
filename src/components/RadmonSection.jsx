import { useRandom } from '../context/RandomContext';
import Loader from './Loader';
import CartPersonajes2 from './CartPersonajes2';
import { motion } from 'framer-motion'

function RadmonSection() {

    const {
        datos,
        loading,
        obtenerPersonajesAleatorios,
    } = useRandom();

    return (
        <div className="bg-[#39FF14] p-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
                Personajes Aleatorios
            </h2>

            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => obtenerPersonajesAleatorios(6)}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                    Obtener Aleatorios
                </button>
            </div>

            {loading && <Loader />}

            {!loading && datos.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {datos.map((personaje) => (
                        <CartPersonajes2 key={personaje.id} personaje={personaje} />
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default RadmonSection