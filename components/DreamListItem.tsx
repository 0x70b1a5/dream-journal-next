import Link from 'next/link'

export const DreamListItem = ({ dream }) => {
    return (
        <div className='p-2 m-2
            rounded border
            hover:bg-gray-800
            max-w-md'>
            <Link href='/dream/[id]' as={`/dream/${dream.id}`}>
                <a>
                    <h3>
                        {dream.title} &rarr;
                        <p>{dream.excerpt}</p>
                    </h3>
                </a>
            </Link>

        </div>
    )
}
