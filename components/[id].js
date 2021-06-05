import Layout from './layout'
import {getAllPostIds, getPostData} from '../lib/posts'
import Date from './date'
import Head from "next/head"
// Add this import at the top of the file
import utilStyles from '../styles/utils.module.css'

export default function Post({postData}) {
    console.log("Post",postData);
    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article className={utilStyles.article11}>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}