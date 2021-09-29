import { ArticleListItem } from "./ArticleListItem"

export const ArticleList = ({ articles }) => {
    return (
        <div className='flex flex-wrap'>
            {articles.map((article) => (
                <ArticleListItem key={article.id} article={article} />
            ))}
        </div>
    )
}
