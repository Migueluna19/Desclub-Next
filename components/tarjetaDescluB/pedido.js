import styles from "../../styles/TarjetaDesclub/comprartarjeta.module.scss"

function Pedido() {
  return (
    <div className={styles.contenedor}>
    <div className={styles.datostituloped}>
   <label>Tu pedido</label>
    </div>
    <div className={styles.gridtitulos}>
    <div>
      <h3>Cantidad</h3>
    </div>
    <div>
      <h3>Producto</h3>
    </div>
    <div>
      <h3>Diseño</h3>
    </div>
    <div>
      <h3>Nombre</h3>
    </div>
    <div>
      <h3>Precio</h3>
    </div>
    <div>
      <h3>Borrar</h3>
    </div>
    </div>
    <form>
    <div className={styles.gridresumencompra}>

    <div className={styles.texto}>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div className={styles.texto}>
      <label>Desclub</label>
    </div>
    <div className={styles.disenotarjeta}>
    <img src="/img/tarjetadesclub/tarjetasdiseños/diseño1.png" width={100} height={100} alt="Diseño 1"/>
    </div>
    <div className={styles.texto}>
      <label>Ale Garcia R.</label>
    </div>
    <div className={styles.texto}>
      <label>$320 MXN</label>
    </div>
    <div className={styles.borrar}>
    <img src="/img/iconoborrar.svg" width={100} height={100} alt="Icono Borrar"/>
    </div>
    </div>
    </form>
    <div className={styles.botones}>
    <div className={styles.boton}>
    <button type='button' className={styles.boton_regresar}>
    <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
      Regresar
        </button>
    </div>
    <div className={styles.boton}>
    <button type='button' className={styles.boton_continuar}>Continuar
        <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
        </button>
    </div>
    </div>
</div>
  )
}

export default Pedido