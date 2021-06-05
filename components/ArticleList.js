import articleStyle from "../styles/ArticleStyle.module.css"
import ArticleItem from "./ArticleItem";

const ArticleList = ({allArticle}) => {
    return (
        <div className={articleStyle.div}>
            {allArticle.map(item =>
                <ArticleItem item={item} key={item.id}/>
            )}
        </div>
    )
};

export default ArticleList