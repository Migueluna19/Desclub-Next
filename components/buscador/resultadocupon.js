import styles from "../../styles/Buscador/resultados.module.scss"

function Resultadocupon() {
  return (
    <div className={styles.contenedorresultado}>
        <div className={styles.gridresultado}>
    <div className={styles.imagencupon}>
    <img src="img/Cupones/Carls.png" width={100} height={100} alt="Imagen Cupon"/>
    </div>
    <div className={styles.terminos}>
    <div className={styles.logo}>
    <img src="img/Cupones/logoCarls.png" width={100} height={100} alt="Imagen Logo Carls"/>
    </div>
    <div className={styles.contenido}>
    <h2>20% de Descuento en productos individuales.</h2>
    <h4>Efectivo: 20% - Tarjeta: 20%</h4>
    <h4>Válido al 30-04-2024</h4>
    </div>
    </div>
</div>
<div className={styles.condiciones}>
    <p>
    1. Para hacer válido el descuento debes mostrar esta pantalla con el logo DESCLUB al cajero antes de pagar. 
    2. No aplica en ningún tipo de combos. 
    3. Es únicamente aplicable en consumos individuales, es válido solo un descuento por ticket. 
    4. Es válido únicamente los Restaurantes participantes de Carl’s Jr. ® en México, se pueden consultar en www.carlsjr.com.mx 
    5. No aplica el descuento cuando se aprovechen otras promociones u ofertas. 
    6. Al ordenar desde el automóvil deberá informarse previamente al Cajero para agilizar la operación. 
    7. No aplica en restaurantes Carl’s Jr.® de Aeropuertos, Nuevo León y Guanajuato, 
    en Coahuila NO es válido en Saltillo y Torreón, En León, Guanajuato solo es válido en Restaurante Paseo del Moral, 
    en Irapuato, Guanajuato solo válido en Av. Nacozari. 8. Es aplicable en consumos familiares.
    </p>
</div>
    </div>
  )
}

export default Resultadocupon