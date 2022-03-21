import NextNProgress from "nextjs-progressbar";
import '../styles/main.css';

export default function App({ Component, pageProps }) {
    return (<>
        <Component {...pageProps} />
        <NextNProgress
            color="lightgreen"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />
    </>)
}