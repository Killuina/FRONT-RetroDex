import { pokemonInputTypes } from "../../data/pokemonTypes";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { addFilterActionCreator } from "../../store/features/userPokemon/pokemonSlice";
import { useAppDispatch } from "../../store/hooks";
import { secondaryFont } from "../../styles/fonts";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSelectFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addFilterActionCreator(value));
  };

  return (
    <FilterStyled className={secondaryFont.className}>
      <select
        className="form__field"
        id="type-filter"
        onChange={handleSelectFilter}
      >
        <option value="">View All</option>
        {pokemonInputTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </FilterStyled>
  );
};

export default Filter;
