import styles from "../../styles/EmpresaDescluB/servicios.module.scss"

function Contenedorprogramas() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
    <img src="/img/EmpresaDesclub/contenedorprogramas.png" width={100} height={100} alt="Contenedor Beneficios"/>
    </div>
    <div className={styles.contenedortexto}>
    <p><span>Sincronice los objetivos de su empresa con el del grupo que quiere incentivar:</span>Empleados y sus clientes.
    Redes de venta y Distribuidores.
     </p>
    <p>Lo acompañamos en todo el proceso para identificar la mejor forma de alcanzar sus objetivos. Ayudamos a influir en la 
        toma de decisión en ambientes competitivos, con incentivos de un alto valor percibido.
     </p>
    <p>Soluciones ad-hoc o plataforma llave en mano rápida de rápida implementación.
     </p>
    </div>
    </div>
  )
}

export default Contenedorprogramas