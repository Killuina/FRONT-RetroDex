import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  height: 60px;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 1.2rem 1.5rem;
  }
`;

export default NavBarStyled;
