import Link from 'next/link';
import styles from '../styles/Home.module.css'
/*
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                {/!*next js org link*!/}
                <h1 className={styles.title}>
                    I learn next js in {" "}
                    <Link
                        href="https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website">
                        <a>Nextjs.org</a>
                    </Link>
                    {" "} site
                </h1>
                {/!*my create folder and file*!/}
                <h2>
                    Read {"    "}
                    <Link href="/posts/first-post">
                        <a>this page!</a>
                    </Link>
                    {/!*Learn <a href="https://nextjs.org">Next.js!</a>*!/}
                </h2>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <hr/>
                <h3 style={{color: 'red'}}>Start practises</h3>
                <Image
                    src="/isotipo.png"
                    height={144}
                    width={144}
                    alt="Your Name"
                />
                <Link href={"/posts/HelloWorld"}>
                    <a>HelloWorld</a>
                </Link>

            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
*/

import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import {getSortedPostsData} from "../lib/posts";
import ArticleList from "../components/ArticleList"

export default function Home({allArticle}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                <section className={utilStyles.headingMd}>
                    <p>[Your Self Introduction]</p>
                    <p>
                        (This is a sample website - you’ll be building a site like this on{' '}
                        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                    </p>
                    {/*<h2>
                    Read {"    "}
                    <Link href="/components/first-post">
                    <a>this page!</a>
                    </Link>
                    </h2>*/}
                </section>
                <ArticleList allArticle={allArticle}/>
                   {/* chang whit Article componbent
                    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(date => (
                    <li className={utilStyles.listItem} key={date.id}>
                    {date.id}
                    <h3>{date.title}</h3>
                    <br/>
                    {date.body}
                    </li>
                    ))}
                    </ul>
                    </section>

                    <h2>
                    Read {"    "}
                    <Link href="posts/first-post.js">
                    <a>this page!</a>
                    </Link>
                    </h2>*/}
            </main>
        </Layout>
)
}
export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const allArticle = await res.json();
    return {
    props: {
    allArticle
}
}
}

    /*export async function getStaticProps() {
        // Get external data from the file system, API, DB, etc.
        // const res = await fetch(`https://.../data`);
        // const data = await res.json()
        const data = [1,2,3,4,5];

        if (!data) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
        // The value of the `props` key will be
        //  passed to the `Home` component
        return {
            props: {data}
        }
    }*/


// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData
//         }
//     }
// }


//
// export async function getServerSideProps(context) {
//     return {
//         props: {
//             // props for your component
//         }
//     }
// }