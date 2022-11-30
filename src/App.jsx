import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";

function App()
{
  return (<MainContainer>
    <LoginText>Register</LoginText>
    <InputContainer>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Passphrase"/>
      </InputContainer>
      <ButtonContainer>
        <Button content="Register" />
      </ButtonContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
  </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  

`;

const LoginText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  margin: 1rem 0 2rem 0;
`;

export default App;
