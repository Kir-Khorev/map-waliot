export default function About({posts}) {
    console.log(posts);
    
    return <div>О нас</div>
}

export async function getStaticProps() {
    const posts = await (await fetch('https://jsonplaceholder.typicode.com/todos/'))?.json()

    // обратите внимание на сигнатуру
    return {
        props: {
            posts
        }
    }
}