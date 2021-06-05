import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../components/layout";
// import styles from "../../styles/first-post.css"

export default function FirstPost() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <main>
                    <h1>First Post</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloribus explicabo ipsam, iste
                        magni maiores non omnis optio quas quos rerum temporibus vitae voluptates. Consectetur id iure
                        molestias tenetur voluptas?
                    </p>
                </main>
            </Layout>
        </div>
    )
}