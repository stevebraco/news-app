import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Tag'

export default function CardImgXL() {
  return (
    <div className='relative max-w-[570px] h-[650px] flex flex-col justify-between'>
      <div className="card-img card-gradient">
        <Image
          src='https://newzin.themescamp.com/original/wp-content/uploads/sites/2/2022/06/post-02-1.jpg'
          width={270}
          height={180}
          alt='img'
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className='p-7 relative z-20'>
        <div className='space-x-5'>
      <Link href='/'>
          <Tag />
      </Link>
      <Link href='/'>
          <Tag />
      </Link>
        </div>
      </div>
      <div className='p-7 flex flex-col space-y-5 relative z-20'>
        <h3 className='text-[34px] font-bold text-primary-300'>2022 NFL Craf predict: Top 4 Quarterbacks selected</h3>
        <p className='text-primary-300'>
          Its first decline in subscribers since 2011 triggered a $54 billion stock value loss and raised questions[...]                                        </p>
        <div className='mt-3 flex space-x-24'>
          <span className='text-xs_secondary'>Jun 18, 2024</span>
          <span className='text-xs_secondary'>By David Bowie</span>
        </div>
      </div>
    </div>)
}
