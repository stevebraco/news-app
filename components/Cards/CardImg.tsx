import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardImg() {
  return (
    <div className='relative max-w-[270px] h-[300px]'>
      <div className="card-img card-gradient">
        <Image 
          src='https://newzin.themescamp.com/original/wp-content/uploads/sites/2/2022/06/tom-morbey.jpg'
          width={270}
          height={180}
          alt='img'
          style={{width: '100%', height: '100%'}}
        />
      </div>
      <div className='relative z-20 flex flex-col justify-between h-full'>
      <Link href='/' className='text-xs_t p-7'>BUSINESS</Link>
      <div className='p-7'>
      <h3 className='h3-title text-primary-300'>Big Title for featured post with double</h3>
      <div className='mt-3'>
        <span className='text-xs_secondary'>Jun 18, 2024</span>
      </div>
      </div>
      </div>
    </div>
  )
}
