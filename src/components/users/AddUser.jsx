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
        onChange={(e) => setValues({...values, nome: e.target.value})}
        inputProps={{type:'text', placeholder: 'Kurt Cobain'}} />
        <br />
         <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({...values, email: e.target.value})}
        inputProps={{type:'email', placeholder: 'email@email.com' }} required />
        <br />
        <TextField
        label="Telefone"
        value={values.tel}
        onChange={(e) => setValues({...values, tel: e.target.value})}
        inputProps={{type:'tel', placeholder: '(xx) xxxxx - xxxx ' }} required />
        <br />
        <Button>Enviar</Button>
    </div>
  )
}

export default AddUser