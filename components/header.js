import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'


function Header() {
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
                        <Link href="/directorio">Directorio</Link>
                        <Link href="/hotdeals">Hot Deals</Link>
                        <Link href="/comprar">Comprar</Link>
                    </nav>
             </div>
        </div>
    </header>
  )
}

export default Header