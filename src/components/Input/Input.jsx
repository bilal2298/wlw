import React from 'react'

const Input = (props) => {
  const  {placeholder, name, id, type, pl} = props;
    return (
        <>
            <input
                name={name}
                className={`focus:outline-none p-2 ${pl} border rounded-lg w-full`}
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input
