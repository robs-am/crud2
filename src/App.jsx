import styled from "styled-components";
import Modal from "./components/Modal"
import Global from "./styles/global"


function App() {
  
  return (
    <div className="App">
      <Container>
      <Title>Cadastro de Usuários</Title>
      <Global />
      <Modal/>
      </Container>
    </div>
  )
}

//STYLED COMPONENTS//

const Container = styled.div`
width: 100%;
max-width: 800px;
margin-top: 20px;
display: flex;
flex-direction : column;
align-items: center;
gap: 20px;
`;

const Title = styled.h2 ``;

export default App
