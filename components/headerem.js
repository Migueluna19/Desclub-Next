import Image from 'next/image'
import { Link } from 'react-scroll'
import styles from '../styles/headerem.module.scss'
import { useState } from 'react'

function Headerem() {

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
                <a href="/">
                <Image src="/img/desclubempresas.png" width={300} height={40} alt='Logotipo Desclub'/>
                </a>
            </div>
            <div className={styles.contenedornavegacion}>
                    <nav className={styles.navegacion}>
                        <Link to="Nosotros" spy={true} smooth={true} offset={-10} duration={800}>Nosotros</Link>
                        <Link to="Servicios" spy={true} smooth={true} offset={-50} duration={800}>Servicios</Link>
                        <Link to="Recursos" spy={true} smooth={true} offset={-40} duration={800} >Recursos</Link>
                        <Link to="Contacto" spy={true} smooth={true} offset={-50} duration={800}>Contacto</Link>
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

export default Headerem