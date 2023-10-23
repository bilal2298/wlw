import React from 'react'

const Input = (props) => {
    const { placeholder, name, id, type, pl, values, onChange, touched , onBlur ,errors } = props;
    return (
        <>
            <input
                name={name}
                className={`focus:outline-none p-2 ${pl} ${touched && errors && 'border-red-600' } border rounded-lg w-full`}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={values}
                onBlur={onBlur}
            />

            {/* { (<p className=''>{errors}</p>)} */}
        </>
    )
}

export default Input
