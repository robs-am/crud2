import React, { useState } from "react";
import { useNavigate } from "react-router";
import TextField from "../textField/textField";
import Button from "./../button/Button";

const AddUser = () => {
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    fone: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "", fone: "" }); //limpa o formulario apos envio

    console.log(values);

    navigate("/usuarios");
  };

  return (
    <div>
      <TextField
        label="Nome"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Kurt Cobain" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "email@email.com" }}
      />
      <br />
      <TextField
        label="Telefone"
        value={values.fone}
        onChange={(e) => setValues({ ...values, fone: e.target.value })}
        inputProps={{ type: "tel", placeholder: "(xx) xxxxx - xxxx " }}
      />
      <br />
      <Button onClick={handleAddUser}>Cadastrar</Button>
    </div>
  );
};

export default AddUser;
