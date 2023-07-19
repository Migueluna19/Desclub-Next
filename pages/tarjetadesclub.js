import Layout from "../components/layout"
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
      <Beneficiosprincipal/>
      <Appytarjeta/>
      <Descubre/>
      <Afiliar/>
      <Sumamarca/>
    </Layout>

  )
}

export default tarjetadesclub