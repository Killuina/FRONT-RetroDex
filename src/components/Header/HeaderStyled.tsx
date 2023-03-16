import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding-left: ${(props) => props.theme.paddings.standard};
  background-color: ${(props) => props.theme.colors.headerColor};
  box-shadow: rgba(67, 67, 67, 0.19) 0px 10px 20px,
    rgba(60, 60, 60, 0.23) 0px 6px 6px;
`;

export default HeaderStyled;
