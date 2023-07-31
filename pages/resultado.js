import Layout from "../components/layout"
import Marcas from "../components/directorio/marcas"
import Filtros from "../components/buscador/filtros"
import Resultadocupon from "../components/buscador/resultadocupon"


function Resultado() {
  return (
    <Layout
    title={'Resultado de Marcas'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
    <Marcas/>
    <Filtros/>
    <Resultadocupon/>
    </Layout>

  )
}

export default Resultado