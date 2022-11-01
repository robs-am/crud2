import React, { useState, useContext } from "react";

import "./Usuarios.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../button/Button";
import { Link } from "react-router-dom";

import { Context } from "../../contexts/Contexts";

const Usuarios = () => {
  const { context, dispatch } = useContext(Context);
  const [ users ] = useState(context.users.status);

  function deleteUser(index) {
    dispatch({
      type: "CHANGE_USERS",
      payload: {
        status: users.splice(index, 1)
      }
    });
  }

  return (
    <div className="addUserContainer">
      <Button><Link to="/add-user">Adicionar Usuário</Link></Button>
      <div className="grid-container">
        {users.length > 0 ? (
          users.map((user, index) => (
      
            <div key={index}>
              
              <div id="userCard" > 
                <h3 id="userName">{user.name}</h3>
                <span id="userEmail">{user.email}</span>
                <span id="userFone">{user.fone}</span>
                <button
                  onClick={() => deleteUser(index)}
                  className="faTrash"
                >
                  <FaTrash size={20} />
                </button>
                <button className="faEdit">
                  <FaEdit size={20} />
                </button>
                
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum usuário cadastrado.</p>
        )}
      </div>
    </div>
  );
};

export default Usuarios;
