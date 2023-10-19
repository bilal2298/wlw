import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'
const Navbar = () => {
  return (
    <>
      <div className='flex justify-end sticky top-0 z-[1] h-12 w-full bg-[#ececec]' >

        <div className='flex items-center mr-20'>
          <span className=' border-r-2 px-4 text-[#4FD1C5]'>+32 (0) 15 28 76 67</span>
          <span className=' border-r-2 px-4 flex items-center gap-2 text-xl '> <AiOutlineMail/>
          <span className='text-base'>Messages</span>
          </span>
          <span className='px-4 text-[#4FD1C5] font-semibold '>
            <Link to='/login'>LOGIN</Link> / <Link to='/registration'>REGISTER</Link>
          </span>
        </div>

      </div>

    
    </>
  )
}

export default Navbar
