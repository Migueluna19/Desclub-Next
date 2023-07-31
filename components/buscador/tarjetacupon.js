import styles from "../../styles/Buscador/resultados.module.scss"

function Tarjetacupon() {
  return (
    <div className={styles.contenedortarjeta}>
    <div className={styles.imagen}>
    <img src="img/Cupones/imagentarjetacupon.svg" width={100} height={100} alt="Imagen Tarjeta Cupon"/>
    </div>
    <div className={styles.promo}>
    <div className={styles.promocion}>
    <h3>Amorina</h3>
    <h4>10% de descuento en la compra.</h4>
    </div>
    <div className={styles.descuento}>
    <div className={styles.circulodescuento}>
        <h4>20%</h4>
    </div>
    <div className={styles.vermas}>
        <p>Ver más</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Tarjetacupon