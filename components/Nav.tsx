import NavLink from './NavLink'

const Nav = () => {
    return (
        <nav className='border-b'>
            <ul className='flex justify-around'>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/about'>About</NavLink>
            </ul>
        </nav>
    )
}

export default Nav