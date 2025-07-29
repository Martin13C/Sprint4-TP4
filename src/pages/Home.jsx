import Navbar from '../components/Navbar'
import ListPersonajes from '../components/ListPersonajes'
import ListFavoritos from '../components/ListFavoritos'
import BuscadorPrueba from '../components/BuscadorPrueba'
import Footer from '../components/Footer'
import Buscador from '../components/Buscador'
import RadmonSection from '../components/RadmonSection'
import { RandomProvider } from '../context/RandomContext'

function Home() {

  return (
    <div className='bg-gray-200'>
      <Navbar />
      <ListPersonajes />
      <ListFavoritos />
      <BuscadorPrueba />

      <RandomProvider>
        <RadmonSection />
      </RandomProvider>

      <Buscador />
      <Footer />
    </div>
  )
}

export default Home