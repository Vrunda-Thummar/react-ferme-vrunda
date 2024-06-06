import React from 'react'
import Navbar from '../componentes/Navbar'
import img1 from '../assets1/asset 14.webp'

const Newin = () => {
  return (

    <div>
      <Navbar />
      <div className='relative'>
        <img className='absolute' src={img1} alt="" />
        <h1 className='absolute mt-32 text-6xl ml-60 font-medium text-white font-serif '>New In</h1>
      </div>
      <div className='w-2/6 p-10 mt-64 h-60 ml-40 bg-white absolute'>
        <p className='text-black ml-10 mt-10 text-teal-800 text-sm absolute'>Discover our latest food, drink and<br></br> homeware arrivals, including our new<br></br> selection of hampers</p>
      </div>
      <div>
        <div>
          <div className='w-40 h-80'>
            <h1 className='h-20 bg-green-200 text-red-900'>FILTER BY:</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newin
