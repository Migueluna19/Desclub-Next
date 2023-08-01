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
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#008000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Tarjetacupon