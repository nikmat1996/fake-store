import Link from 'next/link'

const Header = () => {
  return (
    <nav className="space-x-4 mx-auto p-5 ">
        <Link href={'/'}>Home</Link>
        <Link href={'/cart'}>Cart</Link>
    </nav>
  )
}

export default Header
