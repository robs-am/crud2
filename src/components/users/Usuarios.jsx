import React from "react";

import "./UserList.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../button/Button";
import { Link } from "react-router-dom";


const Usuarios = () => {
  const users = [
      {id: '1', name: "Kurt Cobain", email:"email@email.com", fone:"2199844557"},
      {id: '2', name: "Jim Morrison", email:"email@email.com", fone:"2199844557"}
    ];
    

  const renderCard = () =>
    users.map((user) => (
      
      <div key={user.id}>
        
        <div id="userCard" > 
          <h3 id="userName">{user.name}</h3>
          <span id="userEmail">{user.email}</span>
          <span id="userFone">{user.fone}</span>
          <button className="faTrash">
            <FaTrash size={20} />
          </button>
          <button className="faEdit">
            <FaEdit size={20} />
          </button>
          
        </div>
      </div>
    ));

  return (
    <div className="addUserContainer">
      <Button><Link to="/add-user">Adicionar Usuário</Link></Button>
      <div className="grid-container">
        {users.length ? renderCard() : <p className="noUser">No User</p>}
      </div>
    </div>
  );
};

export default Usuarios;
