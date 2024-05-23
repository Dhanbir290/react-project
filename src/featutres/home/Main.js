import React from 'react'
import Display from './Display'

const Main = () => {
  return (
    <div className='grid grid-cols-2 bg-slate-800 items-center text-white sm:grid-cols-1'>
      <Display />
      <div className="another sm:text-center sm:px-2">
        <h1 className='text-2xl'>Greetings myself DHANBIR</h1>
        <p className='text- my-2 italic tracking-wider'>Computer Engineer</p>
        <p className='sm:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nam velit repellendus aliquid earum eius necessitatibus magnam, consequuntur tenetur, dicta cupiditate cumque possimus laudantium consectetur reiciendis commodi omnis nemo accusantium?</p>
        <button className='bg-yellow-50 text-black hover:bg-red-200 my-4 py-2 px-2 rounded-lg 
        hover:animate-bounce'>Contact me</button>
      </div>
    </div>
  )
}

export default Main