import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"
const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className=' grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt='/' />
                    <h2 className='text-2xl font-bold text-center py-8 '>Single User</h2>
                    <p className='text-3xl font-bold text-center'>$149</p>
                    <div className='text-center font-medium '>
                        <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>

                    </div>
                    <button className='w-[150px] mx-auto py-3 rounded text-black bg-[#00df9a] font-medium my-4 '>Start Trail</button>
                </div>

                <div className='w-full bg-gray-100 shadow-xl rounded flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt="/" />
                    <h1 className='text-center py-8 text-2xl font-bold'>Partnership</h1>
                    <p className='text-center text-3xl font-bold'>$199</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8 mt-4'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                        <p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
                    </div>
                    <button className='w-[150px] mx-auto rounded bg-black text-[#00df9a] py-3 font-medium my-4'>Start Trail</button>
                </div>

                <div className='w-full shadow-xl rounded flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt="/" />
                    <h1 className='text-center py-8 text-2xl font-bold'>Partnership</h1>
                    <p className='text-center text-3xl font-bold'>$199</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8 mt-4'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                        <p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
                    </div>
                    <button className='w-[150px] mx-auto py-3 rounded text-black bg-[#00df9a] font-medium my-4'>Start Trail</button>
                </div>


            </div>
        </div>
    )
}

export default Cards