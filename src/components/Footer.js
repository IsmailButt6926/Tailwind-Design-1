import React from 'react'
import { BsInstagram,BsFacebook,BsTwitter,BsGithub } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='max-w-[1880px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-gray-100'>
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus
                </p>
                <div className='flex flex-row justify-between my-6 md:w-[75%]'>
                    <BsInstagram size={25}/>
                    <BsFacebook size={25}/>
                    <BsTwitter size={25}/>
                    <BsGithub size={25}/>
                </div>
            </div>
            <div className='lg:grid-col-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
      <div className='lg:grid-col-1 flex justify-between mt-6'>sdsa</div>
            
        </div>
        
    )
}

export default Footer