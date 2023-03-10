import styled from "styled-components";

const LoginFormStyled = styled.form`
  .login-form {
    display: flex;
    flex-direction: column;
    padding: 1.875rem;
    height: 500px;
    width: 350px;

    &__field {
      margin-bottom: 2rem;
    }
  }
`;

export default LoginFormStyled;
