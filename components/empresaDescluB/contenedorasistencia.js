import styles from "../../styles/EmpresaDescluB/servicios.module.scss"

function Contenedorasistencia() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
    <img src="/img/EmpresaDesclub/contenedorasistencias.png" width={100} height={100} alt="Contenedor Beneficios"/>
    </div>
    <div className={styles.contenedortexto}>
    <p><span>Como complemento a nuestros servicios ofrecemos asistencias y experiencias para recompensar a nuestros usuarios:</span> 
     </p>
    <p> Asistencia vial, Asistencia nutricional, Escapadas Románticas, spas, catas de vino, viajes en globo,etc.
     </p>
    </div>
    </div>
  )
}

export default Contenedorasistencia