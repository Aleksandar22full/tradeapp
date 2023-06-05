import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>TRADING IS WAY BETTER!</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Are you still BETTING in 2023?</h1>
                <p className='leading-relaxed font-normal'>
                If you're still gambling in 2023, you should consider how you're spending your money.
                You keep losing, and you're not sure why. The maths and the odds are against you, so that explains it.
                You are on the correct track if you are reading this, so don't worry.
                Anyone who has even a little knowledge of sports is prepared to earn money every week with our help.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-lg'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
