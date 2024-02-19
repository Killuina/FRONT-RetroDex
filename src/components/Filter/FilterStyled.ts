import styled from "styled-components";

const FilterStyled = styled.div`
  select {
    color: #666;
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 150px;
    font-family: inherit;
    color: ${(props) => props.theme.fonts.colors.dark};
    font-weight: ${(props) => props.theme.fonts.weights.semiBold};
    cursor: pointer;
  }

  select:hover {
    background-color: #f5f5f5;
  }
`;

export default FilterStyled;
