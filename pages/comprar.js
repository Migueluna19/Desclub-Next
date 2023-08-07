import Layout from "../components/layout"
import Adquieretarjeta from "../components/tarjetaDescluB/adquieretarjeta"
import Eligetarjeta from "../components/tarjetaDescluB/eligetarjeta"
import styles from "../styles/fondo.module.scss"

function Comprar() {
  return (
    <Layout
    title={'Compra'}
    desctiption={'Compra tu tarjeta de Descuentos'}
    >
      <div className={styles.contenedorfondo}>
    <Adquieretarjeta/>
    <Eligetarjeta/>
    </div>
    </Layout>

  )
}

export default Comprar