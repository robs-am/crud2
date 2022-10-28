import React from "react";
import "./UserList.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const UserList = () => {
  const users = [
    {
      id: "1",
      name: "Amanda",
      email: "amanda@email.com",
      fone: "95524332"
    },

    { id: "2", name: "Vitor", email: "vitor@email.com", fone: "95824639" },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div>
        <div className="userCard">
          <h3 className="userName">{user.name}</h3>
          <span className="userEmail">{user.email}</span>
          <span className="userFone">{user.fone}</span>
          <button className="faTrash"><FaTrash /></button>
          <button className="faEdit"><FaEdit /></button>
          
          
          
        </div>
      </div>
    ));

  return (
    <>
      <div className="grid-container">
        {users.length ? renderCard() : <p className="noUser">No User</p>}
      </div>
     
      
    </>
  );
};

export default UserList;
