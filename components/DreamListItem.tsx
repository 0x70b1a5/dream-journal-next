import Link from 'next/link'

export const DreamListItem = ({ dream }) => {
    return (
        <div className='p-2 m-2
            rounded border
            hover:bg-gray-800
            max-w-md'>
            <Link href='/dream/[id]' as={`/dream/${dream.id}`}>
                <a>
                    <h3 className='text-xl'>
                        {dream.title}
                        <span className='text-sm ml-2'>{dream.date}</span> &rarr;
                    </h3>
                    <p>{dream.excerpt}</p>
                </a>
            </Link>

        </div>
    )
}
