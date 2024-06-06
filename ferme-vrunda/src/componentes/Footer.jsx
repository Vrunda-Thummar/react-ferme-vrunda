import React from 'react'
import img1 from '../assets1/img8.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-white mt-40 p-16'>
                <h1 className='text-teal-900 flex justify-center text-2xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Real Reviews From Real Costumer</h1>
                <div>
                {/* <div className='mt-5 px-36'> */}
                    <img className='w-20' src={img1} alt="" />
                    <p className='text-xs text-teal-900 ml-5 mt-3 font-semibold'>Exellent</p>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
