import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from "./components/button/Button";
import UserList from "./components/users/UserList";
import Home from "./components/Home/Home";

console.log(window.location);

function App() {
  return (
    <div className="container">
      <h1 className="title">CRUD React</h1>
      <Button name={"Add User"} />
     <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
