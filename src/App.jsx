import UserList from "./components/users/userList";

import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="container">
      <h1 className="title">CRUD React</h1>
      <Button name={"Add User"} />
      <UserList />
    </div>
  );
}

export default App;
