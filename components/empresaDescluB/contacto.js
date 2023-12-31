import styles from "../../styles/EmpresaDescluB/contacto.module.scss"

function Contacto() {
  return (
    <div className={styles.contenedorprincipal}>
      <div className={styles.texto}>
      <h1>Contacto</h1>
      <div className={styles.textodesktop}>
      <p>Si deseas contratar un servicio hecho a la medida para tu empresa o más información, contáctanos.</p>
      </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.campos}>
        <form method="Post" id="formulario">
        <div className={styles.campo}>
        <label htmlFor="Nombre" className={styles.campo_label}>Nombre completo</label>
        <input type="text" name="Nombre" id="Nombre" required className={styles.campo_field}/>
        </div>
        <div className={styles.campo}>
        <label htmlFor="Empresa" className={styles.campo_label}>Empresa</label>
        <input type="text" name="Empresa" id="Empresa" required className={styles.campo_field}/>
        </div>
        <div className={styles.campo}>
        <label htmlFor="Email" className={styles.campo_label}>Correo</label>
        <input type="email" name="Email" id="Email" required className={styles.campo_field}/>
        </div>
        <div className={styles.campo}>
        <label htmlFor="Telefono" className={styles.campo_label}>Teléfono</label>
        <input type="number" maxLength={10} name="Telefono" id="Telefono" required className={styles.campo_field}/>
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
        <div className={styles.textomobile}>
        <p>Si deseas contratar un servicio hecho a la medida para tu empresa o más información, contáctanos.</p>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Contacto