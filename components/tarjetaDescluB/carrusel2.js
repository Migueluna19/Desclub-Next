import styles from '../../styles/TarjetaDesclub/descubre.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items1=[
    {
    text:'Turismo',
    image:'carrusel_turismo.png',
    id:1,
    clase:'imagen5'
},
{
    text:'Belleza y Salud',
    image:'carrusel_belleza.png',
    id:2,
    clase:'imagen6'
},
{
    text:'Moda y Hogar',
    image:'carrusel_moda.png',
    id:3,
    clase:'imagen7'
},
{
    text:'Servicios',
    image:'carrusel_servicios.png',
    id:4,
    clase:'imagen8'
},
{
    text:'Tecnología',
    image:'carrusel_tecnologia.png',
    id:5,
    clase:'imagen9'
},
{
    text:'Turismo',
    image:'carrusel_turismo.png',
    id:6,
    clase:'imagen5'
},
{
    text:'Belleza y Salud',
    image:'carrusel_belleza.png',
    id:7,
    clase:'imagen6'
},
{
    text:'Moda y Hogar',
    image:'carrusel_moda.png',
    id:8,
    clase:'imagen7'
},
{
    text:'Servicios',
    image:'carrusel_servicios.png',
    id:9,
    clase:'imagen8'
},
{
    text:'Tecnología',
    image:'carrusel_tecnologia.png',
    id:10,
    clase:'imagen9'
},
]

const settings = {
    autoplay:true,
    infinite: true,
    speed: 7000,
    autoplaySpeed:7000,
    slidesToShow: 6,
    slidesToScroll: -1,
    cssEase:"linear"
  };

function Carrusel2() {
  return (
    <Slider {...settings}>
    {items1.map(item=>{
        return(
            <div key={item.id} className={styles.item}>
                    <div className={item.clase}>
                    <img src={`/img/tarjetadesclub/carruseles/${item.image}`} width={50} height={50} alt={`Imagen ${item.text}`}/>
                    </div>
                            <div className={styles.titulo}>
                            <h4>{item.text}</h4>
                            </div>
             </div>
        )
    })}
        </Slider>
  )
}

export default Carrusel2