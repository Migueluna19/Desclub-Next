
import styles from "../../styles/tarjetaDesclub/beneficiosprincipal.module.scss"

function Beneficiosprincipal() {
  return (
      <div className={styles.contenidoprincipal}>
        <div className={styles.imagenprincipal}>
          <div className={styles.imagendesktop}>
          <img  src="/img/tarjetadesclub/ImagenMundoBeneficios.png" width={30} height={300} alt="Imagen Mundo de Beneficios Desktop"/>
          </div>
          <div className={styles.imagenmobile}>
          <img  src="/img/tarjetadesclub/ImagenMundoBeneficiosMobile.png" width={30} height={300} alt="Imagen Mundo de Beneficios"/>
          </div>
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
        <div className={styles.visionmision}>
        <div className={styles.mision}>
        <div className={styles.titulom}>
        <h3>Visión</h3>
        <div className={styles.borde}></div>
        </div>
        <div className={styles.parrafom}>
        <p>Ser la empresa de referencia para el desarrollo y operación de soluciones de lealtad en Latinoamérica.</p>
        </div>
        </div>
        <div className={styles.vision}>
        <div className={styles.titulov}>
        <div className={styles.borde}></div>
        <h3>Misión</h3>
        </div>
        <div className={styles.parrafom}>
        <p>Ayudar a nuestros clientes a alcanzar sus metas de negocio proporcionándoles servicios y soluciones de lealtad
          innovadoras y adecuadas a sus necesidades
        </p>
        </div>
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