import '../styles/globals.scss'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [carrito,setCarrito]=useState([])

  function agregarTarjeta(){
    console.log('Agregando');
  }

  return <Component {...pageProps} 
  carrito={carrito}
  agregarTarjeta={agregarTarjeta}
  />
}

export default MyApp
