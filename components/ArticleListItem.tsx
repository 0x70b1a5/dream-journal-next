import Link from 'next/link'

export const ArticleListItem = ({ article }) => {
    return (
        <div className='p-2 m-2
            rounded border border-white border-solid
            max-w-md'>
            <Link href='/article/[id]' as={`/article/${article.id}`}>
                <a>
                    <h3>
                        {article.title} &rarr;
                        <p>{article.body}</p>
                    </h3>
                </a>
            </Link>

        </div>
    )
}
