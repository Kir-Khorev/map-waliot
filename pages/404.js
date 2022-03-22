import Link from "next/link"
import Footer from "../components-layout/Footer"
import Header from "../components-layout/Header"

export default function ErrorPage() {
    return (
        <>
            <Header></Header>
            <h1>Error 404</h1>
            <Link href={'/'}><a>Go to Home</a></Link>
            <Footer></Footer>
        </>
    )
}