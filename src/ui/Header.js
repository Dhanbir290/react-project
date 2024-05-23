import React from 'react'

const Header = () => {
  return (
    <div className='bg-yellow-50 text-black flex items-baseline justify-between py-9 px-2'>
      <h1 className='text-4xl'>PORTFOLIO</h1>
      <nav className=' text-2xl space-x-9 px-4'>
        <button className='hover:bg-pink-50 hover:scale-150'>About</button>
        <button className='hover:bg-pink-50 hover:scale-150 '>Contact</button>
      </nav>
    </div>
  )
}

export default Header