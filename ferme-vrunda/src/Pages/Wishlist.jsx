import React from 'react'
import Navbar from '../componentes/Navbar'
import img1 from '../assets1/asset 33.svg'

const Wishlist = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-10'>
                <h1 className='flex justify-center text-teal-900 text-5xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Wishlist</h1>
                <p className='flex justify-center text-teal-900 mt-5 text-sm'>There are no products on the Wishlist!</p>
                <div className='flex justify-center'>
                    <img className='mt-10 size-32' src={img1} alt="" />
                </div>
                <p className='flex justify-center text-teal-900 mt-5'>Look for the heart to save favorites while you shop.</p>
                <div className='flex justify-center'>
                    <button className='bg-teal-900 text-white text-xs font-semibold mt-5 px-6 py-2'>START SHOPPING</button>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
