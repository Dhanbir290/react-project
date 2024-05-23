import React from 'react'

const Business = () => {
  return (
    <div className='relative flex justify-center items-center' >
      <img className='  blur-sm w-full h-screen' src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="computer" />
      <div className='absolute'>
        <p className='  text-black text-3xl '>KNOW ABOUT US</p>
        <button className='bg-yellow-50 text-black hover:bg-red-200 my-4 py-2 px-2 rounded-lg 
        hover:animate-bounce '> learn more</button>
      </div>
    </div >
  )
}

export default Business