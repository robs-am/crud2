import styled from "styled-components";
import { useState } from "react";



const Form = ({data, setData, dataEdit, isOpen, onClose}) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email ||"");

  return (
    <div>
      <FormContainer>
        <InputArea>
            <Label>Nome</Label>
            <Input name="nome" />
        </InputArea>
        <InputArea>
            <Label>Email</Label>
            <Input name="email" type="email" />
        </InputArea>
        <InputArea>
            <Label>Telefone</Label>
            <Input name="fone"  />
        </InputArea>
        <InputArea>
            <Label>Data de Nascimento</Label>
            <Input name="data_nascimento" type="date"  />
        </InputArea>
        <Button type="submit">SALVAR</Button>
      </FormContainer>
    </div>
  );
};

//styled-components//

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;

`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius : 5px;
height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #2c73d2;
color: white;
height: 42px;
`;
export default Form;
