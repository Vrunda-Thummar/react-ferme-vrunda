import React from 'react'
import img1 from '../assets1/asset 0.svg'
import img2 from '../assets1/asset 1.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-stone-100'>
            <nav>
                <div className='flex border border-teal-900'>
                    <div className='bg-teal-900 size-16 p-5'>
                        <img className='size-6' src={img1} alt="" />
                    </div>
                    <img className='size-11 ml-4 mt-3' src={img2} alt="" />
                
                    <div className='items-center flex justify-center ml-64 font-medium text-xs text-teal-900'>
                        <ul className='flex'>
                            <li>
                                <Link className='ml-4' to="/">HOME</Link>
                            </li>
                            <li>
                                <Link className='ml-4' to="Newin">SHOP ONLINE</Link>
                            </li>
                            <li>
                                <Link className='ml-4' to="">ABOUT</Link>
                            </li>
                            <li>
                                <Link className='ml-4' to="Produce">PRODUCE</Link>
                            </li>
                            <li>
                                <Link className='ml-4' to="">VISIT</Link>
                            </li>
                            <li>
                                <Link className='ml-4' to="">JOIN OUR CSA</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center ml-80'>
                        <img className='size-4 ml-5' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
                        <img className='size-4 ml-5' src="https://img.icons8.com/?size=100&id=mj4zUKpD4IjJ&format=png&color=737373" alt="" />
                        <img className='size-4 ml-5' src="https://img.icons8.com/?size=100&id=82712&format=png&color=737373" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
