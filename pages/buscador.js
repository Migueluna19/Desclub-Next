import Layout from "../components/layout"
import Marcas from "../components/directorio/marcas"
import Filtros from "../components/buscador/filtros"
import Resultados from "../components/buscador/resultados"

function Buscador() {
  return (
    <Layout
    title={'Buscador de Marcas'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
    <Marcas/>
    <Filtros/>
    <Resultados/>
    </Layout>

  )
}

export default Buscador