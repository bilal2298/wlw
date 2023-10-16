import React from 'react'

const Registration = () => {
  return (
    <div className=' h-screen relative justify-center'>


      <div className='bg-[#4FD1C5] w-full h-1/2'>
        <div className='  flex absolute flex-col w-full top-16 items-center'>
          <h1 className='text-white font-bold text-2xl '>Welcome!</h1>
          <p className='text-white text-xs'>Use these awesome forms to login or create new account in your project for free.</p>
        </div>
      </div>

      <div className=' absolute top-40 flex w-full justify-center'>
        <form
          // onSubmit={submitHandler}
          className="bg-white p-10 flex flex-col  shadow-md gap-6 rounded-3xl border-2 md:w-100% lg:w-[35%]"
        >
          <h3 className="text-lg font-medium">
            Start with a free company profile now!
          </h3>

          <div required className="flex gap-10">
            <div className='flex gap-2'>
              <input
                className="w-4"
                // onChange={changeHandler}
                type="radio"
                value="female"
                name="gender"
                id="female"
                // height='50px'
              />
              <label className="text-sm" htmlFor="female">
                Mr
              </label>
            </div>
            <div className='flex gap-2' >
              <input 
                className="w-4 text-red-500"
                // onChange={changeHandler}
                type="radio"
                value="male"
                name="gender"
                id="male"
              />
              <label className="text-sm checked:text-red-500" htmlFor="male">
                Mrs/Miss
              </label>
            </div>
          </div>



          <div className="flex flex-col gap-4">

            <div className="flex lg:flex-row flex-col gap-5 justify-between">
              <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                <label className="text-xs " htmlFor="fname">
                  First Name
                </label>
                <input
                  // onChange={changeHandler}
                  name="firstName"
                  required
                  className="focus:outline-none p-2 border"
                  id="fname"
                  type="text"
                />
              </div>
              <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                <label className=" text-xs" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  // onChange={changeHandler}
                  name="lastName"
                  required
                  className="focus:outline-none p-2 border"
                  id="lastName"
                  type="text"
                />
              </div>
            </div>

            <div className="flex rounded-md gap-2 p-1 flex-col">
              <label className="text-xs" htmlFor="email">
                Email
              </label>
              <input
                // onChange={changeHandler}
                name="email"
                required
                className="max-w-auto p-2 focus:outline-none border"
                id="email"
                type="email"
                placeholder="e.g myname@company.com"

              />
            </div>
            <div className="flex justify-between lg:flex-row flex-col gap-5 ">
              <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                <label className="text-xs" htmlFor="password">
                  Password
                </label>
                <input
                  // onChange={changeHandler}
                  name="password"
                  required
                  className="focus:outline-none p-2 border"
                  id="password"
                  type="password"
                  minLength={8}
                />

              </div>


              <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                <label className=" text-xs" htmlFor="confirm_password">
                  Confirm password
                </label>
                <input
                  // onChange={changeHandler}
                  name="confirm_password"
                  required
                  className="focus:outline-none p-2 border"
                  id="confirm_password"
                  type="password"
                  minLength={8}
                />
                {/* {!validateForm() && <p className="text-xs text-red-700" >Passwords do not match</p>} */}
              </div>




            </div>


            <div className="gap-2 flex rounded-md p-1 flex-col">
              <label className="text-xs" htmlFor="company">
                Organization Name
              </label>
              <input
                // onChange={changeHandler}
                name="company"
                required
                className=" focus:outline-none p-2 border"
                id="company"
                type="text"
              />
            </div>

            <div className="flex lg:flex-row flex-col gap-5 justify-between">
              <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                <label className="text-xs" htmlFor="country">
                  Country
                </label>
                <input
                  // onChange={changeHandler}
                  name="country"
                  required
                  className="focus:outline-none p-2 border"
                  id="country"
                  type="text"
                />
              </div>
              <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                <label className=" text-xs" htmlFor="city">
                  City
                </label>
                <input
                  // onChange={changeHandler}
                  name="city"
                  required
                  className="focus:outline-none p-2 border"
                  id="city"
                  type="text"
                />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 justify-between">
              <div className=" lg:w-3/4 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                <label className="text-xs" htmlFor="province">
                  State/Region/Province
                </label>
                <input
                  // onChange={changeHandler}
                  name="province"
                  required
                  className="focus:outline-none p-2 border"
                  id="province"
                  type="text"
                />
              </div>
              <div className=" lg:w-1/3 w-full gap-2 rounded-md flex flex-col p-1 ">
                <label className="ml-1 text-xs" htmlFor="code">
                  Zip Code
                </label>
                <input
                  // onChange={changeHandler}
                  name="code"
                  required
                  className="focus:outline-none p-2 border"
                  id="code"
                  type="number"
                />
              </div>
            </div>

            <div className="gap-2 flex rounded-md p-1 flex-col">
              <label className="text-xs ml-1" htmlFor="address">
                Address
              </label>
              <input
                // onChange={changeHandler}
                name="address"
                required
                className=" focus:outline-none p-2 border"
                id="address"
                type="text"
              />
            </div>



          </div>

          <div className='flex gap-1 items-start'>

           <div> <input id='terms' type="checkbox" /></div>
            <label className="text-md " >
             <label htmlFor="terms">
               By submitting the form, I accept the Terms of Use and the
              General Terms and Conditions. I have acknowledged the Data
              Privacy.</label>
            </label>
          </div>

          <button className="bg-[#4FD1C5] text-white px-1 py-2 w-full  rounded-md" >
            Start registration
          </button>
        </form>
      </div>
    </div>
  )
}

export default Registration
