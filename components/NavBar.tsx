import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-full h-[70px]  border-primary-100 border-b-2 flex-between'>
      <div className='flex-center space-x-8'>
      <Link className='text-xs_primary' href='/'>Home</Link>
      <Link className='text-xs_primary' href='/'>Post Layouts</Link>
      <Link className='text-xs_primary' href='/'>Page</Link>
      <Link className='text-xs_primary' href='/'>Blog</Link>
      <Link className='text-xs_primary' href='/'>Lifestyle</Link>
      <Link className='text-xs_primary' href='/'>Entertainment</Link>
      </div>
      <div>connexion / search</div>
    </nav>
  )
}

export default NavBar