import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

 const Layout = ({children}) => {
    return (
        <>
        <Meta />
        <Nav />
        <div className='container mx-auto p-4'>
            <main>
                <Header />
                {children}

            </main>
        </div>
        </>
    )
}

export default Layout