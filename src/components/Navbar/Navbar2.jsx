import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className="bg-white h-16">
                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            {/* <!-- Mobile menu button--> */}
                            <button onClick={() => setIsOpen(!isOpen)}  type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#4FD1C5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        {/* for desktop */}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-start">
                            <div className="flex md:flex-grow flex-shrink-0 items-center">
                                <img className=" w-auto" src="./assets/images/nav-logo.png" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <Link to='/' className=" rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                    <Link to='' className=" rounded-md px-3 py-2 text-sm font-medium">
                                        <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                                            <option>Categories</option>
                                            <option>Import</option>
                                            <option>Export</option>
                                            <option>Companies</option>
                                        </select>
                                    </Link>
                                    <Link to='' className=" rounded-md px-3 py-2 text-sm font-medium">Import</Link>
                                    <Link to='' className=" rounded-md px-3 py-2 text-sm font-medium">Export</Link>
                                    <Link to='' className=" rounded-md px-3 py-2 text-sm font-medium">Companies</Link>
                                    <Link to='' className=" rounded-md px-3 py-2 text-sm font-medium">Prices</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" md:flex hidden items-center pr-2 sm:inset-auto  sm:pr-0">
                            <button type="button" className="relative rounded-full  p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">


                                <select className=" relative block appearance-none bg-transparent px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                                    <option>ENG(US)</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </select>
                            </button>


                            <div className="relative ml-3">

                                <AiOutlineSearch className='absolute top-2 text-[#4FD1C5] left-3 w-6 h-6' />
                                <input className='h-10 w-auto rounded-lg bg-transparent focus:outline-none border pl-10' type="text" placeholder='hint/search by product or SKU' />

                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            { isOpen && <div className="sm:hidden w-full h-full fixed bg-[#4FD1C5]" id="mobile-menu">
                    <div className="space-y-1 px-2 text-center pt-16">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <Link to='' className=" block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                        <Link to='' className=" block rounded-md px-3 py-2 text-base font-medium">Import</Link>
                        <Link to='' className=" block rounded-md px-3 py-2 text-base font-medium">Export</Link>
                        <Link to='' className=" block rounded-md px-3 py-2 text-base font-medium">Companies</Link>
                        <Link to='' className=" block rounded-md px-3 py-2 text-base font-medium">Prices</Link>
                    </div>
                    </div>}
            </nav>
        </div>
    )
}

export default Navbar2
