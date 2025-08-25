import React from 'react'
import wix from '../assets/wix.jpeg'
import {Link} from 'react-router-dom'
import google from '../assets/google.webp'
import facebook from '../assets/facebook.webp'

export default function Edit() {
  return (
    <div className='m-32'>
       
            <img src={wix} alt="wix" height='50px' width='100px' className='p-[12px] xl:mr-[260px] md:h-[50px] cursor-pointer
             md:w-[100px] ml-7' />
          

          <div className='mt-5 '>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-bold text-5xl mb-2'>
                    Sign Up
                </h2>
                <p className='text-xl mt-1.5 '>Already have an account? <a href='#' className='text-blue-600 hover:underline hover:text-blue-400 ' >Log In</a></p>


            </div>
               <div className='flex justify-center items-center'>
                 <form method='post' className='m-10  flex flex-col w-[600px] border-r-[#d6d6cb] border-r-2 p-20' >
                    
                    <input type='email' placeholder='Email' className='border-b-2 border-[#d6d6cb] text-gray-800 text-xl m-8 ' style={{}}/>
                    <input type='email' placeholder='Confirm email' className='border-b-2 border-[#d6d6cb] text-gray-800 text-xl m-8 ' style={{}}/>
                    <input type='password' placeholder='Choose a password' className='border-b-2 border-[#d6d6cb] text-gray-800 text-xl m-8 ' style={{}}/>
                    <input type='password' placeholder='Confirm password' className='border-b-2 border-[#d6d6cb] text-gray-800 text-xl m-8 ' style={{}}/>
                       <button className='text-blue-500 bg-white border-[1px] p-3.5 rounded-[30px] border-[#d6d6cb] lg:mr-[270px] lg:ml-[30px] md:mr-[100px] md:ml-[30px] font-bold'>Sign Up</button>
                </form>
                <div className='flex flex-col  mt-32 gap-5 lg:p-20 md:p-0'>
                    <a href='www.google.com'>
                        <img  src={google} height='200px' width='200px' />
                    </a>
                    <a href='www.facebook.com'>
                        <img src={facebook} height='100px' width='100px' className='flex justify-center items-center ml-10' />
                    </a>
                </div>
               </div>


          </div>
    </div>
  )
}
