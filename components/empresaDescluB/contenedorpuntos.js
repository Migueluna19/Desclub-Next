import styles from "../../styles/EmpresaDescluB/servicios.module.scss"


function Contenedorpuntos() {
  return (
    <div className={styles.contenedorprincipal}>
    <div className={styles.contenedorimagen}>
    <img src="/img/EmpresaDesclub/contenedorpuntos.png" width={100} height={100} alt="Contenedor Beneficios"/>
    </div>
    <div className={styles.contenedortextopuntos}>
    <p><span>Desarrollo de programa en línea con todos los procesos integrados:</span>
     </p>
    <p>Consulta de Reglas del programa.</p>
    <p>Consulta de Estados de Cuenta para ver detalle de transacciones de puntos.</p>
    <p>Redención de puntos por productos.</p>
    <p>Gran variedad de productos.</p>
    <p>Envío a domicilio.</p>
    <p>Gestión de stock.</p>
    <p>Wishlist</p>
    </div>
    </div>
  )
}

export default Contenedorpuntos