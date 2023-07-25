import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss';
import Link from 'next/link';
import Footer from '../components/footer';


export default function Home() {
  return (
    <div className={styles.contenedor}>
     <div className={styles.logodesclub}>
      <img src='/img/LogoDescluBB.png' width={30} height={30} alt='Logotipo DescluB'/>
     </div>
     <div className={styles.grid}>
      <div className={styles.empresas}>
      <Link href={'/empresadesclub'}>
      <div className={styles.imagen}> 
      <img src='/img/index/ServiciosEmpresas.png' width={100} height={100} alt='Imagen Publicitaria'/>
      </div>
      </Link>

      <div className={styles.titulos}>
      <h1>Servicios</h1>
      <div className={styles.fondonaranja}>
      <h1>Para Empresas</h1>
      </div>
      </div>
      <div>
        
      </div>

      </div>
      <div className={styles.texto}>
      <p className={styles.textoempresa}>Planes de lealtad, programa de beneficios, incentivos, promociones y sorteos.</p>
      </div>

      <div className={styles.tarjetadesclub}>
        <Link href={'/tarjetadesclub'}>
        <div className={styles.imagen}> 
      <img src='/img/index/TarjetaDesclub.png' width={100} height={100} alt='Imagen Publicitaria'/>
      </div>
      </Link>
      <div className={styles.titulos}>
      <h1>Tarjeta</h1>
      <div className={styles.fondonaranja}>
      <h1>DescluB</h1>
      </div>
      </div>
      
      </div>
      <div className={styles.texto}>
      <p className={styles.textotarjeta}>Conoce los beneficios y las últimas novedades de la membresía Desclub, accede a descuentos y red médica.</p>
      </div>
     </div>
     <div className={styles.footer}>
     <div className={styles.footer_imagen}>
                    <Link href="#">
                    <img src="/img/logoblanco.png" width={100} height={30} alt="Logotipo Loyalty Solutions"/>
                    </Link>
              </div>
              <div className={styles.footer_enlace}>
              <p>Copyright Ⓡ 2023 Loyalty Solutions</p>
              <Link href="#">Aviso de Privacidad</Link>
          </div>
     </div>
    </div>
  )
}
