import React from 'react'
import "./Button.css"

const Button = ({onClick, children, name}) => {
  return (
    <>
    <button className='btn-addUser' onClick={onClick}>{children} {name}</button>
    </>
  )
}

export default Button;