import styles from '../../styles/TarjetaDesclub/descubre.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';
 
const items1=[
    {
    text:'Educación',
    image:'carrusel_educacion.png',
    id:1,
    clase:'imagen1' 
},
{
    text:'Entretenimiento',
    image:'carrusel_entretenimiento.png',
    id:2,
    clase:'imagen2'
},
{
    text:'Alimentos',
    image:'carrusel_alimentos.png',
    id:3,
    clase:'imagen3'
},
{
    text:'Deportes',
    image:'carrusel_deportes.png',
    id:4,
    clase:'imagen4'
},
{
    text:'Tecnología',
    image:'carrusel_tecnologia.png',
    id:5,
    clase:'imagen9'
},
{
    text:'Educación',
    image:'carrusel_educacion.png',
    id:5,
    clase:'imagen1'
},
{
    text:'Entretenimiento',
    image:'carrusel_entretenimiento.png',
    id:6,
    clase:'imagen2'
},
{
    text:'Alimentos',
    image:'carrusel_alimentos.png',
    id:7,
    clase:'imagen3'
},
{
    text:'Deportes',
    image:'carrusel_deportes.png',
    id:8,
    clase:'imagen4'
},
{
    text:'Tecnología',
    image:'carrusel_tecnologia.png',
    id:5,
    clase:'imagen9'
},
]



function Carrusel() {
    const [slides, SetSlides]=useState(0)
    function CambioTamano(){
      if(window.innerWidth<767){
        SetSlides(4)
      }else if(window.innerWidth>767 && window.innerWidth<900){
        SetSlides(5)
      }else{
        SetSlides(6)
      }
    }
   useEffect(()=>{
    CambioTamano();
    window.addEventListener('resize',CambioTamano);
    return()=>window.removeEventListener('resize',CambioTamano)
   },[])
   const settings = {
    autoplay:true,
    infinite: true,
    speed: 7000,
    autoplaySpeed:7000,
    slidesToShow: slides,
    slidesToScroll: 1,
    cssEase:"linear" 
  };
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

export default Carrusel