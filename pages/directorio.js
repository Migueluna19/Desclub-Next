import Layout from "../components/layout"
import Marcas from "../components/directorio/marcas"
import Nuestrodirectorio from "../components/directorio/nuestrodirectorio"
import styles from "../styles/fondo.module.scss" 
import { useState,useEffect } from "react"



function Directorio() { 
 
  return (
    <Layout
    title={'Directorio de Marcas'}
    desctiption={'Nuestras Marcas y Mucho más'}
    >
   <Marcas/>
    <div className={styles.contenedorfondo}>
    <Nuestrodirectorio/>
    </div>
    </Layout>

  )
}

export default Directorio