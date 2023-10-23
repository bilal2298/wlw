import React from 'react'
import Input from '../Input/Input'
import Checkbox from '../Input/Checkbox'
import { supplierRegisterSchema } from '../../schema';
import { useFormik } from 'formik';

const RegistrationSupplier = () => {

    const initialValues = {
        firstName:'',
        lastName:'',
        email:'',
        organization:'',
        password:'',
        confirm_password:'',
        country:'',
        city:'',
        state:'',
        zipCode:'',
        address: '',
        gender: ''
      };

      const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: supplierRegisterSchema,
        onSubmit: (values) => {
        //   await axios.post(`http://localhost:8080/api/v1/auth/login`, values).then((res) => {
         
        //   });
          console.log(values)
        },
      });
    return (
        <>
             <form onSubmit={handleSubmit} className=' flex flex-col gap-6'>
                        <h3 className="md:text-lg text-base lg:text-xl xl:text-2xl font-medium">
                            Start with a free company profile now!
                        </h3>

                        <div className="flex items-center gap-10">
                            <div className='flex items-center gap-2'>
            
                                <Checkbox checked={values.gender === 'male'} onChange={handleChange} onBlur={handleBlur} errors={errors.gender} touched={touched.gender} type="radio" value="male" name="gender" id="male" />
                                <label className=" text-sm xl:text-lg" htmlFor="male">
                                    Mr
                                </label>
                            </div>
                            <div className='flex items-center gap-2' >
             
                                <Checkbox checked={values.gender === 'female'} onChange={handleChange} onBlur={handleBlur} errors={errors.gender} touched={touched.gender} type="radio" value="female" name="gender" id="female" />
                                <label className="text-sm xl:text-lg" htmlFor="female">
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
                 
                                    <Input onChange={handleChange} values={values.firstName} onBlur={handleBlur} errors={errors.firstName} touched={touched.firstName} placeholder="Enter your first name" name="firstName" id="fname" type="text" />
                                </div>
                                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                                    <label className=" text-sm" htmlFor="lastName">
                                        Last Name
                                    </label>
                
                                    <Input  onChange={handleChange} values={values.lastName} onBlur={handleBlur} errors={errors.lastName} touched={touched.lastName} placeholder="Enter your last name" name="lastName" id="lname" type="text" />
                                </div>
                            </div>

                            <div className="flex rounded-md gap-2 p-1 flex-col">
                                <label className="text-sm" htmlFor="email">
                                    Email
                                </label>
                
                                <Input  onChange={handleChange} values={values.email} onBlur={handleBlur} errors={errors.email} touched={touched.email} placeholder="Enter your email" name="email" id="email" type="email" />
                            </div>
                            <div className="flex justify-between lg:flex-row flex-col gap-5 ">
                                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                                    <label className="text-sm" htmlFor="password">
                                        Password
                                    </label>
                

                                    <Input  onChange={handleChange} values={values.password} onBlur={handleBlur} errors={errors.password} touched={touched.password} placeholder="Enter your password" name="password" id="password" type="password" />
                                </div>


                                <div className="gap-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                                    <label className=" text-sm" htmlFor="confirm_password">
                                        Confirm password
                                    </label>
                    
                                    <Input  onChange={handleChange} values={values.confirm_password} onBlur={handleBlur} errors={errors.confirm_password} touched={touched.confirm_password} placeholder="Confirm your password" name="confirm_password" id="confirm_password" type="password" />
                                </div>




                            </div>


                            <div className="gap-2 flex rounded-md p-1 flex-col">
                                <label className="text-sm" htmlFor="company">
                                    Organization Name
                                </label>
                
                                <Input  onChange={handleChange} values={values.organization} onBlur={handleBlur} errors={errors.organization} touched={touched.organization} placeholder="Enter Organization name" name="organization" id="company" type="text" />
                            </div>

                            <div className="flex lg:flex-row flex-col gap-5 justify-between">
                                <div className=" lg:w-1/2 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                                    <label className="text-sm" htmlFor="country">
                                        Country
                                    </label>
                
                                    <Input  onChange={handleChange} values={values.country} onBlur={handleBlur} errors={errors.country} touched={touched.country} placeholder="Enter country name" name="country" id="country" type="text" />
                                </div>
                                <div className=" lg:w-1/2 w-full gap-2 rounded-md flex flex-col p-1 ">
                                    <label className=" text-sm" htmlFor="city">
                                        City
                                    </label>
                
                                    <Input  onChange={handleChange} values={values.city} onBlur={handleBlur} errors={errors.city} touched={touched.city} placeholder="Enter city name" name="city" id="city" type="text" />
                                </div>
                            </div>

                            <div className="flex lg:flex-row flex-col gap-5 justify-between">
                                <div className=" lg:w-3/4 w-full gap-2 h-auto rounded-md flex flex-col p-1 ">
                                    <label className="text-sm" htmlFor="province">
                                        State/Region/Province
                                    </label>
                  
                                    <Input  onChange={handleChange} values={values.state} onBlur={handleBlur} errors={errors.state} touched={touched.state} placeholder="Enter your province " name="state" id="province" type="text" />
                                </div>
                                <div className=" lg:w-1/3 w-full gap-2 rounded-md flex flex-col p-1 ">
                                    <label className="ml-1 text-sm" htmlFor="code">
                                        Zip Code
                                    </label>
                 
                                    <Input  onChange={handleChange} values={values.zipCode} onBlur={handleBlur} errors={errors.zipCode} touched={touched.zipCode} placeholder="Enter zip code " name="zipCode" id="code" type="number" />
                                </div>
                            </div>

                            <div className="gap-2 flex rounded-md p-1 flex-col">
                                <label className="text-sm ml-1" htmlFor="address">
                                    Address
                                </label>
                
                                <Input  onChange={handleChange} values={values.address} onBlur={handleBlur} errors={errors.address} touched={touched.address} placeholder="Enter your address " name="address" id="address" type="text" />
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

                        <button type="submit" className="bg-[#4FD1C5] text-white h-11 py-2 w-full text-base font-semibold rounded-md" >
                            Start Registration
                        </button>
                        </form>
        </>
    )
}

export default RegistrationSupplier
