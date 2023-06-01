import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w[1240px] mx-auto grid md:grid-cols-2 gap-[5rem]'>
                <div>
                    <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='py-4'>
                    <input className="py-2 rounded text-black"type='text' placeholder='Enter Email'/>
                    <button className='rounded w-[150px] text-black bg-[#00df9a] py-2 ml-2'>Notify me</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter