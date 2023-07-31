import styles from "../../styles/HotDeals/hotdeals.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cupones=[{
    image:'HotDeals.png',
    id:1,
    text:'Cupon Diversión sin limites'
},
{
    image:'HotDeals.png',
    id:2,
    text:'Cupon Diversión sin limites'
},
{
    image:'HotDeals.png',
    id:3,
    text:'Cupon Diversión sin limites'
},
{
    image:'HotDeals.png',
    id:5,
    text:'Cupon Diversión sin limites'
},
{
    image:'HotDeals.png',
    id:6,
    text:'Cupon Diversión sin limites'
}]
const settings = {
    dots:true,
    autoplay:true,
      infinite: true,
      speed: 5000,
      autoplaySpeed:5000,
      slidesToShow: 1,
      slidesToScroll: 1
  };
function Slidercupones() {
  return (
    <div className={styles.contenedorslider}>
        <Slider {...settings}>
    {cupones.map(cupon=>{
        return(
            <div key={cupon.id} className={styles.cupon}>
                    <div className={styles.imagen}> 
                    <img src={`/img/HotDeals/${cupon.image}`} width={50} height={50} alt={`Imagen ${cupon.text}`}/>
                    </div> 
             </div>
        )
    })}
        </Slider>
    </div>
  )
}
export default Slidercupones