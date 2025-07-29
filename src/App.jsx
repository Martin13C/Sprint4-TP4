import { useState } from "react"
import Bienvenida from "./components/bienvenida"
import { ApiExternaProvider } from "./context/ApiExternaContext"
import { BuscadorProvider } from "./context/BuscadorContext"
import { FavoritosProvider } from "./context/ListaFavoritosContext"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import { BuscadorNumberProvider } from "./context/BuscadorNumberContext"

function App() {
  const [bienvenidaActiva, setBienvenidaActiva] = useState(true);

  return (
    <>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />


      <ApiExternaProvider>
        <BuscadorNumberProvider>
          <BuscadorProvider>
            <FavoritosProvider>
              {bienvenidaActiva ? (
                <Bienvenida onFinalizar={() => setBienvenidaActiva(false)} />
              ) : (
                <Home />
              )}
            </FavoritosProvider>
          </BuscadorProvider>
        </BuscadorNumberProvider>
      </ApiExternaProvider>
    </>
  )
}

export default App
