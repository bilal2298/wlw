import React from 'react'

const Checkbox = (props) => {
  const { value, name, id, type } = props;
  
  return (
    <>
      <input
        name={name}
        className="custom-checkbox w-5 lg:w-6 h-5 lg:h-6"
        id={id}
        type={type}
        value={value}
        // onChange={changeHandler}
      />
    </>
  )
}

export default Checkbox
