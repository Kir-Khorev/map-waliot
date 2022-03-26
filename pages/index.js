import Head from "next/head"
import Footer from "../components-layout/Footer"
import Header from "../components-layout/Header"
import Map from "./Map/Map"
import dynamic from "next/dynamic"

export default function Index({ carsData }) {
    const MapNoSSR = dynamic(() => import("./Map/Map.js"), {
        ssr: false
    })

    return (
        <>
            <Head>
                <title>Cars Map Walliot | Khorek </title>
                <meta name="keywords" content="map, cars,"></meta>
                <meta name="description" content="Cars Map Walliot | Khorek. Car sharing Service"></meta>
                <meta name="charSet" content="utf-8"></meta>
            </Head>
            <Header></Header>
            {/* <Map cars={carsData}></Map> */}
            <MapNoSSR cars={carsData}/>
            <Footer></Footer>
        </>
    )
}

export async function getStaticProps(ctx) {
    // if (!ctx.req) {
    //     return { cars: null }
    // }

    const res = await fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
    const carsData = await res.json()

    return {
        props: {
            carsData
        }
    }
}
