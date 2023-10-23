import React from 'react'

const Checkbox = (props) => {
  const { name, id, type ,value, onChange, touched , onBlur ,errors, checked} = props;
  
  return (
    <>
      <input
        name={name}
        className={`custom-checkbox w-5 ${touched && errors ? 'custom-checkbox1' : null} lg:w-6 h-5 lg:h-6`}
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        value={value}
       
    
        // onChange={changeHandler}
      />
    </>
  )
}

export default Checkbox
