import Image from 'next/image'
import styles from '../styles/index.module.scss';
import Link from 'next/link';



export default function Home() {
  return (
    <div className={styles.contenedor}>
     <div className={styles.logodesclub}>
      <img src='/img/LogoDescluBB.png' width={30} height={30} alt='Logotipo DescluB'/>
     </div>
     <div className={styles.grid}>
      <div className={styles.empresas}>
      <Link href={'/empresadesclub'}>
      <div className={styles.imagenempresa}> 
      <img src='/img/index/1desclubempresas.png' width={100} height={100} className={styles.imagen1} alt='Imagen Publicitaria'/>
      <img src='/img/index/2desclubempresas.png' width={100} height={100} className={styles.imagen2}  alt='Imagen Publicitaria'/>
      </div>
      </Link>

      <div className={styles.titulos}>
      <div className={styles.fondonaranja}> 
      <h1 className={styles.titulo1}>Servicios</h1>
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
        <div className={styles.imagendesclub}> 
        <img src='/img/index/2membresiadesclub.png' width={100} height={100} className={styles.imagen1} alt='Imagen Publicitaria'/>
      <img src='/img/index/1membresiadesclub.png' width={100} height={100} className={styles.imagen2} alt='Imagen Publicitaria'/>
      </div>
      </Link>
      <div className={styles.titulos}>
      <div className={styles.fondonaranja}>
      <h1 className={styles.titulo1}>Membresia</h1>
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
