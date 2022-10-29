import React from 'react'
import "./NavBar.css"

import {AiFillHome} from "react-icons/ai";
import { FaUserFriends } from 'react-icons/fa';



const NavBar = () => {
  return (
    <div>
        <nav className='nav'>
            <ul className='links'>
                <li><AiFillHome />Home</li>
                <li><FaUserFriends />Usuários</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar