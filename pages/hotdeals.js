import Layout from "../components/layout"
import Hotdeals from "../components/hotdeals/hotdeals"
import Slidercupones from "../components/hotdeals/slidercupones"
import Cupones from "../components/hotdeals/cupones"
import styles from "../styles/fondo.module.scss"

function HotDeals() {
  return (
    <Layout
    title={'Hot Deals'}
    desctiption={'Nuestras Mejores Ofertas'}
    >
      <div className={styles.contenedorfondo}>
    <Hotdeals/>
    <Slidercupones/>
    <Cupones/>
    </div>
    </Layout>
 
  )
}

export default HotDeals