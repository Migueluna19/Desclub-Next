import Image from "next/image"
import styles from "../../styles/TarjetaDesclub/appytarjetabeneficios.module.scss"

function Contenedorgarantia() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
        <Image src="/img/tarjetadesclub/contenedorgarantia.svg" width={100} height={100} alt="Contenedor Salud"/>
    </div>
    <div className={styles.contenedortexto}>
    <p className={styles.centrartexto}>¿No te hicieron válido tu cupón?</p>
    <p className={styles.centrartexto}>No te preocupes, cuentas con un respaldo. En DescluB, nosotros te protegemos.</p>
    </div>
    </div>
   
  )
}

export default Contenedorgarantia