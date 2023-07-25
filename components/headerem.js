import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/headerem.module.scss'

function Headerem() {
  return (
    <header className="contenedor">
        <div className={styles.header}>
        <div className={styles.logomarca}>
                <Link href="/tarjetadesclub">
                <Image src="/img/DescluB.png" width={300} height={40} alt='Logotipo Desclub'/>
                </Link>
            </div>
            <div className={styles.contenedornavegacion}>
                    <nav className={styles.navegacion}>
                        <Link href="/directorio">Nosotros</Link>
                        <Link href="/hotdeals">Servicios</Link>
                        <Link href="/comprar">Recursos</Link>
                        <Link href="/comprar">Contacto</Link>
                    </nav>
             </div>
        </div>
    </header>
  )
}

export default Headerem