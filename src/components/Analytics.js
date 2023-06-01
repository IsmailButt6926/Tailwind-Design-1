import React from 'react'
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
                <div className='flex flex-col justify-center '>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md-text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className='rounded w-[150px] bg-black text-[#00df9a] mx-auto py-3 mt-4 font-medium'>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics