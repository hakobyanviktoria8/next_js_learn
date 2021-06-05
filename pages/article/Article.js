import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

const Article = ({allPostsData}) => {
    console.log("Article", allPostsData);
    return (
        <Layout>
            <Head>
                <title>Article</title>
            </Head>
            <main>
                <section>
                    <h2>Article</h2>
                    <ul>
                        {allPostsData && allPostsData.map(date => (
                            <li key={date.id}>
                                {date.id}
                                <h3>{date.title}</h3>
                                {date.body}
                                <hr/>
                            </li>
                        ))}
                    </ul>
                </section>

            </main>
        </Layout>
    )
};

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const allPostsData = await res.json();
    return {
        props: {
            allPostsData
        }
    }
}

export default Article

