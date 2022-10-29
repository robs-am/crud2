import React from 'react'
import TextField from '../textField/textField'
 
const AddUser = () => {
  return (
    <div>
      <TextField
        label="Nome"
        inputProps={{type:'text', placeholder: 'Kurt Cobain'}} />
         <TextField
        label="Email"
        inputProps={{type:'email', placeholder: 'email@email.com' }} required />
        <TextField
        label="Telefone"
        inputProps={{type:'tel', placeholder: '(xx) xxxxx - xxxx ' }} required />
    </div>
  )
}

export default AddUser