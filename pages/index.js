import Link from "next/link"
import Head from "next/head"
import Footer from "../components-layout/Footer"
import Header from "../components-layout/Header"
import Map from "./Map/Map"

export default function Index() {

    return (
        <>
            <Head>
                <title>My Own Title Next.js</title>
            </Head>
            <Header></Header>
            <Map></Map>
            <Footer></Footer>
        </>
    )
}