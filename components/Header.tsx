import Image from 'next/image'
import React from 'react'
import NavBar from './NavBar'
import { breakingNews } from '@/contants/data'
import CardXS from './Cards/CardXS'

const Header = () => {
  return (
    <header className='container'>
      <div className='flex-between h-[140px] border-primary-200 border-b-[1px]'>
        <div className='flex-center space-x-3'>
          {/* <Image  /> */}
          <div className='w-[30px] h-[30px] bg-red-400' />
          <div>
            <p className='text-xs_primary'>Friday</p>
            <span className='text-xs_secondary'>Apr 26, 2024</span>
          </div>
        </div>
        <div className='flex-center space-x-3'>
          
          {/* <Image  /> */}
          <div className='w-[30px] h-[30px] bg-red-400' />
          <div>
            <p className='text-xs_primary'>4°C, Overcast Clouds</p>
            <span className='text-xs_secondary'>London</span>
          </div>
        </div>
        <div className='text-gray-300' >
          DAILY NEWS
        </div>
        <div className='text-xs_primary'>SUBSCRIBE</div>
        <div className='text-xs_primary'>DARK MODE</div>
      </div>
      <NavBar />
      <div className=" py-10">
      <h2 className="pb-10 text-primary-200 text-sm font-light tracking-wider">BREAKING NEWS</h2>
    <div className="grid grid-cols-3">
      {breakingNews.map(data => <CardXS {...data} />) }
    </div>
        </div>
    </header>
  )
}

export default Header