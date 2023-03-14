import styled from "styled-components";

interface PokemonCardStyledProps {
  pokemonType: string;
}

const PokemonCardStyled = styled.article<PokemonCardStyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 17rem;
  width: 17rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.border.radius};

  .pokemon-card {
    &__name {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonNameSize};
    }

    &__types {
      font-size: ${(props) => props.theme.fonts.sizes.pokemonDescriptionSize};
    }

    &__buttons {
      width: 15rem;
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
  }

  border: solid
    ${({ pokemonType }) => {
      switch (pokemonType) {
        case "Water":
          return "#299CFF";
        case "Ice":
          return "#45DEFF";
        case "Poison":
          return "#9B5FC5";
        case "Fairy":
          return "#FF22C4";
        case "Grass":
          return "#4FDC4F";
        case "Fire":
          return "#FF3A22";
        case "Ground":
          return "#927966";
        case "Dragon":
          return "#6829FF";
        case "Electric":
          return "#DBDF3A";
        case "Bug":
          return "#52B337";
        case "Dark":
          return "#898989";
        case "Fighting":
          return "#F57F31";
        case "Flying":
          return "#3B45FF";
        case "Ghost":
          return "#A23FCE";
        case "Psychic":
          return "#E12485";
        case "Rock":
          return "#956F4E";
        case "Steel":
          return "#5976AC";
        case "Normal":
          return "#BBAF97";
      }
    }};

  background-color: ${({ pokemonType }) => {
    switch (pokemonType) {
      case "Water":
        return "#82C5FF";
      case "Ice":
        return "#A6EFFF";
      case "Poison":
        return "#C39FDC";
      case "Fairy":
        return "#FF78DB";
      case "Grass":
        return "#9AEB9A";
      case "Fire":
        return "#FF8779";
      case "Ground":
        return "#B29F90";
      case "Dragon":
        return "#A681FF";
      case "Electric":
        return "#E8EB83";
      case "Bug":
        return "#79CF61";
      case "Dark":
        return "#B2B2B2";
      case "Fighting":
        return "#B2B2B2";
      case "Flying":
        return "#999EFF";
      case "Ghost":
        return "#C17FDE";
      case "Psychic":
        return "#EA68AB";
      case "Rock":
        return "#B59171";
      case "Steel":
        return "#8DA1C6";
      case "Normal":
        return "#E3DED4";
    }
  }};
`;

export default PokemonCardStyled;
