import styles from "../../styles/Directorio/marcas.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";

const marcas=[{
    image:'acuario.png',
    id:1,
    text:'Acuario Michin'
},
{
  image:'enviaflores.png',
  id:2,
  text:'Envia Flores'
},
{
  image:'divya.png',
  id:3,
  text:'Divya'
},
{
  image:'papalote.png',
  id:4,
  text:'Papalote Museo del Niño'
},
{
  image:'bellisima.png',
  id:5,
  text:'Bellisima'
},
{
  image:'pasalapagina.png',
  id:6,
  text:'Pasa la Página'
},
{
  image:'mision.png',
  id:7,
  text:'Mision'
},
{
  image:'petngo.png',
  id:8,
  text:'Pet & Go'
},
{
  image:'moon.png',
  id:9,
  text:'Moon Yoga'
},
{
  image:'steve.png',
  id:10,
  text:'Steve Madden'
},{
  image:'acuario.png',
  id:11,
  text:'Acuario Michin'
},
{
image:'enviaflores.png',
id:12,
text:'Envia Flores'
},
{
image:'divya.png',
id:13,
text:'Divya'
},
{
image:'papalote.png',
id:14,
text:'Papalote Museo del Niño'
},
{
image:'bellisima.png',
id:15,
text:'Bellisima'
},
{
image:'pasalapagina.png',
id:16,
text:'Pasa la Página'
},
{
image:'mision.png',
id:17,
text:'Mision'
},
{
image:'petngo.png',
id:18,
text:'Pet & Go'
},
{
image:'moon.png',
id:19,
text:'Moon Yoga'
},
{
image:'steve.png',
id:20,
text:'Steve Madden'
}
]


function Marcas() {
  const [slides, SetSlides]=useState(0)
  function CambioTamano(){
    if(window.innerWidth<767){
      SetSlides(5)
    }else if(window.innerWidth>767 && window.innerWidth<900){
      SetSlides(8)
    }else{
      SetSlides(10)
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
    speed: 5000,
    autoplaySpeed:5000,
    slidesToShow: slides,
    slidesToScroll: 1,
    cssEase:"linear"
};
  return (
    <div className={styles.marcas}>
<Slider {...settings}>
    {marcas.map(marca=>{
        return(
            <div key={marca.id} className={styles.marca}>
                    <div className={styles.imagen}> 
                    <img src={`/img/Directorio/${marca.image}`} width={50} height={50} alt={`Imagen ${marca.text}`}/>
                    </div> 
             </div>
        )
    })}
        </Slider>
    </div>
    
  )
}

export default Marcas