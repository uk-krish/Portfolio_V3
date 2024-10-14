import React from 'react'
import { NavbarContent } from '../config'
const Navabar = () => {
  return (
    <div className='m-5 flex items-center justify-between'>
      <h1 className='ml-3 tracking-wider  space-mono-regular '>
        {'< '} <span className='aguafina-script-regular text-2xl tracking-widest'>uk_krish</span> {'/>'}
      </h1>
      <div className='mr-10 flex'>
        {
          NavbarContent.map((nav) => (
            <div className='mx-10 ' key={nav.id}>
              {nav.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Navabar
