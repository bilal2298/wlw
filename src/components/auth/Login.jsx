import React, { useEffect, useState } from 'react'
import ToggleButton from '../others/ToggleButton'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Input from '../Input/Input'
import Checkbox from '../Input/Checkbox'
import { Link } from 'react-router-dom'

const Login = () => {

    // const [isMobile, setIsMobile] = useState(false) //for hiding div in mobile

    // useEffect(() => {

    //     const checkMobile = () => {
    //         setIsMobile(window.innerWidth <= 770)
    //     }

    //     checkMobile()

    //     window.addEventListener('resize', checkMobile);

    //     return () => {
    //         window.removeEventListener('resize', checkMobile);
    //     };
    // }, [])

    return (
        <>
            <div className='flex  flex-col md:flex-row-reverse  h-screen p-5'>


                <div className=' flex flex-col justify-between  bg-[#4FD1C5] w-full md:w-[40%] h-auto md:h-full sm:rounded-l-3xl'>


                    <div className='flex justify-end m-5'>
                        <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                            <option>ENG lag</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                        {/* <label className=' absolute top-[3rem] right-12'>
                            <MdOutlineKeyboardArrowDown />
                        </label> */}
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <img className='w-3/4' src="./assets/images/logo.png" alt="" />
                        
                    </div>

                    <div className=' invisible '>
                    <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                            <option>ENG lag</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                        {/* <label className=' absolute top-[3rem] right-12'>
                            <MdOutlineKeyboardArrowDown />
                        </label> */}
                    </div>
                </div>

                <div className='flex justify-center items-center w-full lg:w-[60%] h-full'>
                    <div className='w-full md:w-[60%] lg:w-[50%] xl:w-[35%]' >


                        <form
                            // onSubmit={submitHandler}
                            className="bg-white flex flex-col gap-10 rounded-3xl sm:w-100% lg:w-[100%]"
                        >

                            <div required className="flex md:justify-between justify-start gap-5 items-center  ">

                                <div className='flex items-center gap-2'>
                                    {/* <input
                                        className="w-5 h-5 custom-checkbox "
                                        // onChange={changeHandler}
                                        type="radio"
                                        value="buyer"
                                        name="user"
                                        id="buyer"

                                    /> */}
                                    <Checkbox type="radio" value="buyer" name="user" id="buyer" />
                                    <label className=" font-semibold text-base xl:text-lg" htmlFor="buyer">
                                        Buyer
                                    </label>
                                </div>

                                <div className='flex items-center gap-2' >
                                    {/* <input
                                        className=" w-6 h-6 border custom-checkbox rounded-full checked:border-transparent focus:outline-none"
                                        // onChange={changeHandler}
                                        type="radio"
                                        value="supplier"
                                        name="user"
                                        id="supplier"
                                    /> */}

                                    <Checkbox type="radio" value="supplier" name="user" id="supplier" />
                                    <label className=" font-semibold text-base xl:text-lg" htmlFor="supplier">
                                        Supplier
                                    </label>
                                </div>

                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-1 '>
                                    <h2 className='text-[#4FD1C5] font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl'>Welcome Back</h2>
                                    <p className='text-slate-400 text-sm'>Enter your email and password to sign in</p>


                                </div>



                                <div className="flex flex-col gap-4">

                                    <div className="flex rounded-md gap-1 p-1 flex-col">
                                        <label className="text-sm" htmlFor="email">
                                            Email
                                        </label>
                                        {/* <input
                                        // onChange={changeHandler}
                                        name="email"
                                        required
                                        className="max-w-auto p-2 focus:outline-none border"
                                        id="email"
                                        type="email"
                                        placeholder="e.g myname@company.com"
                                    /> */}
                                        <Input placeholder="Enter your e-mail" name="email" id="email" type="email" />
                                    </div>

                                    <div className="g w-full rounded-md flex flex-col p-1  ">
                                        <div className='flex flex-col gap-1'>
                                            <label className="text-sm" htmlFor="password">
                                                Password
                                            </label>
                                            {/* <input
                                        // onChange={changeHandler}
                                        name="password"
                                        required
                                        placeholder="********"
                                        className="max-w-auto focus:outline-none p-2 border"
                                        id="password"
                                        type="password"
                                        minLength={8}
                                        /> */}

                                            <Input placeholder="Enter your password" name="password" id="password" type="password" />
                                        </div>
                                        <span className=" text-[#4FD1C5] text-end text-xs " >
                                            Forgot Password?
                                        </span>
                                    </div>
                                </div>

                                <div className='flex justify-between'>

                                    <div className=''><ToggleButton /></div>

                                </div>
                            </div>

                            <button className="bg-[#4FD1C5] text-white px-1 py-2 w-full  rounded-md" >
                                Sign in
                            </button>

                            <div className='flex justify-center gap-2'>
                                <p className='text-slate-400'>Don't have an account?</p>
                                <Link to='/registration' className='text-[#4FD1C5] font-semibold'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
