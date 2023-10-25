import React from 'react'
import Input from '../Input/Input'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { forgetSchema } from '../../schema'
import { useFormik } from 'formik'

const Forget = () => {
    const initialValues = {
        email: '',
    };

    const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: forgetSchema,
        onSubmit: async (values) => {
            //   await axios.post(`http://localhost:8080/api/v1/auth/login`, values).then((res) => {

            //   });
            console.log(values)
        },
    });


    return (
        <>
            <div className='flex flex-col md:flex-row-reverse h-screen px-5'>


                <div className=' flex flex-col justify-between bg-[#4FD1C5] w-full md:w-[40%] h-auto md:h-full sm:rounded-l-3xl'>


                    <div className='flex relative justify-end gap-3 m-5'>
                        <div className='flex gap-7'>
                            <select className=" relative block appearance-none bg-transparent text-white px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline-blue focus:border-black-300">
                                <option className='text-black'>ENG Language</option>
                                <option className='text-black'>Option 2</option>
                                <option className='text-black'>Option 3</option>
                                <option className='text-black'>Option 4</option>
                            </select>
                            <span className=' absolute text-white top-3 right-4'>
                                <MdOutlineKeyboardArrowDown />
                            </span>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <img className='w-3/4' src="./assets/images/logo.png" alt="" />

                    </div>

                    <div className=' invisible '>
                        <select className=" relative block bg-black px-4 py-2 pr-8 rounded-xl shadow leading-tight ">
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
                            onSubmit={handleSubmit}
                            className="bg-white flex flex-col gap-10 rounded-3xl sm:w-100% lg:w-[100%]"
                        >



                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-3 '>
                                    <h2 className='text-[#4FD1C5] font-bold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl'>Forgot password?</h2>
                                    <p className='text-slate-400 text-center text-base'>Enter the E-mail address you have alreadt confirmed. We will send you an E-mail to change your password.</p>


                                </div>



                                <div className="flex flex-col gap-4">

                                    <div className="flex rounded-md gap-1 p-1 flex-col">
                                        <label className="text-sm" htmlFor="email">
                                            Email
                                        </label>

                                        <Input onChange={handleChange} values={values.email} onBlur={handleBlur} errors={errors.email} touched={touched} placeholder="Enter your e-mail" name="email" id="email" type="email" />


                                    </div>


                                </div>


                            </div>

                            <button className="bg-[#4FD1C5] text-white px-1 py-2 w-full  rounded-md" >
                                Submit
                            </button>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget
