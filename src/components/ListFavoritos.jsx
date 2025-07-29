import React from 'react'
import { useFavorito } from '../context/ListaFavoritosContext';
import CartPersonajes2 from './CartPersonajes2';

function ListFavoritos() {


  const { listaFavoritos, clearFav } = useFavorito();


  const noHayFavoritos = !listaFavoritos || listaFavoritos.length === 0

  return (
    <section className="bg-[] max-w-7xl mx-auto px-2 sm:px-15 py-6">

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        <div className="inline-flex items-center justify-center gap-2">
          <img
            src="/img/FondoDecorativo.png"
            alt="Decoración"
            className="w-15 h-15 sm:w-20 sm:h-20 object-contain"
          />
          Lista de Favoritos
        </div>
      </h1>

      {!noHayFavoritos && (
           <button onClick={clearFav}  className="w-full sm:w-auto mt-6 mb-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Vaciar Favoritos
        </button>
      )
      }


      {noHayFavoritos ? (
        <p className="text-center text-gray-500 text-base sm:text-lg">
          No hay personajes favoritos.
        </p>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {listaFavoritos.map((personaje) => (
            <div key={personaje.id} className="w-full">
              <CartPersonajes2 personaje={personaje} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ListFavoritos