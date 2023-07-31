import Layout from "../components/layout"
import Adquieretarjeta from "../components/tarjetaDescluB/adquieretarjeta"
import Eligetarjeta from "../components/tarjetaDescluB/eligetarjeta"
import Personaliza from "../components/tarjetaDescluB/personaliza"
import Pedido from "../components/tarjetaDescluB/pedido"

function Comprar() {
  return (
    <Layout
    title={'Compra'}
    desctiption={'Compra tu tarjeta de Descuentos'}
    >
    <Adquieretarjeta/>
    <Eligetarjeta/>
    <Personaliza/>
    <Pedido/>
    </Layout>

  )
}

export default Comprar