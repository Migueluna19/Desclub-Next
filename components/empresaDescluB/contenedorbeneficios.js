
import styles from "../../styles/EmpresaDescluB/servicios.module.scss"

function Contenedorbeneficios() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
    <img src="/img/EmpresaDesclub/contenedorbeneficios.png" width={100} height={100} alt="Contenedor Beneficios"/>
    </div>
    <div className={styles.contenedortexto}>
    <p>Construimos programas de beneficios y promociones con el objetivo de atraer clientes nuevos, aumentar la fidelidad 
        y consentir a sus clientes actuales.
     </p>
    <p><span>Plataforma de descuentos</span> Con más de 8,000 establecimientos, 16 giros y más de 800 marcas a nivel nacional.
     </p>
    <p><span>Red Médica</span> Más de 4,700 médicos especialistas en convenio y 1,600 proveedores de servicios de salud a tu 
    disposición
     </p>
    </div>
    </div>
  )
}

export default Contenedorbeneficios