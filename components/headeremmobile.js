import Image from 'next/image'
import { Link } from 'react-scroll'
import styles from '../styles/headermobile.module.scss'
import { useState } from 'react';
import Burgerboton from './burgerboton';

function Headeremmobile() {
  const [fijabarra,Setfijabarra]=useState(true);
  const [desplegar,setDesplegar]=useState(0)

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
                <a href="/">
                <Image className={styles.logoempresa} src="/img/desclubempresas.png" width={300} height={40} alt='Logotipo Desclub'/>
                </a>
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
                        <Link onClick={handleDesplegar} to="Nosotros" spy={true} smooth={true} offset={-10} duration={800}>Nosotros</Link>
                        <Link onClick={handleDesplegar} to="Servicios" spy={true} smooth={true} offset={-50} duration={800}>Servicios</Link>
                        <Link onClick={handleDesplegar} to="Recursos" spy={true} smooth={true} offset={-50} duration={800} >Recursos</Link>
                        <Link onClick={handleDesplegar} to="Contacto" spy={true} smooth={true} offset={-50} duration={800}>Contacto</Link>
                    </nav>
             </div>
    </div>
  )
}

export default Headeremmobile