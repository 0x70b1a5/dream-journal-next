import Link from 'next/link'
import {server} from '../../config'
import Meta from '../../components/Meta'
import {remark} from 'remark'
import rHtml from 'remark-html'
import Date from '../../components/Date'

const dream = ({ dream }) => {
    return <>
        <Meta title={dream.title} description={dream.excerpt} />
        <h2 className='text-2xl'>
            {dream.title} 
            <span className='text-sm ml-3'>
                <Date dateString={dream.date} />
            </span>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: dream.body }} />
        <br/>
        <Link href='/'>&larr; Back</Link>
    </>
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/dreams/${context.params.id}`)

    const dream = await res.json()
    remark()
        .use(rHtml)
        .process(dream.body)
        .then(file => {
            dream.body = String(file)
        })

    return {
        props: {
            dream
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/dreams/`)
    const dreams = await res.json()

    const ids = dreams.map(a=>a.id)
    const paths = ids.map(id=>({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
}


// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const dream = await res.json()

//     return {
//         props: {
//             dream
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//     const dreams = await res.json()

//     const ids = dreams.map(a=>a.id)
//     const paths = ids.map(id=>({params: {id: id.toString()}}))
    
//     return {
//         paths,
//         fallback: false
//     }
// }


export default dream