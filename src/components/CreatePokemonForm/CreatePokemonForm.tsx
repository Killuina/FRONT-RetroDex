import { useState } from "react";
import { pokemonInputTypes } from "../../data/pokemonTypes";
import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../LoginForm/FormStyled";
import { UserPokemonFormData, UserPokemonSelectData } from "./types";

const CreatePokemonForm = (): JSX.Element => {
  const initialUserPokemonFormData: UserPokemonFormData = {
    name: "",
    ability: "",
    height: "",
    weight: "",
    baseExp: "",
  };

  const initialUserPokemonSelectData: UserPokemonSelectData = {
    firstType: "",
    secondType: "",
  };

  const [userPokemonFormData, setUserPokemonFormData] = useState(
    initialUserPokemonFormData
  );
  const [userPokemonSelectData, setUserPokemonSelectData] = useState(
    initialUserPokemonSelectData
  );
  const [image, setImage] = useState<File>();

  const areAreaFieldsEmpty =
    userPokemonFormData.name === "" ||
    userPokemonSelectData.firstType === "" ||
    userPokemonFormData.ability === "" ||
    userPokemonFormData.height === "" ||
    userPokemonFormData.weight === "" ||
    userPokemonFormData.baseExp === "";

  const handleUserPokemonFormData = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPokemonFormData({
      ...userPokemonFormData,
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
    setImage(files![0]);
  };

  return (
    <FormStyled className={`${secondaryFont.className} form`}>
      <label htmlFor="name">Name</label>
      <input
        maxLength={11}
        value={userPokemonFormData.name}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="name"
      ></input>
      <label htmlFor="firstType">First type</label>
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
        maxLength={11}
        value={userPokemonFormData.ability}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="ability"
      ></input>
      <label htmlFor="height">Height</label>
      <input
        maxLength={3}
        value={userPokemonFormData.height}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="height"
      ></input>
      <label htmlFor="weight">Weight</label>
      <input
        maxLength={3}
        value={userPokemonFormData.weight}
        onChange={handleUserPokemonFormData}
        className="form__field"
        type="text"
        autoComplete="off"
        id="weight"
      ></input>
      <label htmlFor="baseExp">Base exp</label>
      <input
        maxLength={3}
        value={userPokemonFormData.baseExp}
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
        <input type="file" id="image" hidden onChange={handleImage} />
      </label>
      <button className="form__button" disabled={areAreaFieldsEmpty}>
        Create Pokémon
      </button>
    </FormStyled>
  );
};

export default CreatePokemonForm;
