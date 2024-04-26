import Image from 'next/image'
import React from 'react'

export default function CardXS({name, date, img}: {name: string, date:string, img: string}) {
  return (
    <div className='flex items-center space-x-5'>
      <div className=''>
        <Image 
        src={img}
        width={100} 
        height={200} 
        alt='img'
        />
      </div>
      <div className='max-w-[220px]'>
        <h3 className='h3-title'>{name}</h3>
        <p className='text-xs_secondary pt-2'>{date}</p>
      </div>
    </div>
  )
}
