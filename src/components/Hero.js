import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold text-2xl'>Growing wtih data analytics</p>
        <h1 className='md:text-6xl sm:text-4xl font-bold md:py-4 '>Grow with data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-2xl sm:text-1xl font-bold  '>Fast, flexible financing for </p>
            <Typed className='md:text-2xl sm:text-1xl font-bold pl-2' strings={["TAILWIND","CSS","SASS"]}  typeSpeed={120}
                    backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl sm:text-1xl pt-4 text-gray-500'>Monitor your data analytics to increase revenue for TAILWIND, CSS, & SASS platforms</p>
        <button className='rounded bg-[#00df9a] py-3 text-black w-[150px] my-6 mx-auto font-medium'>Get Started</button>
    </div>
    </div>
  )
}

export default Hero