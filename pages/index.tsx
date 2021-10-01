import Head from 'next/head'
import { DreamList } from '../components/DreamList'
import {server} from '../config'

export default function Home({ dreams }) {
  console.log(dreams)

  return (
    <div>
      <h2 className='text-2xl'>
        Home Page
      </h2>

      <DreamList dreams={dreams} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const dreams = await res.json()

//   return {
//     props: {
//       dreams
//     }
//   }

// }


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/dreams`)
  const dreams = await res.json()

  return {
    props: {
      dreams
    }
  }

}