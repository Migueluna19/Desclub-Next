import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/headermobile.module.scss'
import { useState } from 'react';
import Burgerboton from './burgerboton';

function Headermobile() {
  const [fijabarra,Setfijabarra]=useState(true);
  const [desplegar,setDesplegar]=useState(0)

  function handleDesplegar(value){
      setDesplegar(value)
  }
  return (
    <div>
    <header className={`${styles.contenedorheader} ${styles.fijo}`}>
        <div className={styles.header}>
          <div className={styles.mobilemenu}>
          <Burgerboton/>
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
    
    </div>
  )
}

export default Headermobile