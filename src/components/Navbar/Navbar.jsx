import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'


const Navbar = () => {
  return (
    <>
      <div className='flex justify-end h-12 w-full bg-[#ececec]' >
        <div className='flex items-center mr-20'>
          <span className=' border-r-2 px-4 text-[#4FD1C5]'>+32 (0) 15 28 76 67</span>
          <span className=' border-r-2 px-4'>Messages</span>
          <span className='px-4 text-[#4FD1C5] font-semibold '>
            <Link to='/login'>LOGIN</Link> / <Link to='/registration'>REGISTER</Link>
          </span>
        </div>

      </div>

      <div className=' h-16 w-full flex items-center justify-around bg-white' >

        <div>
          <img src="./assets/images/nav-logo.png" alt="logo" />
        </div>

        <div className=' w-1/3'>
          <ul className='flex justify-between items-center'>
            <li>Home</li>
            <li>
            <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
            <option>Categries</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
            </li>
            <li>Import</li>
            <li>Export</li>
            <li>Companies</li>
            <li>Prices</li>
          </ul>
        </div>

        <div className='flex gap-2'>
          <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
            <option>ENG(US)</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <div className='relative'>
            <AiOutlineSearch className='absolute top-2 text-[#4FD1C5] left-3 w-6 h-6'/>
            <input className='h-10 w-[450px] rounded-lg bg-transparent focus:outline-none border pl-10' type="text" placeholder='hint/search by product or SKU' />
          </div>
        </div>

      </div>
  

      

    
    </>
  )
}

export default Navbar
