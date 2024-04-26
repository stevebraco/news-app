import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardSM() {
  return (
    <div className='w-[270px] bg-primary-300 mb-4'>
      <Image 
        src='https://newzin.themescamp.com/original/wp-content/uploads/sites/2/2022/06/edvin-johansson.jpg'
        width={270}
        height={180}
        alt='img'
      />
      <div className='flex flex-col space-y-4 px-3 py-4'>
      <Link href='/' className='text-xs_secondary'>Sponsored Content</Link>
      <h3 className='h3-title'>3D2N at Sixsense Resort 5 starts just $1,299</h3>
      <Link href='/' className='text-xs_secondary'>booking.com</Link>
      </div>
    </div>
  )
}
