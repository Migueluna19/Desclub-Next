import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/headermobile.module.scss'
import { useState } from 'react';
import Burgerboton from './burgerboton';
import { useRouter } from 'next/router'

function Headermobile() {
  const [fijabarra,Setfijabarra]=useState(true);
  const [desplegar,setDesplegar]=useState(false)
  const router=useRouter()

  function handleDesplegar(){
      setDesplegar(!desplegar)
  }
  return (
    <div>
    <header className={`${styles.contenedorheader} ${styles.fijo}`}>
        <div className={styles.header}>
          <div className={styles.mobilemenu}>
          <Burgerboton
          desplegar={desplegar}
          handleDesplegar={handleDesplegar}
          />
          </div>    
        <div className={styles.logomarca}>
                <Link href="/">
                <Image src="/img/DescluB.png" width={300} height={40} alt='Logotipo Desclub'/>
                </Link>
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
    <div className={`${styles.sidebar} ${desplegar?`${styles.abrir}`:''}`}>
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
    </div>
  )
}

export default Headermobile