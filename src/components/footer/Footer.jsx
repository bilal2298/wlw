import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import {IoLogoYoutube} from 'react-icons/io'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className=' h-auto bg-[#ECECEC]'>

                <div className=' max-w-screen-2xl flex p-5 gap-8 lg:flex-row flex-col items-center lg:justify-between  h-full m-auto'>

                    <div className='flex flex-col justify-between w-[301px] h-[306px] md:pb-0 pb-10'>
                        <span className='text-xl font-bold'>Sign up for news</span>
                        <p className='text-sm'>Keep up to date with the latest product launches and news. Find out more about our brands and get special promo codes.</p>
                        <input placeholder='Enter tour email' className='w-full rounded-lg focus:outline-none p-3 h-[48px]' type="text" />
                        <div className='w-full h-[48px] cursor-pointer flex items-center justify-around bg-[#4FD1C5] rounded-lg text-white'>
                            <button className='text-base'>Sign up for newsletter</button>
                            <AiOutlineArrowRight className='text-lg'/>
                        </div>
                        <div className='flex gap-1'>
                            <input type="checkbox" />
                            <span className='text-sm'>I accept <span className='text-[#4FD1C5] text-sm'>the personal data management.</span></span>
                        </div>
                    </div>

                    <div className=' flex justify-between h-auto gap-5 xl:gap-10 flex-wrap  '>

                        <div className=' flex flex-col gap-5 h-full '>
                            <span className='font-bold text-xl'>How to buy</span>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm'>Payment methods</li>
                                <li className='text-sm'>Order and pick up</li>
                                <li className='text-sm'>Order with delivery</li>
                                <li className='text-sm'>Shopping over the phone</li>
                                <li className='text-sm'>Returns</li>
                            </ul>
                        </div>

                        <div className=' flex flex-col gap-5 h-full'>
                            <span className='font-bold text-xl'>Help</span>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm'>Contact</li>
                                <li className='text-sm'>Online help</li>
                                <li className='text-sm'>Our commitments</li>
                                <li className='text-sm'>Give feedback</li>
                                {/* <li  className='text-sm'>Returns</li> */}
                            </ul>
                        </div>
                        <div className=' flex flex-col gap-5 h-full '> 
                         <span className='font-bold text-xl'>Services</span>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm'>Transport</li>
                                <li className='text-sm'>Design services</li>
                                <li className='text-sm'>Paint an plaster mixing service</li>
                                <li className='text-sm'>Dimensioning and assemly service </li>
                                <li className='text-sm'>Return of used equipment</li>
                                <li className='text-sm'>Additional services</li>
                            </ul></div>
                        <div className=' flex flex-col gap-5 h-full '> 
                         <span className='font-bold text-xl'>About</span>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm'>About us</li>
                                <li className='text-sm'>Press office</li>
                                <li className='text-sm'>For suppliers</li>
                                <li className='text-sm'>Regulatipons</li>
                                <li className='text-sm'>Privacy policy</li>
                                <li className='text-sm'>Cookies</li>
                                <li className='text-sm'>Personal Data Reguest</li>
                            </ul></div>
                    </div>





               
            </div>

            <div className='w-full bg-[#E2E8F0] '>

                <div className='max-w-screen-2xl flex justify-between items-center h-[94px]  m-auto'>

                    <div>
                        &copy; 2021 Divante S.A.
                    </div>

                    <div className='flex items-center gap-5'>
                        <BsFacebook className='text-lg' />
                        <AiFillInstagram className='text-lg' />
                        <IoLogoYoutube className='text-lg'/>
                        <img src="./assets/images/nav-logo.png" alt="" />
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer
