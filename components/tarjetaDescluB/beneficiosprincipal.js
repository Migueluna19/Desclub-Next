
import styles from "../../styles/tarjetaDesclub/beneficiosprincipal.module.scss"

function Beneficiosprincipal() {
  return (
      <div className={styles.contenidoprincipal}>
        <div className={styles.imagenprincipal}>
        <img src="/img/tarjetadesclub/ImagenMundoBeneficios.png" width={30} height={300} alt="Imagen Mundo de Beneficios"/>
        </div>
        <div className={styles.titulos}>
        <div className={styles.contenedortitulo}>
        <h1>Un Mundo</h1>
        <div className={styles.fondonaranja}>  
            <h1>de Beneficios</h1>
        </div>
        </div>
        <div className={styles.centra}>
        <div className={styles.parrafo}>
            <p>Somos la red de beneficios con descuentos en más de 6,000 establecimientos en todo México.</p>
            <p>¡Descubre como incentivar clientes y colaboradores!</p>
        </div>
        </div>
        <div className={styles.logodesclub}>
        <img src="/img/DescluB.png" width={30} height={30} alt="Imagen Mundo de Beneficios"/>
        </div>
        </div>
        </div>

  )
}

export default Beneficiosprincipal