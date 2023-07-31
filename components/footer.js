import Link from "next/link"
import styles from "../styles/footer.module.scss"
import Image from "next/image"

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.enlaces}>
    <div className={styles.footer_imagen}>
          <Link href="#">
          <img src="/img/logoblanco.png" width={100} height={30} alt="Logotipo Loyalty Solutions"/>
          </Link>
    </div>
    <div className={styles.redes}>
            <div className={styles.imagenheader}>
              <a href='https://www.linkedin.com/company/descuentos-desclub/about/' target='blank'>
              <Image src="/img/in-blanco.png" width={30} height={30} alt='Logo LinkedIn'/>
              </a>
            </div>
            <div className={styles.imagenheader}>
            <a href='https://instagram.com/desclub.mx?igshid=NTc4MTIwNjQ2YQ==' target='blank'>
            <Image src="/img/insta-blanco.png" width={30} height={30} alt='Logo Instagram'/>
            </a>
            </div>
            <div className={styles.imagenheader}>
            <a href='https://www.facebook.com/profile.php?id=100092550590243' target='blank'>
            <Image src="/img/fb-blanco.png" width={30} height={30} alt='Logo Facebook'/>
            </a>
            </div>
             </div>
    </div>
    <div className={styles.footer_enlace}>
    <p>Copyright Ⓡ 2023 Loyalty Solutions</p>
    <Link href="#">Aviso de Privacidad</Link>
</div>
</footer>
  )
}

export default Footer