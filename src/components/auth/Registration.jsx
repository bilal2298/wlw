import React from 'react'
import Input from '../Input/Input'
import Checkbox from '../Input/Checkbox'

const Registration = () => {
  
  return (
    <>
      <div className='h-[1200px] relative m-6 justify-center'>


        <div className='bg-[#4FD1C5] rounded-xl w-full h-1/2'>
          <div className='  flex absolute flex-col w-full top-16 items-center'>
            <h1 className='text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl '>Welcome!</h1>
            <p className='text-white text-center p-1 text-sm'>Use these awesome forms to login or create new account in your project for free.</p>
          </div>
        </div>

        <div className=' absolute top-40 flex w-full pb-6 justify-center'>
          <form
            // onSubmit={submitHandler}
            className="bg-white p-10 flex flex-col  shadow-md gap-6 rounded-3xl border-2 w-full md:w-[50%] lg:w-[50%] xl:w-[35%]"
          >
            <h3 className="md:text-lg text-base lg:text-xl xl:text-2xl font-medium">
              Start with a free company profile now!
            </h3>

            <div required className="flex items-center gap-10">
              <div className='flex items-center gap-2'>
                {/* <input
                  className=" h-6 custom-checkbox w-6"
                  // onChange={changeHandler}
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                // height='50px'
                /> */}
                 <Checkbox type="radio" value="female" name="gender" id="female" />
                <label className=" text-sm xl:text-lg" htmlFor="female">
                  Mr
                </label>
              </div>
              <div className='flex items-center gap-2' >
                {/* <input
                  className=" custom-checkbox w-6 h-6 "
                  // onChange={changeHandler}
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                /> */}
                <Checkbox type="radio" value="male" name="gender" id="male" />
                <label className="text-sm xl:text-lg" htmlFor="male">
                  Mrs/Miss
                </label>
              </div>
            </div>



            <div className="flex flex-col gap-4">

              <div className="flex lg:flex-row flex-col gap-5 justify-between">
                <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                  <label className="text-sm " htmlFor="fname">
                    First Name
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="firstName"
                    required
                    className="focus:outline-none p-2 border"
                    id="fname"
                    type="text"
                  /> */}
                   <Input placeholder="Enter your first name" name="fname" id="fname" type="text" />
                </div>
                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="lastName">
                    Last Name
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="lastName"
                    required
                    className="focus:outline-none p-2 border"
                    id="lastName"
                    type="text"
                  /> */}
                   <Input placeholder="Enter your last name" name="lname" id="lname" type="text" />
                </div>
              </div>

              <div className="flex rounded-md gap-2 p-1 flex-col">
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
                 <Input placeholder="Enter your email" name="email" id="email" type="email" />
              </div>
              <div className="flex justify-between lg:flex-row flex-col gap-5 ">
                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="password">
                    Password
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="password"
                    required
                    className="focus:outline-none p-2 border"
                    id="password"
                    type="password"
                    minLength={8}
                  /> */}
                  
                  <Input placeholder="Enter your password" name="password" id="password" type="password" />
                </div>


                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="confirm_password">
                    Confirm password
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="confirm_password"
                    required
                    className="focus:outline-none p-2 border"
                    id="confirm_password"
                    type="password"
                    minLength={8}
                  /> */}
                 <Input placeholder="Confirm your password" name="confirm_password" id="confirm_password" type="password" />
                </div>




              </div>


              <div className="gap-2 flex rounded-md p-1 flex-col">
                <label className="text-sm" htmlFor="company">
                  Organization Name
                </label>
                {/* <input
                  // onChange={changeHandler}
                  name="company"
                  required
                  className=" focus:outline-none p-2 border"
                  id="company"
                  type="text"
                /> */}
                 <Input placeholder="Enter Organization name" name="company" id="company" type="text" />
              </div>

              <div className="flex lg:flex-row flex-col gap-5 justify-between">
                <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="country">
                    Country
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="country"
                    required
                    className="focus:outline-none p-2 border"
                    id="country"
                    type="text"
                  /> */}
                  <Input placeholder="Enter country name" name="country" id="country" type="text" />
                </div>
                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="city">
                    City
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="city"
                    required
                    className="focus:outline-none p-2 border"
                    id="city"
                    type="text"
                  /> */}
                  <Input placeholder="Enter city name" name="city" id="city" type="text" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-5 justify-between">
                <div className=" lg:w-3/4 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="province">
                    State/Region/Province
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="province"
                    required
                    className="focus:outline-none p-2 border"
                    id="province"
                    type="text"
                  /> */}
                  <Input placeholder="Enter your province " name="province" id="province" type="text" />
                </div>
                <div className=" lg:w-1/3 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className="ml-1 text-sm" htmlFor="code">
                    Zip Code
                  </label>
                  {/* <input
                    // onChange={changeHandler}
                    name="code"
                    required
                    className="focus:outline-none p-2 border"
                    id="code"
                    type="number"
                  /> */}
                  <Input  placeholder="Enter zip code " name="code" id="code" type="number" />
                </div>
              </div>

              <div className="gap-2 flex rounded-md p-1 flex-col">
                <label className="text-sm ml-1" htmlFor="address">
                  Address
                </label>
                {/* <input
                  // onChange={changeHandler}
                  name="address"
                  required
                  className=" focus:outline-none p-2 border"
                  id="address"
                  type="text"
                /> */}
                <Input placeholder="Enter your address " name="address" id="address" type="text" />
              </div>



            </div>

            <div className='flex gap-2 items-center'>

              <div> 
                {/* <input className='w-6 h-6 custom-checkbox' id='terms' type="checkbox" /> */}
                <Checkbox type="checkbox" value="terms" name="terms" id="terms" />
              </div>
              
                <label htmlFor="terms" className='md:text-base text-sm lg:text-lg  '>
                  I accept the Terms of Use and the
                  General Terms and Conditions. I have acknowledged the Data
                  Privacy.</label>
              
            </div>

            <button className="bg-[#4FD1C5] text-white h-11 py-2 w-full text-base font-semibold rounded-md" >
              Start Registration
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration
