import Layout from "../components/layout"
import Marcas from "../components/directorio/marcas"
import Nuestrodirectorio from "../components/directorio/nuestrodirectorio"

function Directorio() {
  return (
    <Layout
    title={'Directorio de Marcas'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
    <Marcas/>
    <Nuestrodirectorio/>
    </Layout>

  )
}

export default Directorio