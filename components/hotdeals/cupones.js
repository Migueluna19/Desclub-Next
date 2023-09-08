import styles from "../../styles/HotDeals/hotdeals.module.scss"

const descuentos=[{
    image:'recorcholis.png',
    id:1,
    text:'Cupon Recorcholis'
},
{
    image:'upa.png',
    id:2,
    text:'Cupon Upa'
},
{
    image:'suburbia.png',
    id:3,
    text:'Cupon Suburbia'
},
{
    image:'bioparque.png',
    id:4,
    text:'Cupon Bioparque'
}
]
function Cupones() {
  return (
    <div className={styles.contenedorcupones}>
        <div className={styles.titulos}>
            <h2>Tus cupones Favoritos</h2>
        </div>
        <div className={styles.gridcupones}>
        {descuentos.map(descuento=>{
            return(
                <div key={descuento.id} className={styles.imagen}>
                    <img src={`/img/HotDeals/${descuento.image}`} width={50} height={50} alt={`Imagen ${descuento.text}`}/>
                </div>
            )
        })}
        </div>
        <div className={styles.contenedorboton}>
        <button type='button' className={styles.botoncomprarh}>Comprar
        <img src='img/flechaboton.svg' width={20} height={20} alt='Flecha Boton'/>
        </button>
        </div>
    </div>
  )
}

export default Cupones