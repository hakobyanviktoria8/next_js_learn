import articleStyle from "../styles/ArticleStyle.module.css"
import Link from 'next/link';

const ArticleItem = ({item}) => {
    return (
        <div className={articleStyle.border}>
            <Link href="/article/[id]" as={`/article/${item.id}`}>
                <a className={articleStyle.link}>{item.title}</a>
            </Link>
            <p>{item.body}</p>
        </div>
    )
};

export default ArticleItem