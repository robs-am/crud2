import React from 'react'
import "./textField.css"

const TextField = ({label, inputProps, onChange, value}) => {
  return (
    <div className='textField-container'>
    <label className='textFieldLabel'>{label}</label>
    <input className='textFieldInput'
    {...inputProps}
    onChange={onChange}
    value={value}
    />
    </div>
  )
}

export default TextField