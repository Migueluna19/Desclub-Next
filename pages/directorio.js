import Layout from "../components/layout"
import Marcas from "../components/directorio/marcas"
import Nuestrodirectorio from "../components/directorio/nuestrodirectorio"
import styles from "../styles/fondo.module.scss" 
import { useState,useEffect } from "react"



function Directorio() {
  const [width, Setwidth]=useState(window.innerWidth)
  function CambioTamano(){
    Setwidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',CambioTamano);
    return()=>{
      window.removeEventListener('resize',CambioTamano)
    }
  })
  return (
    <Layout
    title={'Directorio de Marcas'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
   {width >=768? <Marcas/>:''}
    <div className={styles.contenedorfondo}>
    <Nuestrodirectorio/>
    </div>
    </Layout>

  )
}

export default Directorio