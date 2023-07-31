import styles from "../../styles/TarjetaDesclub/pagoproducto.module.scss"

function Datosfacturacion() {
  return (
    <div className={styles.contenedor}>
    <div className={styles.datos}>
    <div className={styles.titulos}>
    <h1>Pago de</h1>
    <div className={styles.fondonaranja}>
        <h1>Producto</h1>
        </div>
        <p>Adquiere tu membresía <span>DescluB</span> y disfruta de todos los beneficios.</p>
    </div>
    <div className={styles.datospago}> 
    <form method="Post" id="formulariopago">
         <div className={styles.facturacion}>
          <div className={styles.datostitulo}>
            <label>Datos de Facturación</label>
         </div>
         <div className={styles.radio}>
         <input type="radio" name="facturar" id="facturar" value="1" required className={styles.radiobtn}/>
        <label htmlFor="factutar"> Quiero Facturar</label>
         </div>
         <div className={styles.grid}>
            <div className={styles.campo}>
            <label htmlFor="Nombre" className={styles.campo_label}>Nombre(s)</label>
             <input type="text" name="Nombre" id="Nombre" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="ApellidoP" className={styles.campo_label}>Apellido Paterno</label>
             <input type="text" name="ApellidoP" id="ApellidoP" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="ApellidoM" className={styles.campo_label}>Apellido Materno</label>
             <input type="text" name="ApellidoM" id="ApellidoM"required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Email" className={styles.campo_label}>Correo Electrónico</label>
             <input type="email" name="Email" id="Email" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Telefono1" className={styles.campo_label}>Teléfono (10 Digitos)</label>
             <input type="number" name="Telefono1" id="Telefono1" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Telefono2" className={styles.campo_label}>Teléfono 2</label>
             <input type="number" name="Telefono2" id="Telefono2" required className={styles.campo_field}/>  
            </div>
         </div>
        </div>

        <div className={styles.facturacion}>
          <div className={styles.datostitulod}>
            <label>Dirección</label>
         </div>
         <div className={styles.grid}>
            <div className={styles.campo}>
            <label htmlFor="Calle" className={styles.campo_label}>Calle</label>
             <input type="text" name="Calle" id="Calle" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Noext" className={styles.campo_label}>No. Ext</label>
             <input type="number" name="Noext" id="Noext" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Noint" className={styles.campo_label}>No. Int</label>
             <input type="number" name="Noint" id="Noint"required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Cp" className={styles.campo_label}>Código Postal</label>
             <input type="number" name="Cp" id="CP" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Estado" className={styles.campo_label}>Estado</label>
             <input type="text" name="Estado" id="Estado" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Colonia" className={styles.campo_label}>Colonia</label>
             <input type="text" name="Colonia" id="Colonia" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="Municipio" className={styles.campo_label}>Municipio</label>
             <input type="text" name="Municipio" id="Municipio" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campor}>
            <div className={styles.radios}>
            <input type="radio" name="Terminos" id="Terminos" value="1" required className={styles.campo_radio}/>
            <a href="#"><label>  Acepto Términos y Condiciones</label> </a>
            </div>
            <div className={styles.radios}> 
            <input type="radio" name="suscripcion" id="suscripcion" value="1" required className={styles.campo_radio}/>
            <a href="#"><label> Suscripción a Newsletter</label> </a>
            </div>
            </div>
         </div>
        </div>

        <div className={styles.facturacion}>
          <div className={styles.datostitulof}>
            <label>Formas de Pago</label>
         </div>
         <div className={styles.gridf}>
            <div className={styles.radiotarjetas}>
            <div className={styles.tarjeta}>
            <input type="radio" name="tarjeta" id="credito" value="1" required className={styles.campo_radio}/>
             <label htmlFor="credito">Tarjeta de Crédito</label>
            </div>
            <div className={styles.tarjeta}>
            <input type="radio" name="tarjeta" id="debito" value="2" required className={styles.campo_radio}/>
             <label htmlFor="debito">Tarjeta de Débito</label>
            </div>
            <div className={styles.tarjeta}>
            <input type="radio" name="tarjeta" id="oxxo" value="3" required className={styles.campo_radio}/>
             <img src="/img/tarjetadesclub/OxxoLogo.png" width={100} height={100} alt="Logotipo Oxxo"/>
            </div>
            <div className={styles.tarjeta}>
            <input type="radio" name="tarjeta" id="paypal" value="4" required className={styles.campo_radio}/>
            <img src="/img/tarjetadesclub/PaypalLogo.png" width={100} height={100} alt="Logotipo Paypal"/>
            </div>
            </div>
            <div className={styles.campospago}>
            <div className={styles.campo}>
            <label htmlFor="NombreT" className={styles.campo_label}>Nombre (Como aparece en la tarjeta)*</label>
             <input type="text" name="nombreT" id="nombreT" required className={styles.campo_field}/>  
            </div>
            <div className={styles.campo}>
            <label htmlFor="NoTarjeta" className={styles.campo_label}>No. de Tarjeta</label>
             <input type="number" name="NoTarjeta" id="NoTarjeta" required className={styles.campo_field}/>  
            </div>

            <div className={styles.campocvv}>
            <div className={styles.fechaexp}>
            <label htmlFor="Fechaexp" className={styles.campo_label}>Fecha de Expiración (MM/YYYY)</label>
             <input type="number" name="Fechaexp" id="Fechaexp" required className={styles.campo_field}/>  
            </div>
            <div className={styles.cvc}>
            <label htmlFor="Cvc" className={styles.campo_label}>CVC</label>
             <input type="number" name="Cvc" id="Cvc" required className={styles.campo_field}/>  
            </div>
            </div>
            <div className={styles.contenedorboton}>
            <button type='button' className={styles.botoncomprar}>Comprar
            <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
            </button>
            </div>
            </div>
         </div>
        </div>
        </form>
        </div>
    </div>
    

    </div>

   
  )
}

export default Datosfacturacion