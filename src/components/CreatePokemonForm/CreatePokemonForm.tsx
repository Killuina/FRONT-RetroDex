import { useState } from "react";
import { pokemonInputTypes } from "../../data/pokemonTypes";
import { user } from "../../mocks/userMocks/userMocks";
import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../LoginForm/FormStyled";
import { UserPokemonFormData, UserPokemonSelectData } from "./types";

const CreatePokemonForm = (): JSX.Element => {
  let userPokemonFormData = new FormData();

  const initiaUserPokemonFormData: UserPokemonFormData = {
    name: "",
    ability: "",
    height: "",
    weight: "",
    baseExp: "",
    image: "",
  };

  const initialUserPokemonSelectData: UserPokemonSelectData = {
    firstType: "",
    secondType: "",
  };

  const [userPokemonData, setUserPokemonData] = useState(
    initiaUserPokemonFormData
  );
  const [userPokemonSelectData, setUserPokemonSelectData] = useState(
    initialUserPokemonSelectData
  );

  const areAreaFieldsEmpty =
    userPokemonData.name === "" ||
    userPokemonSelectData.firstType === "" ||
    userPokemonData.ability === "" ||
    userPokemonData.height === "" ||
    userPokemonData.weight === "" ||
    userPokemonData.baseExp === "";

  const handleUserPokemonFormData = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPokemonData({
      ...userPokemonData,
      [id]: value,
    });
  };

  const handleUserPokemonSelectData = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setUserPokemonSelectData({
      ...userPokemonSelectData,
      [id]: value,
    });
  };

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    userPokemonFormData.append("image", files![0]);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormStyled
      onSubmit={onSubmitHandler}
      className={`${secondaryFont.className} form`}
    >
      <label htmlFor="name">Name</label>
      <input
        value={userPokemonData.name}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="name"
      ></input>
      <label htmlFor="first-type">First type</label>
      <select
        className="form__field"
        id="firstType"
        value={userPokemonSelectData.firstType}
        onChange={handleUserPokemonSelectData}
      >
        {pokemonInputTypes.map((type) => (
          <option key={type} value={type === "None" ? "" : type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="secondType">Second type</label>
      <select
        className="form__field"
        id="secondType"
        value={userPokemonSelectData.secondType}
        onChange={handleUserPokemonSelectData}
      >
        {pokemonInputTypes.map((type) => (
          <option key={type} value={type === "None" ? "" : type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="ability">Ability</label>
      <input
        value={userPokemonData.ability}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="ability"
      ></input>
      <label htmlFor="height">Height</label>
      <input
        value={userPokemonData.height}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="height"
      ></input>
      <label htmlFor="weight">Weight</label>
      <input
        value={userPokemonData.weight}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="weight"
      ></input>
      <label htmlFor="baseExp">Base exp</label>
      <input
        value={userPokemonData.baseExp}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="baseExp"
      ></input>
      <span id="image-label">Image</span>
      <label
        aria-labelledby="image-label"
        htmlFor="image"
        className="form__image-field"
      >
        Choose file
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.20833 0H3.125V3H0V5H3.125V8H5.20833V5H8.33333V3H5.20833V0ZM17.7081 0.999985H15.6247V1H10.4167V3H15.6247V4.99998H15.625V5H20.8331V17H5.20833V10H3.125V17V19H5.20833H22.9167V17H22.9164V5H22.9167V3H22.9164V2.99998H20.8331V3H17.7083V1H17.7081V0.999985ZM10.4169 7H14.5836V9L16.6667 9V13H14.5836V15H10.4169V13H14.5833V9L10.4169 9V7ZM8.33333 9H10.4167V13H8.33333V9Z"
            fill="black"
          />
        </svg>
        <input type="file" id="image" onChange={handleImage} />
      </label>
      <button className="form__button" disabled={areAreaFieldsEmpty}>
        Create Pokémon
      </button>
    </FormStyled>
  );
};

export default CreatePokemonForm;
