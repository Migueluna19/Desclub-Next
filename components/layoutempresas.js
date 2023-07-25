import Head from "next/head"
import Headerem from "./headerem"
import Footerem from "./footerem"


function Layoutempresa({children,title='',desctiption=''}) {
  return (
    <>
    <Head>
        <title>{`Desclub-${title}`}</title>
        <meta name="description" content={desctiption}/>
    </Head>
    <Headerem/>
    {children}
    <Footerem/>
    </>
  )
}

export default Layoutempresa 