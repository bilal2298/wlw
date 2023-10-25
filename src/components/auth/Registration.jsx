import React, { useState } from 'react';
import RegistrationSupplier from './RegistrationSupplier';
import RegistrationBuyer from './RegistrationBuyer';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [registration, setRegistration] = useState(true);

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert('hello')
    // }



    const handleRegistrationType = (isSupplier) => {
        setRegistration(isSupplier);
    };

    return (
        <div className="lg:h-[1200px] h-[900px] relative mx-6 justify-center">
            <div className="bg-[#4FD1C5] rounded-xl w-full h-1/2">
                <div className="flex absolute flex-col w-full top-16 items-center">
                    <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">Welcome!</h1>
                    <p className="text-white text-center p-1 text-sm">
                        Use these awesome forms to log in or create a new account in your project for free.
                    </p>
                </div>
            </div>
            <div className="absolute top-40 flex w-full h-4/5 lg:h-auto pb-6 justify-center">

                <div className="bg-white p-10 overflow-auto shadow-md rounded-3xl border-2 w-full md:w-[50%] lg:w-[50%] xl:w-[35%]">

                    <div className="flex items-center w-full justify-end gap-10">
                        <p>Sign up as a:</p>
                        <div className="flex items-center justify-end gap-2">
                         {registration ?   <Link className='flex items-center '
                               
                                onClick={() => handleRegistrationType(false)}
                            >
                              <span  className={`border-2 ${registration ? 'bg-[#4FD1C5]' : 'bg-white text-black'} text-white h-auto p-1 w-full text-base font-semibold rounded-md`}> Buyer</span>
                            </Link> :
                            <Link className='flex items-center'
                               
                                onClick={() => handleRegistrationType(true)}
                            >
                               <span  className={`border-2 ${registration ? 'bg-white text-black' : 'bg-[#4FD1C5]'} text-white h-auto p-1 w-full text-base font-semibold rounded-md`}> Supplier</span>
                            </Link>}
                        </div>
                    </div>
                    {registration ? <RegistrationSupplier /> : <RegistrationBuyer />}
                </div>

            </div>
        </div>
    );
};

export default Registration;



