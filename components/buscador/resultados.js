import styles from "../../styles/Buscador/resultados.module.scss"
import Cupones from "./cupones"
import Tarjetacupon from "./tarjetacupon"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
    dots:true,
    autoplay:true,
      infinite: true,
      speed: 7000,
      autoplaySpeed:7000, 
      slidesToShow: 1,
      slidesToScroll: 1
  };
function Resultados() {
  return (
    <div className={styles.contenedorresultados}>
    <div className={styles.grid}>
    <div className={styles.cupones}>
    <Cupones/>
    </div>
    <div className={styles.carruselpromociones}>
        <div className={styles.sticky}>
        <div className={styles.desborde}>
        <Slider {...settings}>
        <div className={styles.slidercupones}>
        <Tarjetacupon/>
        </div>
        <div className={styles.slidercupones}>
        <Tarjetacupon/>
        </div>
        </Slider>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Resultados