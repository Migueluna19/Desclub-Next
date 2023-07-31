import Layout from "../components/layout"
import Hotdeals from "../components/hotdeals/hotdeals"
import Slidercupones from "../components/hotdeals/slidercupones"
import Cupones from "../components/hotdeals/cupones"

function HotDeals() {
  return (
    <Layout
    title={'Hot Deals'}
    desctiption={'Nuestras Mejores Ofertas'}
    >
    <Hotdeals/>
    <Slidercupones/>
    <Cupones/>
    </Layout>
 
  )
}

export default HotDeals