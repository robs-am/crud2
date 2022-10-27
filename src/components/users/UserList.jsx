import React from 'react'
import "./UserList.css"

const users = [];

const UserList = () => {
  return (
    <div className='grid-container'>
      {users.lenght ? renderCard() : <p>No User</p>}
    
    </div>
  )
}

export default UserList