import React from 'react'
import TextField from '../textField/textField'
 
const AddUser = () => {
  return (
    <div>
      <TextField
        label="Nome"
        inputProps={{type:'text', placeholder: 'Kurt Cobain'}} />
    </div>
  )
}

export default AddUser