import styles from "../../styles/EmpresaDescluB/recursos.module.scss"

function Recursos() { 
  return (
    <div className={styles.contenedorprincipal}>
        <h1>Recursos</h1>
        <div className={styles.contenedorimagenes}>
        <div className={styles.contenedorauxiliar}>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/mediosdifusionmobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/contenidoeditorialmobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/equipocreativomobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>
        
        </div>
        </div>
        <div className={styles.contenedorimagenes}>
        <div className={styles.alineaderecha}>
        <div className={styles.contenedorauxiliar}>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/desarrollowebmobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/servicioconciergemobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>

        <div className={styles.contenedorimagen}>
        <div className={styles.imagen}>
        <img src="img/EmpresaDesclub/garantiamobile.png" width={100} height={100} alt="Imagen Medios de Difusion"/>
        </div>
        </div>
        
        </div>
        </div>
        </div>

    </div>
  )
}

export default Recursos