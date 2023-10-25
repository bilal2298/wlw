import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import Layout from '../../Layout'

const NavbarDash = () => {
    return (
        <Layout>
        <div className='max-w-screen-2xl h-12 flex justify-between items-center p-2'>
            <div>
                <span>Pages/Profile setting</span>
            </div>

            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <select className="  block py-2 rounded bg-transparent leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                        <option className='text-black' >US</option>
                        <option className='text-black'>Option 2</option>
                        <option className='text-black'>Option 3</option>
                        <option className='text-black'>Option 4</option>
                    </select>
                    
                </div>
                <div className="relative ml-3">

                    <AiOutlineSearch className='absolute top-2 text-black left-3 w-6 h-6' />
                    <input className='h-10  rounded-lg bg-white focus:outline-none border pl-10' type="text" placeholder='Search' />

                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[20px] h-[15px]' src="./assets/images/dash-nav-icons/message.png" alt="" />
                    <img  className='w-[20px] h-[20px]' src="./assets/images/dash-nav-icons/notify.png" alt="" />
                </div>
               <div className='flex items-center gap-2'>
               <div className='bg-orange-300  w-[35px] h-[35px] rounded-full'>
                    <img src="./assets/images/dash-nav-icons/profile.png" alt="" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium'>Andrew</span>
                    <span className='text-sm'>Admin</span>
                </div>
               </div>
            </div>
        </div>
        </Layout>
    )
}

export default NavbarDash
