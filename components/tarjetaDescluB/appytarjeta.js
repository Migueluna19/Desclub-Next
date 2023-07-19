import Image from 'next/image'
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
        <Image src="/img/cercadeti.svg" width={30} height={30} alt='Imagen Beneficios'/>
        <h4>Fácil de Usar</h4>
        </div>
        <div className={styles.gridbeneficios}>
        <Image src="/img/ahorra.svg" width={30} height={30} alt='Imagen Beneficios'/>
        <h4>Cerca de Ti</h4>
        </div>
        <div className={styles.gridbeneficios}>
        <Image src="/img/facilusar.svg" width={30} height={30} alt='Imagen Beneficios'/>
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
            <img src="/img/telefonoapp.png" width={100} height={100} alt='Imagen App DescluB'/>
            </div>
            <div className={styles.stores}>
                <img  src="/img/Stores.png" width={100} height={100} alt='Imagen Tiendas de Aplicaciones'/>
            </div>
            <div className={styles.centra}>
            <button type='button' className={styles.boton}>Comprar </button>
            </div>
        </div>
        </div>
        </div>

        <div className={styles.gridservicios}>
        <div className={styles.servicio}>
        <Image src="/img/beneficiosalud.png" width={100} height={100} alt='Logo Beneficio Salud'/>
        <h2>Desclub + Salud</h2>
        <div className={styles.textoservicio}>
        <p>Es un medio de acceso a los servicios de salud privados a bajo costo que cuenta con las herramientas necesarias
           para el cuidado y mejora de la calidad de vida. 
        </p>
        </div>
        </div>
        <div className={styles.servicio}>
        <Image src="/img/beneficioconcierge.png" width={100} height={100} alt='Logo Beneficio Concierge'/>
        <h2>Servicio de Concierge</h2>
        <div className={styles.textoservicio}>
        <p>Atención 12/7. Reservaciones en Restaurantes. Cartelera de teatro, cine y de espectáculos. Teléfonos de Emergencia.
            Envío de taxis, flores, etc. 
        </p>
        </div>
        </div>
        <div className={styles.servicio}>
        <Image src="/img/beneficiogarantia.png" width={100} height={100} alt='Logo Beneficio Garantia'/>
        <h2>Garantía de Satisfacción</h2>
        <div className={styles.textoservicio}>
        <p>¿No te hicieron válido tu cupón?</p>
        <p>No te preocupes, cuentas con un respaldo. En DescluB, nosotros te protegemos.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Appytarjeta