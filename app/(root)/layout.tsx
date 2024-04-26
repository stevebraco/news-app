import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main>
    <Header />
    <div className=''>{children}</div>
    </main>
  )
}

export default layout