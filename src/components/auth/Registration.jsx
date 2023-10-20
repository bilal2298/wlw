import React, { useState } from 'react'
import RegistrationSupplier from './RegistrationSupplier'
// import Input from '../Input/Input'
// import Checkbox from '../Input/Checkbox'
import RegistrationBuyer from './RegistrationBuyer'


const Registration = () => {
    const [registration, setRegistration] = useState(true)
    return (
        <>



            <div className='lg:h-[1200px]  h-[900px] relative m-6 justify-center'>


                <div className='bg-[#4FD1C5] rounded-xl w-full h-1/2'>
                    <div className='  flex absolute flex-col w-full top-16 items-center'>
                        <h1 className='text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl '>Welcome!</h1>
                        <p className='text-white text-center p-1 text-sm'>Use these awesome forms to login or create new account in your project for free.</p>
                    </div>
                </div>

                <div className=' absolute top-40 flex w-full h-4/5 lg:h-auto  pb-6 justify-center'>
                    <form 

                        className="bg-white p-10 flex flex-col overflow-auto  shadow-md gap-6 rounded-3xl border-2 w-full md:w-[50%] lg:w-[50%] xl:w-[35%]"
                      >
                        <div required className="flex items-center gap-10">
                            <div className='flex items-center gap-2'>

                                <button className='custom-checkbox h-6 w-6' onClick={()=>setRegistration(true)}>if you want to login as supplier</button> 
                               
                            </div>
                           
                        </div>

                        {registration ? <RegistrationSupplier /> : <RegistrationBuyer />}




                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration
