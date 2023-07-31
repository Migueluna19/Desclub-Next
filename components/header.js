import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'


function Header() {
  const router=useRouter()
  const [fijabarra,Setfijabarra]=useState(true);
  // function FijaHeader(){
  //   if(window.scrollY>=100){
  //     Setfijabarra(true)
  //   }else{
  //     Setfijabarra(false)
  //   }
  // }
  // //window.addEventListener('scroll',FijaHeader)
  
  return (
    <header className={fijabarra?`${styles.contenedorheader} ${styles.fijo}`:`${styles.contenedorheader}`}>
        <div className={styles.header}>
        <div className={styles.logomarca}>
                <Link href="/">
                <Image src="/img/DescluB.png" width={300} height={40} alt='Logotipo Desclub'/>
                </Link>
            </div>
            <div className={styles.contenedornavegacion}>
                    <nav className={styles.navegacion}>
                        <Link href="/tarjetadesclub" className={router.pathname==='/tarjetadesclub'? styles.active:''}
                        >Inicio</Link>
                        <Link href="/directorio" className={router.pathname==='/directorio'? styles.active:''}
                        >Directorio</Link>
                        <Link href="/hotdeals" className={router.pathname==='/hotdeals'? styles.active:''}
                        >Hot Deals</Link>
                        <Link href="/comprar" className={router.pathname==='/comprar'? styles.active:''}
                        >Comprar</Link>
                    </nav>
             </div>
             <div className={styles.centrar}>
             <div className={styles.redes}>
            <div className={styles.imagenheader}>
              <a href='https://www.linkedin.com/company/descuentos-desclub/about/' target='blank'>
              <Image src="/img/in-gris.png" width={30} height={30} alt='Logo LinkedIn'/>
              </a>
            </div>
            <div className={styles.imagenheader}>
            <a href='https://instagram.com/desclub.mx?igshid=NTc4MTIwNjQ2YQ==' target='blank'>
            <Image src="/img/insta-gris.png" width={30} height={30} alt='Logo Instagram'/>
            </a>
            </div>
            <div className={styles.imagenheader}>
            <a href='https://www.facebook.com/profile.php?id=100092550590243' target='blank'>
            <Image src="/img/fb-gris.png" width={30} height={30} alt='Logo Facebook'/>
            </a>
            </div>
             </div>
             </div>
        </div>
    </header>
  )
}

export default Header