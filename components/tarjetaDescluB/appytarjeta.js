import Image from 'next/image'
import Appytarjetabeneficios from './appytarjetabeneficios'
import styles from '../../styles/TarjetaDesclub/apptarjeta.module.scss'

function Appytarjeta() {
  return (
    <div className={styles.fondoprincipal}>
        <h1>App y Tarjeta</h1>
        <div className={styles.grid}>
        <div className={styles.centra}>
        <div className={styles.contenedorbeneficios}>
        <div className={styles.titulostexto}>
        <p>Disfruta todos los beneficios de Desclub.</p>
        <p>Encuentra descuentos por zona, giro o marca.</p>
        </div>
        <div className={styles.gridimagenes}>
        <div className={styles.gridbeneficios}>
        <Image src="/img/tarjetadesclub/cercadeti.svg" width={30} height={30} alt='Imagen Beneficios'/>
        <h4>Fácil de Usar</h4>
        </div>
        <div className={styles.gridbeneficios}>
        <Image src="/img/tarjetadesclub/ahorra.svg" width={30} height={30} alt='Imagen Beneficios'/>
        <h4>Cerca de Ti</h4>
        </div>
        <div className={styles.gridbeneficios}>
        <Image src="/img/tarjetadesclub/facilusar.svg" width={30} height={30} alt='Imagen Beneficios'/>
        <h4>Ahorra Hasta el 50%</h4>
        </div>
        </div>
        <div className={styles.contenidobeneficios}>
        <p>Intuitiva: Todo lo encuentras fácil y rápido</p>
        <p>Inteligente: Ve los beneficios más cercanos a ti.</p>
        <p>Exclusiva: Recibe alertas sobre descuentos exclusivos.</p>
        <p>Garantizada: Si no te aplican el descuento te reembolsamos tu dinero.</p>
        <p>Cercana: Si tienes alguna duda llama a nuestro call center.</p>
        <p>Cómoda: Muestra tu tarjeta virtual y recibe beneficios al instante.</p>
        </div>
        </div>
        </div>
        <div className={styles.centrado}>
        <div className={styles.acomoda}>
            <div className={styles.telefono}>
            <img src="/img/tarjetadesclub/telefonoapp.png" width={100} height={100} alt='Imagen App DescluB'/>
            </div>
            <div className={styles.stores}>
                <img  src="/img/tarjetadesclub/Stores.png" width={100} height={100} alt='Imagen Tiendas de Aplicaciones'/>
            </div>
            <div className={styles.centra}>
            <button type='button' className={styles.boton}>Comprar 
            <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
            </button>
            </div>
        </div>
        </div>
        </div>
        <Appytarjetabeneficios/>

       
    </div>
  )
}

export default Appytarjeta