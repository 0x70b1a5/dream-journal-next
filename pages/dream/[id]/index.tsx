import {useRouter} from 'next/router'
import Link from 'next/Link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const dream = ({ dream }) => {
    // const router = useRouter()
    // const {id} = router.query 
    
    return <>
        <Meta title={dream.title} description={dream.excerpt} />
        <h2 className='text-2xl'>{dream.title}</h2>
        <p>{dream.body}</p>
        <br/>
        <Link href='/'>&larr; Back</Link>
    </>
}
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/dreams/${context.params.id}`)

    const dream = await res.json()

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