import { BadgeCheck, BadgeX, HelpCircle, Star } from 'lucide-react';
import { useFavorito } from '../context/ListaFavoritosContext';

function CartPersonajes2({ personaje }) {

  const { esFavorito, toggleFavorito } = useFavorito();

  if (!personaje)
    // Si no hay personajes, no renderizamos nada
    return null;

  return (
  
    <div className="bg-gray-100 border relative group rounded-xl shadow-lg overflow-hidden
                 flex flex-col items-center p-6 max-w-xs mx-auto
                 hover:shadow-2xl transition-shadow duration-300 min-h-[400px]">
      <img
        src={personaje.image}
        alt={personaje.name}
        className="w-48 h-48 object-cover rounded-full shadow-lg"
      />
      <h2 className="text-2xl font-bold text-gray-900">{personaje.name}</h2>
     

      {/* Detalles */}
      <ul className="mt-3 space-y-1 text-gray-700 text-sm w-full ">
        <li>
          <strong>Especie:</strong> {personaje.species}
        </li>
        <li>
          <strong>Estado:</strong> {personaje.status}
          {personaje.status === 'Dead' && (
            <BadgeX className="inline-block ml-2 w-5 h-5 text-red-500" />
          )}
          {personaje.status === 'Alive' && (
            <BadgeCheck className="inline-block ml-2 w-5 h-5 text-green-500" />
          )}
          {personaje.status === 'unknown' && (
            <HelpCircle className="inline-block ml-2 w-5 h-5 text-gray-500" />
          )}
        </li>
        <li>
          <strong>Género:</strong> {personaje.gender}
        </li>
      </ul>

      <button
        onClick={() => toggleFavorito(personaje)}
        className="absolute top-2 right-2"
        aria-label="Agregar o quitar de favoritos"
      >
        <Star
          size={24}
          className={`transition-colors ${esFavorito(personaje.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
            }`}
        />
      </button>
    </div>
  );
};

export default CartPersonajes2