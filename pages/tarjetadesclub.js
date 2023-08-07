import Layout from "../components/layout"
import styles from "../styles/fondo.module.scss"
import Beneficiosprincipal from "../components/tarjetaDescluB/beneficiosprincipal"
import Appytarjeta from "../components/tarjetaDescluB/appytarjeta"
import Afiliar from "../components/tarjetaDescluB/afiliar"
import Sumamarca from "../components/tarjetaDescluB/sumamarca"
import Descubre from "../components/tarjetaDescluB/descubre"


function tarjetadesclub() {
  return (
    <Layout
    title={'Tarjeta Desclub'}
    desctiption={'Tarjeta de Descuentos y Mucho más'}
    >
   <div className={styles.contenedorfondo}>
     <Beneficiosprincipal/> 
     </div>
      <Appytarjeta/>
      <div className={styles.contenedorfondo}>
      <Descubre/>
      </div>
      <Afiliar/>
      <div className={styles.contenedorfondo}>
      <Sumamarca/>
      </div>
    </Layout>
  )
}

export default tarjetadesclub