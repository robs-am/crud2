import React, { useState } from "react";
import { useNavigate } from "react-router";
import TextField from "../textField/textField";
import Button from "./../button/Button";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    fone: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setfone] = useState("");

  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(values);

    navigate("/usuarios/");
  };

  return (
    <div>
      <TextField
        required={true}
        label="Nome"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Kurt Cobain" }}
      />
      <br />
      <TextField
        required={true}
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "email@email.com" }}
      />
      <br />
      <TextField
        required={true}
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
