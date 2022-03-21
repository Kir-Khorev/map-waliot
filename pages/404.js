import Link from "next/link"
import Footer from "../components-layout/Footer"

export default function ErrorPage() {
    return (
        <>
            <h2>Error 404</h2>
            <Link href={'/'}><a>Go to Home</a></Link>
            <Footer></Footer>
        </>
    )
}
