import styles from "../../styles/EmpresaDescluB/servicios.module.scss"
import Contenedorbeneficios from "./contenedorbeneficios"
import Contenedordinamicas from "./contenedordinamicas"
import Contenedorprogramas from "./contenedorprogramas"
import Contenedorpuntos from "./contenedorpuntos"
import Contenedorasistencia from "./contenedorasistencia"
import { useState } from "react"

function Serviciosem() {
    const [desplegar,setDesplegar]=useState(1)

    function handleDesplegar(value){
        setDesplegar(value)
    }
  return (
    <div className={styles.fondoprincipal}>
    <h1>Servicios</h1>
    <div className={styles.gridimagenes}>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(1)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/beneficiosypromociones.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.beneficios}/>
    <h4>Beneficios y Promociones</h4>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(2)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/dinamicasysorteos.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.dinamicas}/>
    <h4>Dinámicas y Sorteos</h4>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(3)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/programasdeincentivos.png" width={30} height={30}
     alt='Imagen Beneficios' className={styles.incentivos}/>
    <h4>Programas de Incentivos</h4>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(4)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/puntosyrecompensas.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.puntos}/>
    <h4>Puntos y Recompensas</h4>
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(5)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/asistenciasyexperiencias.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.asistencias}/>
    <h4>Asistencias y Experiencias</h4>
    </div>
    </button>
    </div>
    {desplegar===1 ? <Contenedorbeneficios/>:desplegar===2?<Contenedordinamicas/>:desplegar===3?<Contenedorprogramas/>
    :desplegar===4?<Contenedorpuntos/>:desplegar===5?<Contenedorasistencia/>:<Contenedorbeneficios/>}
    
    

    
    </div>
  )
}

export default Serviciosem