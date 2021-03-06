import Head from 'next/head'

// look up next/seo package
const Meta = ({title, keywords,description}: {title:string, keywords:string, description:string}) => {
    return (
        <Head>
            <meta name='viewport'
                  content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Dream Journal II',
    keywords: 'dreams, dream journal, diary',
    description: 'A place to remember your dreams.'
}

export default Meta