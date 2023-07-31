import styles from "../../styles/TarjetaDesclub/comprartarjeta.module.scss"

function Eligetarjeta() {
  return (
  <div className={styles.contenedor}>
  <div className={styles.datostitulo}>
    <label>Elige tu tarjeta</label>
  </div>
  <div className={styles.gridtarjetas}>
    <div className={styles.imagen}>
    <img src="/img/tarjetadesclub/tarjetaDesclub.png" width={100} height={100} alt="Tarjeta Desclub"/>
    <div className={styles.precio}>
    <h3>Tarjeta Desclub</h3>
    <h3 className={styles.costo}>$320.00</h3>
    </div>
    </div>
    <div className={styles.imagen}>
    <img src="/img/tarjetadesclub/tarjetaDesclub.png" width={100} height={100} alt="Tarjeta Desclub"/>
    <div className={styles.precio}>
    <h3>Tarjeta Desclub</h3>
    <h3>+</h3>
    <h3>Salud</h3>
    <h3 className={styles.costo}>$580.00</h3>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Eligetarjeta