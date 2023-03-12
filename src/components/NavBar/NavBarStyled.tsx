import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  height: 80px;
  bottom: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.mainColor};

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem;
  }
`;

export default NavBarStyled;
