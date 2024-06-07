import React from 'react'
import Navbar from '../componentes/Navbar'
import img1 from '../assets1/asset 34.svg'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-20'>
                <div className='flex justify-center'>
                    <img className='h-10 w-9' src={img1} alt="" />
                </div>
                <h1 className='flex justify-center mt-5 text-5xl text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Account</h1>
                <div className='flex justify-center'>
                    <p className='text-teal-900'>SIGN IN</p>
                    <p className='text-teal-900'>REGISTER</p>
                </div>
            </div>
        </div>
    )
}

export default Login
