import "./App.css";

import { Routes, Route } from "react-router-dom";

import Button from "./components/button/Button";
import UserList from "./components/users/UserList";

import AddUser from "./components/users/AddUser";

console.log(window.location);

function App() {
  return (
    <div className="container">
      <h1 className="title">CRUD React</h1>
      
     
      
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      
      
    </div>
  );
}

export default App;
