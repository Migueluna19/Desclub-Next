import Image from "next/image"
import styles from '../../styles/TarjetaDesclub/sumamarca.module.scss'

function Sumamarca() {
  return (
    <div className={styles.principal}>
        <h1>Suma tu Marca</h1>
        <div className={styles.grid}>
        <div className={styles.campos}>
        <form method="Post" id="formulario">
        <div className={styles.campo}>
        <label htmlFor="Nombre" className={styles.campo_label}>Nombre completo</label>
        <input type="text" name="Nombre" id="Nombre" required className={styles.campo_field}/>
        </div>
        <div className={styles.campo}>
        <label htmlFor="Email" className={styles.campo_label}>Correo</label>
        <input type="email" name="Email" id="Email" required className={styles.campo_field}/>
        </div>
        <div className={styles.campo}>
        <label htmlFor="Telefono" className={styles.campo_label}>Teléfono</label>
        <input type="number" name="Telefono" id="Telefono" required className={styles.campo_field}/>
        </div>

        <div className={styles.campo}>
        <label className={styles.campo_label}>Número de Usuarios</label>
        <div className={styles.radio}>
        <div className={styles.centra}>
        <input type="radio" name="usuarios" id="10 a 49" value="1" required className={styles.campo_radio}/>
        <label htmlFor="10 a 49">  De 10 a 49</label>
        </div>
        <div className={styles.centra}>
        <input type="radio" name="usuarios" id="50 a 99" value="2" required className={styles.campo_radio}/>
        <label htmlFor="50 a 99">  De 50 a 99</label>
        </div>
        <div className={styles.centra}>
        <input type="radio" name="usuarios" id="Mas de 100" value="3" required className={styles.campo_radio}/>
        <label htmlFor="Mas de 100">  Más de 100</label>
        </div>
        </div>
        </div>

        <div className={styles.campo}>
        <label htmlFor="Comentarios" className={styles.campo_label}>Comentarios</label>
        <textarea type="text" name="Comentarios" id="Comentarios" className={styles.campo_field_textarea} ></textarea>
        </div>
        <div className={styles.avisoprivacidad}>
        <label>Consulta nuestro aviso <a href="#" target="blank">Aviso de Privacidad</a></label>
        </div>
        <div className={styles.contenedorboton}>
        <button type='button' className={styles.botonenviar}>Enviar
        <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
        </button>
        </div>
        </form>
        </div>
        <div className={styles.imagenformulario}>
        <img src="/img/tarjetadesclub/ImagenFormulario.png" width={100} height={100} alt="Imagen Publicitaria"/>
        </div>
        </div>
    </div>
  )
}

export default Sumamarca