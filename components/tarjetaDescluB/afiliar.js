import Image from "next/image"
import styles from '../../styles/TarjetaDesclub/afiliar.module.scss'

function Afiliar() {
  return (
    <div className={styles.principal}>
        <h1>¿Por qué Afiliar tu Marca? </h1>
    <div className={styles.grid}>
    <div className={styles.razonafiliar}>
    <Image src="/img/beneficiosalud.png" width={100} height={100} alt='Logo Beneficio Salud'/>
        <h2>Desclub + Salud</h2>
        <div className={styles.textoservicio}>
        <p>Incentiva a tus clientes a comprar con mayor frecuencia.</p>
        </div>
    </div>
    <div className={styles.razonafiliar}>
    <Image src="/img/Clientesregresen.png" width={100} height={100} alt='Logo Beneficio Clientes'/>
        <h2>Que tus Clientes Regresen</h2>
        <div className={styles.textoservicio}>
        <p>Construye Relaciones sólidad y con mayor lealtad a tu marca.</p>
        </div>
    </div>
    <div className={styles.razonafiliar}>
    <Image src="/img/nuevosclientes.png" width={100} height={100} alt='Logo Beneficio Nuevos Clientes'/>
        <h2>Nuevos Clientes</h2>
        <div className={styles.textoservicio}>
        <p>Conecta con nuestros más de 500 mil usuarios DescluB.</p>
        </div>
    </div>
    <div className={styles.razonafiliar}>
    <Image src="/img/clientesconozcan.png" width={100} height={100} alt='Logo Beneficio Clientes te Conozcan'/>
        <h2>Que te conozcan</h2>
        <div className={styles.textoservicio}>
        <p>Incrementa la visibilidad de tu marca con nuestros canales de difusión.</p>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Afiliar