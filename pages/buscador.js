import Layout from "../components/layout"
import styles from "../styles/fondo.module.scss"
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
    <div className={styles.contenedorfondo}>
    <Filtros/>
    <Resultados/>
    </div>
    </Layout>

  )
}

export default Buscador