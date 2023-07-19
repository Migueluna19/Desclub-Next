import Head from "next/head"
import Header from "./header"
import Footer from "./footer"


function Layout({children,title='',desctiption=''}) {
  return (
    <>
    <Head>
        <title>{`Desclub-${title}`}</title>
        <meta name="description" content={desctiption}/>
    </Head>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout