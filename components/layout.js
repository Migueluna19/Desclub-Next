import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import Headermobile from "./headermobile"
import { useEffect, useState } from "react"


function Layout({children,title='',desctiption=''}) {
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
    {width >=900?<Header/>:<Headermobile/>}
    {children}
    <Footer/>
    </>
  )
}

export default Layout 