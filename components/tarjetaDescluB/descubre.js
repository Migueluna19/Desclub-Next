import styles from '../../styles/TarjetaDesclub/descubre.module.scss'
import Carrusel from './carrusel'
import Carrusel2 from './carrusel2'

function Descubre() {
   
  return (
    <div className={styles.principal}>
        <h1>Descubre</h1>
        <div className={styles.items}>
        <Carrusel/>
        </div>
        <div className={styles.items}>
        <Carrusel2/>
        </div>
        <div className={styles.contenedorboton}>
        <button type='button' className={styles.boton_buscador}>Ir al Buscador</button>
        </div>
    </div>
  )
}

export default Descubre