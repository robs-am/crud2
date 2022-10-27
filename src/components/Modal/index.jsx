import styled from "styled-components";
import { useState } from "react";



const Modal = ({data, setData, dataEdit, isOpen, onClose}) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setemail] = useState(dataEdit.email || "");


  return (
    <>
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Clientes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
export default Modal;
