import Image from "next/image"
import Contenedorsalud from "./contenedorsalud"
import Contenedorconcierge from "./contenedorconcierge"
import Contenedorgarantia from "./contenedorgarantia"
import styles from "../../styles/TarjetaDesclub/appytarjetabeneficios.module.scss"
import { useState } from "react"

function Appytarjetabeneficios() {
    const [desplegar,setDesplegar]=useState(1)

    function handleDesplegar(value){
        setDesplegar(value)
    }

  return (
    <>
    <div className={styles.gridservicios}>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(1)}>
    <div className={styles.servicio}>
    <Image src="/img/tarjetadesclub/beneficiosalud.png" width={100} height={100} alt='Logo Beneficio Salud'/>
    <h2>Desclub + Salud</h2>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(2)}>
    <div className={styles.servicio}>
    <Image src="/img/tarjetadesclub/beneficioconcierge.png" width={100} height={100} alt='Logo Beneficio Concierge'/>
    <h2>Servicio de Concierge</h2>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(3)}>
    <div className={styles.servicio}>
    <Image src="/img/tarjetadesclub/beneficiogarantia.png" width={100} height={100} alt='Logo Beneficio Garantia'/>
    <h2>Garantía de Satisfacción</h2>
    </div>
    </button>
    </div>
    {desplegar===1 ? <Contenedorsalud/>:desplegar===2?<Contenedorconcierge/>:desplegar===3?<Contenedorgarantia/>:<Contenedorsalud/>}
    </>
  )
}

export default Appytarjetabeneficios