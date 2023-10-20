import React from 'react'
import Checkbox from '../Input/Checkbox'
import Input from '../Input/Input'

const RegistrationBuyer = () => {
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
               
                 <Checkbox type="radio" value="female" name="gender" id="female" />
                <label className=" text-sm xl:text-lg" htmlFor="female">
                  Mr
                </label>
              </div>
              <div className='flex items-center gap-2' >
              
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
                 
                   <Input placeholder="Enter your first name" name="fname" id="fname" type="text" />
                </div>
                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="mName">
                    Middle Name
                  </label>
                 
                   <Input placeholder="Enter your middle name" name="mName" id="mName" type="text" />
                </div>
              </div>

              <div className="flex justify-between lg:flex-row flex-col gap-5 ">
                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="lname">
                    Last Name
                  </label>
                 
                  
                  <Input placeholder="Enter your last name" name="lname" id="lname" type="text" />
                </div>


                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="email">
                    Email
                  </label>
                
                 <Input placeholder="Confirm your email" name="email" id="email" type="email" />
                </div>




              </div>

           
              <div className="flex justify-between lg:flex-row flex-col gap-5 ">
                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="password">
                    Password
                  </label>
                 
                  
                  <Input placeholder="Enter your password" name="password" id="password" type="password" />
                </div>


                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="confirm_password">
                    Confirm password
                  </label>
                
                 <Input placeholder="Confirm your password" name="confirm_password" id="confirm_password" type="password" />
                </div>




              </div>


              <div className="flex justify-between relative lg:flex-row flex-col gap-5 ">
                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="phone">
                    Phone Number
                  </label>
                 
                  <div className='absolute  top-8 '>
                    <select className='bg-[#ECECEC] h-10 rounded-md' name="" id="">
                        <option value="">US -1</option>
                        <option value="">US -1</option>
                        <option value="">US -1</option>
                    </select>
                  </div>
                  <Input placeholder="Enter your mobile number" name="phone" id="phone" type="number" />
                </div>


                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="dob">
                    Date of Birth
                  </label>
                 
                 <Input name="dob" id="dob" type="date" />
                </div>




              </div>


              <div className="flex lg:flex-row flex-col gap-5 justify-between">
                <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="country">
                    Country
                  </label>
                 
                  <Input placeholder="Enter country name" name="country" id="country" type="text" />
                </div>
                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className=" text-sm" htmlFor="city">
                    City
                  </label>
                
                  <Input placeholder="Enter city name" name="city" id="city" type="text" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-5 justify-between">
                <div className=" lg:w-3/4 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                  <label className="text-sm" htmlFor="province">
                    State/Region/Province
                  </label>
                 
                  <Input placeholder="Enter your province " name="province" id="province" type="text" />
                </div>
                <div className=" lg:w-1/3 w-full gap-2 rounded-md flex flex-col p-1 ">
                  <label className="ml-1 text-sm" htmlFor="code">
                    Zip Code
                  </label>
                 
                  <Input  placeholder="Enter zip code " name="code" id="code" type="number" />
                </div>
              </div>

              <div className="gap-2 flex rounded-md p-1 flex-col">
                <label className="text-sm ml-1" htmlFor="address">
                  Address
                </label>
              
                <Input placeholder="Enter your address " name="address" id="address" type="text" />
              </div>



            </div>

            <div className='flex gap-2 items-center'>

              <div> 
                
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

export default RegistrationBuyer