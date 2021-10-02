import Link from 'next/link'

const NavLink = ({ href, children }: {href:string, children:any}) => {
    return (
        <Link href={href}>
            <li className='p-1 hover:bg-gray-800 flex-1 cursor-pointer text-center'>
                { children }
            </li>
        </Link>
    )
}

export default NavLink