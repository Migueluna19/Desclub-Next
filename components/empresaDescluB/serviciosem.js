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
    {desplegar===1?<h3>Beneficios y Promociones</h3>:<h4>Beneficios y Promociones</h4>}
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(2)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/dinamicasysorteos.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.dinamicas}/>
     {desplegar===2?<h3>Dinámicas y Sorteos</h3>:<h4>Dinámicas y Sorteos</h4>}
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(3)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/programasdeincentivos.png" width={30} height={30}
     alt='Imagen Beneficios' className={styles.incentivos}/>
     {desplegar===3?<h3>Programas de Incentivos</h3>:<h4>Programas de Incentivos</h4>}
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(4)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/puntosyrecompensas.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.puntos}/>
     {desplegar===4?<h3>Puntos y Recompensas</h3>:<h4>Puntos y Recompensas</h4>}
    </div>
    </button>
    <button className={styles.boton} onClick={(e)=>handleDesplegar(5)}>
    <div className={styles.gridbeneficios}>
    <img src="/img/EmpresaDesclub/asistenciasyexperiencias.png" width={30} height={30} 
    alt='Imagen Beneficios' className={styles.asistencias}/>
     {desplegar===5?<h3>Asistencias y Experiencias</h3>:<h4>Asistencias y Experiencias</h4>}
    </div>
    </button>
    </div>
    {desplegar===1 ? <Contenedorbeneficios/>:desplegar===2?<Contenedordinamicas/>:desplegar===3?<Contenedorprogramas/>
    :desplegar===4?<Contenedorpuntos/>:desplegar===5?<Contenedorasistencia/>:<Contenedorbeneficios/>}
    
    

    
    </div>
  )
}

export default Serviciosem