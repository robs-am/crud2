import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Usuarios from "./components/users/Usuarios";
import AddUser from "./components/users/AddUser";



function App() {
  return (
    <div className="container">
      <h1 className="title">CRUD React</h1>

      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios/>} />
        
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
