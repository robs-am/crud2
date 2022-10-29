import React from 'react'
import "./textField.css"

const TextField = ({label, inputProps, onChange}) => {
  return (
    <>
    <div>{label}</div>
    <input {...inputProps}
    onChange={onChange}
    />
    </>
  )
}

export default textField