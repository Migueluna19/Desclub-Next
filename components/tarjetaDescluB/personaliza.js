import styles from "../../styles/TarjetaDesclub/comprartarjeta.module.scss"

function Personaliza() {
  return (
    <div className={styles.contenedor}>
         <div className={styles.datostitulop}>
        <label>Personaliza a tu estilo</label>
         </div>
         <div className={styles.griddatos}>
         <div className={styles.campo}>
            <label htmlFor="Nombre" className={styles.campo_label}>Nombre(s)</label>
             <input type="text" name="Nombre" id="Nombre" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="ApellidoP" className={styles.campo_label}>Apellido Paterno</label>
             <input type="text" name="ApellidoP" id="ApellidoP" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="ApellidoM" className={styles.campo_label}>Apellido Materno</label>
             <input type="text" name="ApellidoM" id="ApellidoM"required className={styles.campo_field}/>  
            </div>
         </div>
    </div>
  )
}

export default Personaliza