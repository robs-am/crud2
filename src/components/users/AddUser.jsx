import React, { useState } from 'react'
import TextField from '../textField/textField'
import Button from './../button/Button';
 
const AddUser = () => {
  const [values, setValues] = useState ({
    name: "",
    email: "",
    tel: "",
  });

  return (
    <div>
      <TextField
        label="Nome"
        inputProps={{type:'text', placeholder: 'Kurt Cobain'}} />
        <br />
         <TextField
        label="Email"
        inputProps={{type:'email', placeholder: 'email@email.com' }} required />
        <br />
        <TextField
        label="Telefone"
        inputProps={{type:'tel', placeholder: '(xx) xxxxx - xxxx ' }} required />
        <br />
        <Button>Enviar</Button>
    </div>
  )
}

export default AddUser