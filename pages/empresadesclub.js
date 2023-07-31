import Layoutempresa from "../components/layoutempresas"
import Beneficioprincipal from "../components/empresaDescluB/beneficioprincipal"
import Serviciosem from "../components/empresaDescluB/serviciosem"
import Recursos from "../components/empresaDescluB/recursos"
import Contacto from "../components/empresaDescluB/contacto"


function tarjetadesclub() {
  return (
    <Layoutempresa
    title={'Tarjeta Desclub'}
    desctiption={'Tarjeta de Descuentos y Mucho más'}
    >
      <section id="Nosotros">
      <Beneficioprincipal/>
      </section>
    <section id="Servicios">
    <Serviciosem/>
    </section>
    <section id="Recursos">
    <Recursos/>
    </section>
    <section id="Contacto">
    <Contacto/>
    </section>
    </Layoutempresa>

  )
}

export default tarjetadesclub