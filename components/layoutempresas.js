import Head from "next/head"
import Headerem from "./headerem"
import Footerem from "./footerem"
import Headeremmobile from "./headeremmobile"
import { useEffect, useState } from "react"


function Layoutempresa({children,title='',desctiption=''}) {
  const [width, Setwidth]=useState(window.innerWidth)
  function CambioTamano(){
    Setwidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',CambioTamano);
    return()=>{
      window.removeEventListener('resize',CambioTamano)
    }
  })
  return (
    <>
    <Head>
        <title>{`Desclub-${title}`}</title>
        <meta name="description" content={desctiption}/>
    </Head>
    {width >=900?<Headerem/>:<Headeremmobile/>}
    {children}
    <Footerem/>
    </>
  )
}

export default Layoutempresa  