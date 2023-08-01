import styles from "../../styles/EmpresaDescluB/beneficioprincipal.module.scss"

function Beneficioprincipal() {
  return (
    <div className={styles.contenidoprincipal}>
    <div className={styles.titulos}>
    <div className={styles.contenedortitulo}>
    <div className={styles.alineaizquierda}> 
    <h1>Beneficios</h1>
    </div>
    <div className={styles.alineaizquierda}>
    <div className={styles.fondoazul}>  
    <h1>Para tu Empresa</h1>
    </div>
    </div>
    </div>
    <div className={styles.centra}>
    <div className={styles.parrafo}>
        <p>En Desclub nos dedicamos a la construcción de Programas de Lealtad</p>
        <p>Construimos programas integrales a través de plataformas de comunicación, estrategias comerciales, de descuentos y difusión.</p>
        <p>Siempre buscando personalizar y distinguir a todos los segmentos.</p>
    </div>
    </div>
    </div>
    <div className={styles.imagenprincipal}>
    <img src="/img/EmpresaDesclub/principalEmpresas.png" width={30} height={300} alt="Imagen Beneficios Empresa"/>
    </div>
    </div>
  )
}

export default Beneficioprincipal