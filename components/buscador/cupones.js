import styles from "../../styles/Buscador/resultados.module.scss"
import Cupon from "./cupon"

function Cupones() {
  return (
    <div>
    <div className={styles.titulo}>
    <label>A</label>
    </div>
    <Cupon/>
    <Cupon/>
    <Cupon/>
    <div className={styles.titulo}>
    <label>B</label>
    </div>
    <Cupon/>
    <Cupon/>
    <Cupon/>
    </div>
  )
}

export default Cupones