import React from "react";
import "./UserList.css";

const UserList = () => {
  const users = [
    {
      id: "1",
      name: "Amanda",
      email: "amanda@email.com",
    },

    { id: "2", name: "Vitor", email: "vitor@email.com" },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div>
        <div>
          <h3 className="userName">{user.name}</h3>
          <span className="userEmail">{user.email}</span>
          
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
