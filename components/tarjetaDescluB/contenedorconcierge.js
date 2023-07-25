import Image from "next/image"
import styles from "../../styles/TarjetaDesclub/appytarjetabeneficios.module.scss"

function Contenedorconcierge() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
        <Image src="/img/tarjetadesclub/contenedorconcierge.svg" width={100} height={100} alt="Contenedor Salud"/>
    </div>
    <div className={styles.contenedortexto}>
    <p>Atención 12/7. Reservaciones en Restaurantes. Cartelera de teatro, cine y de espectáculos. Teléfonos de Emergencia.
         Envío de taxis, flores, etc. 
     </p>
    </div>
    </div>
  )
}

export default Contenedorconcierge