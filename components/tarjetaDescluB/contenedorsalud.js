import Image from "next/image"
import styles from "../../styles/TarjetaDesclub/appytarjetabeneficios.module.scss"

function Contenedorsalud() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
        <Image src="/img/tarjetadesclub/contenedorsalud.svg" width={100} height={100} alt="Contenedor Salud"/>
    </div>
    <div className={styles.contenedortexto}>
        <p>Es un medio de acceso a los servicios de salud privados a bajo costo que cuenta con las herramientas necesarias
        para el cuidado y mejora de la calidad de vida. 
       </p>
    </div>
    </div>
   
  )
}

export default Contenedorsalud