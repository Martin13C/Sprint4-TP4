import Loader from './Loader';
import { useApiExterna } from '../context/ApiExternaContext';
import CartPersonajes2 from './CartPersonajes2';
import { motion } from 'framer-motion'

function ListPersonajes() {

    const { personajes, info, page, inputValue, handleInputChange, handleSubmit, handleNext, handlePrev, loading } = useApiExterna();


    return (
        <main className='min-h-screen text-black py-8 px-2 lg:px-40 ' >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center text-4xl font-bold mb-6'>Todos los Personajes</motion.h1>

            <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl mx-auto mb-6 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-center gap-3"
                >
                    <input
                        type="number"
                        // min="1"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="Número de página"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded transition"
                    >
                        Ir a página
                    </motion.button>
                </form>
            </motion.section>

            <div className="text-center text-sm sm:text-base md:text-lg text-gray-800 font-light break-words">
                Página <span className="font-semibold">{page}</span> de <span>{info?.pages || '...'}</span>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-4 text-base mb-10 px-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrev}
                    disabled={page <= 1}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Anterior
                </motion.button>
                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!info?.next}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Siguiente
                </motion.button>
            </motion.section>

            {loading && <Loader />}
            {!loading &&
                <motion.section
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {personajes.map((personaje, index) => (
                        <motion.div
                        key={personaje.id} className="p-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                        >
                            <CartPersonajes2 personaje={personaje} />
                        </motion.div>
                    ))}
                </motion.section>
            }
        </main>
    )
}
export default ListPersonajes