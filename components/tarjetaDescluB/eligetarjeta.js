import styles from "../../styles/TarjetaDesclub/comprartarjeta.module.scss"
import { useState } from "react"
import Personaliza from "./personaliza";
import Pedido from "./pedido";


function Eligetarjeta() {
  
  const [tarjeta, setTarjeta]=useState(0)

  function handleChangeTarjeta(value){
  setTarjeta(value);
  }
  
  return (
  <div className={styles.contenedor}>
  <div className={styles.datostitulo}>
    <label>Elige tu tarjeta</label>
  </div>
  <div className={styles.gridtarjetas}>
    <button className={styles.boton} onClick={(e)=>handleChangeTarjeta(1)}>
    <div className={styles.imagen}>
    <img src="/img/tarjetadesclub/tarjetaDesclub.png" width={100} height={100} alt="Tarjeta Desclub"/>
    <div className={styles.precio}>
    <h3>Tarjeta Desclub</h3>
    <h3 className={styles.costo}>$320.00</h3>
    </div>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleChangeTarjeta(2)}>
    <div className={styles.imagen}>
    <img src="/img/tarjetadesclub/tarjetaDesclub.png" width={100} height={100} alt="Tarjeta Desclub"/>
    <div className={styles.precio}>
    <h3>Tarjeta Desclub</h3>
    <h3>+</h3>
    <h3>Salud</h3>
    <h3 className={styles.costo}>$580.00</h3>
    </div>
    </div>
    </button>
  </div>
  {tarjeta>=1?<Personaliza/>:''}
  {tarjeta>=1?<Pedido/>:''}
  </div>
 
  )
}

export default Eligetarjeta