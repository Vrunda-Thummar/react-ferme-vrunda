import React from 'react'
import img1 from '../assets1/img8.png'
import img2 from '../assets1/img12.png'
import img3 from '../assets1/asset 24.svg'
import img4 from '../assets1/img13.png'
import img5 from '../assets1/img7.png'
import img6 from '../assets1/asset 28.png'
import img7 from '../assets1/asset 30.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-white mt-40 p-16'>
                <h1 className='text-teal-900 flex justify-center text-3xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Real Reviews From Real Costumer</h1>
                <div>
                    <div className='mt-5 px-20 ml-4'>
                        <div>
                            <div className='flex'>
                                <img className='w-20 ml-5' src={img1} alt="" />
                                <img className='w-28 ml-24' src={img2} alt="" />
                                <p className='text-teal-900 text-xxs ml-16 mt-1'>3 days ago</p>
                                <img className='w-28 ml-8' src={img2} alt="" />
                                <p className='text-teal-900 text-xxs ml-12 mt-1'>2 days ago</p>
                                <img className='w-28 ml-10' src={img2} alt="" />
                                <p className='text-teal-900 text-xxs ml-16 mt-1'>3 days ago</p>
                            </div>
                            <div className='flex'>
                                <p className='text-xs text-teal-900 ml-12 mt-2 font-semibold'>Exellent</p>
                                <p className='text-xs text-teal-900 ml-28 mt-2 font-semibold'>Exelent quality</p>
                                <p className='text-xs text-teal-900 ml-44 mt-2 font-semibold'>Absolutely thrilled with my order</p>
                                <p className='text-xs text-teal-900 ml-16 pl-2 mt-2 font-semibold'>Exelent quality</p>
                            </div>
                            <div className='flex'>
                                <img className='w-32' src={img2} alt="" />
                                <div className='size-8 rounded-full ml-10' style={{ backgroundColor: '#f6f4f1' }}>
                                    <img className='size-5 mt-1.5 ml-1.5' src="https://img.icons8.com/?size=100&id=XjzeR75S6vyF&format=png&color=000000" alt="" />
                                </div>
                                <p className='text-teal-900 text-xxs mt-1'>Exelent quality meat, fish and vegetables<br></br>delivered and very well packed.</p>
                                <p className='text-teal-900 text-xxs mt-1 ml-20'>Absolutely thrilled with my order, thank<br></br>you!!!</p>
                                <p className='text-teal-900 text-xxs mt-1 ml-16 pl-3'>Exelent quality meat, fish and vegetables<br></br>delivered and very well packed.</p>
                                <div className='size-8 rounded-full ml-2' style={{ backgroundColor: '#f6f4f1' }}>
                                    <img className='size-5 mt-1.5 ml-1.5' src="https://img.icons8.com/?size=100&id=99982&format=png&color=000000" alt="" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex'>
                                    <p className='text-teal-900 text-xs mt-1'>Based on</p>
                                    <p className='text-teal-900 text-xs mt-1 ml-1 font-semibold underline decoration-solid'>3,442 reviews</p>
                                </div>
                                <p className='text-teal-900 text-xxs ml-16 pl-2 mt-2'>MS</p>
                                <p className='text-teal-900 text-xxs ml-60 pl-1 mt-2'>Sarah Smith</p>
                                <p className='text-teal-900 text-xxs ml-48 pl-2 mt-2'>MS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-40 py-16'>
                <div className='flex'>
                    <h1 className='text-teal-900 text-base' style={{ fontFamily: 'Cormorant sans-serif' }}>Contact us</h1>
                    <h1 className='text-teal-900 ml-40 text-base'>Ordering & Delivery</h1>
                    <h1 className='text-teal-900 ml-44 text-base'>Subscribe & Get Free Delivery</h1>
                </div>
                <div className='flex mt-5'>
                    <p className='text-teal-900 text-xs'>Ferme<br></br>77 Worth Street, Floor 1,<br></br>New York, NY 10013</p>
                    <div className='flex'>
                        <p className='text-teal-900 text-xs ml-24 pl-1'>Delivery is always free. All you need to do<br></br> is meet our minimum spend. For more<br></br> information read our FAQ</p>
                    </div>
                    <p className='text-teal-900 text-xs ml-24 pl-1'>Enter your email</p>
                    <img className='ml-72 size-5' src={img3} alt="" />
                </div>
                <div className='flex mt-10'>
                    <div className='text-teal-900 text-xs'>+1 345 5678 93</div>
                    <img className='w-44 ml-32' src={img4} alt="" />
                    <img className='size-16 ml-40' src={img5} alt="" />
                    <img className='size-16 ml-10' src={img6} alt="" />
                    <img className='size-16 ml-10' src={img7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
