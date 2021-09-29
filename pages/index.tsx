import Head from 'next/head'
import { ArticleList } from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles)

  return (
    <div>
      <Head>
        <title>Dreaming of Journals</title>
        <meta name='keywords' content='dream, journal' />
      </Head>
      <h2 className='text-2xl'>
        Home Page
      </h2>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }

}