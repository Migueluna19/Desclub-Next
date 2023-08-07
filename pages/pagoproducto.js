import Layout from "../components/layout"
import Datosfacturacion from "../components/tarjetaDescluB/datosfacturacion"
import styles from "../styles/fondo.module.scss"

function Pagoproducto() {
  return (
    <Layout
    title={'Pago de Producto'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
      <div className={styles.contenedorfondo}>
    <Datosfacturacion/>
    </div>
    </Layout>

  )
}

export default Pagoproducto