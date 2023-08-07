import Layout from "../components/layout"
import styles from "../styles/fondo.module.scss"
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
    <div className={styles.contenedorfondo}>
    <Filtros/>
    <Resultadocupon/>
    </div>
    </Layout>

  )
}

export default Resultado