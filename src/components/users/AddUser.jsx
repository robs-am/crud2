import React, { useState } from 'react'
import TextField from '../textField/textField'
import Button from './../button/Button';
 
const AddUser = () => {
  const [values, setValues] = useState ({
    nome: "",
    email: "",
    tel: "",
  });

  return (
    <div>
      <TextField
        label="Nome"
        value={values.nome}
        inputProps={{type:'text', placeholder: 'Kurt Cobain'}} />
        <br />
         <TextField
        label="Email"
        value={values.email}
        inputProps={{type:'email', placeholder: 'email@email.com' }} required />
        <br />
        <TextField
        label="Telefone"
        value={values.tel}
        inputProps={{type:'tel', placeholder: '(xx) xxxxx - xxxx ' }} required />
        <br />
        <Button>Enviar</Button>
    </div>
  )
}

export default AddUser