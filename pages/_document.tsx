import Document, { Html, Head, Main, NextScript } from 'next/document'

class DJDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render () {
        return (
            <Html lang='en'>
                <Head />
                <body className='bg-black text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default DJDocument