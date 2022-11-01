import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import TextField from "../textField/textField";
import Button from "./../button/Button";

import { Context } from "../../contexts/Contexts";

const AddUser = () => {
  const { context, dispatch } = useContext(Context);
  const [ values, setValues ] = useState({ name: "", email: "", fone: "" });
  const navigate = useNavigate();

  function handleAddUser(e) {
    e.preventDefault();
    const users = context.users.status;

    dispatch({
      type: "CHANGE_USERS",
      payload: {
        status: [...users, values]
      },
    });

    navigate("/usuarios");
  }

  return (
    <form onSubmit={handleAddUser}>
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
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default AddUser;
