import {useRouter} from "next/router" // 1ex
import Link from "next/link"
import styles from "../../../styles/ArticleStyle.module.css";

const ArticleId = ({article}) => {
    //1ex
    // const router = useRouter();
    // console.log("ArticleId",router);
    // const {id}= router.query;

    return (
        <div className={styles.center}>
            <h1>Article  {article.id}</h1>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <Link href={"/"}>Back to home</Link>
        </div>
    )
};
//2ex Server Side Rendering
export const getServerSideProps = async(context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return{
        props:{
            article
        }
    }
};

/*//3ex bayc petqa avelacvi getStaticProps-ov
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await res.json();
    console.log("getStaticPaths", articles);
    const ids = articles.map(item => item.id);
    const paths = ids.map(id => ({
        params:{
            id:id.toString()
        }
    }));
    return {
        paths,
        fallback: false,
    }
};*/
export default ArticleId