import styled from "styled-components";

const LoginFormStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
  height: 500px;
  width: 350px;
  gap: 30px;

  .login-form {
    &_field {
      display: block;
    }
  }
`;

export default LoginFormStyled;
