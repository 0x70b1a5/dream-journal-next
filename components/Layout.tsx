import Nav from './Nav'
import Header from './Header'

 const Layout = ({children}) => {
    return (
        <>
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