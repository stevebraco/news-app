import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardList() {
  return (
    <div className='max-w-[270px] bg-primary-300'>
      <div className='p-4'>
      <h3>TRENDING POSTS</h3>
      </div>
      <div className='relative h-[180px]'>
        <div className='card-img card-gradient'>
          <Image
            src="https://newzin.themescamp.com/original/wp-content/uploads/sites/2/2022/06/ruby-schmank.jpg"
            width={270}
            height={180}
            alt='img'
          />
        </div>
        <div className='flex flex-col justify-end h-full p-4 relative z-20'>
          <Link href='/' className='text-xs_t'>LIFESTYLE</Link>
          <h3 className='h3-title text-primary-300'>The story about Hoki</h3>
        </div>
      </div>
      <div className='px-4 bg-primary-300'>

      <div className='flex-center space-x-10 py-4 border-primary-200 border-b-[1px]'>
        <span className='text-[32px]'>2</span>
        <div>
        <Link href='/' className='text-xs_secondary'>NEWS</Link>
        <h3 className='font-bold text-sm mt-3'>Elon Musk got Twitter because he gets Twitter</h3>
          </div>
      </div>
      <div className='flex-center space-x-10 py-4 border-primary-200 border-b-[1px]'>
        <span className='text-[32px]'>3</span>
        <div>
        <Link href='/' className='text-xs_secondary'>NEWS</Link>
        <h3 className='font-bold text-sm mt-3'>Elon Musk got Twitter because he gets Twitter</h3>
          </div>
      </div>
      <div className='flex-center space-x-10 py-4 border-primary-200 border-b-[1px]'>
        <span className='text-[32px]'>4</span>
        <div>
        <Link href='/' className='text-xs_secondary'>NEWS</Link>
        <h3 className='font-bold text-sm mt-3'>Elon Musk got Twitter because he gets Twitter</h3>
          </div>
      </div>
      <div className='py-4'>
        <Link href='/' className='text-xs_secondary'>See all posts </Link>
      </div>
    </div>
    </div>
  )
}
