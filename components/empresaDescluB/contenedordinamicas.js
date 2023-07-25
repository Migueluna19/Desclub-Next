import styles from "../../styles/EmpresaDescluB/servicios.module.scss"

function Contenedordinamicas() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
    <img src="/img/EmpresaDesclub/contenedordinamicas.png" width={100} height={100} alt="Contenedor Beneficios"/>
    </div>
    <div className={styles.contenedortexto}>
    <p><span>Desarrollo de Concepto y Estrategia:</span> Diseño e implementación de mecánica de participación. 
    Desarrollo de bases de participación.
     </p>
    <p><span>Gestoría y Logística Integral:</span> Asesoría y coordinación en procesos legales y logísticos. Ingreso y seguimiento
    de trámites. Compra, Almacenaje y Entrega de Premios. Cumplimiento de obligaciones fiscales.
     </p>
    <p><span>Estrategia de Comunicación</span> Diseño de materiales publicitarios. Creación de herramientas para participación.
     </p>
    </div>
    </div>
  )
}

export default Contenedordinamicas