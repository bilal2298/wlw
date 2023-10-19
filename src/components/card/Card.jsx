import React from 'react'

const Card = (props) => {
    const { image, title,description, author, date, category } = props.data
    console.log(props.data)

    return (
        <div>
            <article className='rounded-xl md:w-[376px] w-full h-[500px]  shadow-2xl p-2 '>
                <div className='h-[300px]  rounded-xl  border-amber-900 overflow-hidden border-xl mb-2.5'>
                    <img className='w-[100%] h-[100%]' src={image} alt="logo" />
                </div>

                <div className='flex flex-col justify-between gap-3'>
                    <div className='text-lg'>{category}</div>


                    <h3 className='font-medium text-2xl leading-tight'>{title.slice(0, 15)}</h3>
                    <p className='font-base text-lg leading-tight'>{description.slice(0, 80)}...</p>



                    <div className='flex justify-between'>
                        <span className='text-lg'>{author}</span>
                        <span className='text-lg'>{date}</span>
                    </div>
                </div>

            </article>
        </div>
    )
}

export default Card