import styles from "../../styles/EmpresaDescluB/recursos.module.scss"

function Recursos() {
  return (
    <div className={styles.contenedorprincipal}>
        <h1>Recursos</h1>
        <div className={styles.contenedorimagenes}>
        <div className={styles.contenedorauxiliar}>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen1}>
        <img src="img/EmpresaDesclub/mediosdifusion.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        <div className={styles.titulo}>
        <h4>Medios de Difusión BTL</h4>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen2}>
        <img src="img/EmpresaDesclub/contenidoeditorial.png" width={100} height={100} alt="Imagen Contenido Editorial"/>
        </div>
        <div className={styles.titulo}>
        <h4>Contenido Editorial</h4>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen3}>
        <img src="img/EmpresaDesclub/equipocreativo.png" width={100} height={100} alt="Imagen Equipo Creativo"/>
        </div>
        <div className={styles.titulo}>
        <h4>Equipo Creativo</h4>
        </div>
        </div>
        
        </div>
        </div>
        <div className={styles.contenedorimagenes}>
        <div className={styles.alineaderecha}>
        <div className={styles.contenedorauxiliar}>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen4}>
        <img src="img/EmpresaDesclub/desarrolloweb.png" width={100} height={100} alt="Imagen Desarrollo Web"/>
        </div>
        <div className={styles.titulo}>
        <h4>Desarrollo Web y de Apps</h4>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen5}>
        <img src="img/EmpresaDesclub/servicioconcerge.png" width={100} height={100} alt="Imagen Servicio Concerge"/>
        </div>
        <div className={styles.titulo}>
        <h4>Servicio de Concierge</h4>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen6}>
        <img src="img/EmpresaDesclub/gsatisfaccion.png" width={100} height={100} alt="Imagen Garantia Satisfaccion"/>
        </div>
        <div className={styles.titulo}>
        <h4>Garantia Satisfaccion</h4>
        </div>
        </div>
        
        </div>
        </div>
        </div>

    </div>
  )
}

export default Recursos