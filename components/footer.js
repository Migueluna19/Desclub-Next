import Image from "next/image"
import Link from "next/link"
import styles from "../styles/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.footer_imagen}>
          <Link href="#">
          <img src="/img/logoblanco.png" width={100} height={30} alt="Logotipo Loyalty Solutions"/>
          </Link>
    </div>
    <div className={styles.footer_enlace}>
    <p>Copyright Ⓡ 2023 Loyalty Solutions</p>
    <Link href="#">Aviso de Privacidad</Link>
</div>
</footer>
  )
}

export default Footer