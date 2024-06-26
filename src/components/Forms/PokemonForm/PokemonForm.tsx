import { useState } from "react";
import Image from "next/image";
import { pokemonInputTypes } from "../../../data/pokemonTypes";
import usePokemon from "../../../hooks/usePokemon/usePokemon";
import { secondaryFont } from "../../../styles/fonts";
import { UserPokemonFormData, UserPokemonSelectData } from "./types";
import FormStyled from "../../../styles/shared/FormStyled";
import AddImageIcon from "../../Icons/AddImageIcon";

const PokemonForm = (): JSX.Element => {
  const { createUserPokemon } = usePokemon();

  const initialUserPokemonFormData: UserPokemonFormData = {
    name: "",
    ability: "",
    height: "",
    weight: "",
    baseExp: "",
  };

  const initialUserPokemonSelectData: UserPokemonSelectData = {
    firstType: "Normal",
    secondType: "Normal",
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
    userPokemonFormData.baseExp === "" ||
    !image;

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setImage(files![0]);
  };

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

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUserPokemonData = new FormData();
    newUserPokemonData.append("name", userPokemonFormData.name);
    newUserPokemonData.append("firstType", userPokemonSelectData.firstType);
    newUserPokemonData.append("secondType", userPokemonSelectData.secondType);
    newUserPokemonData.append("ability", userPokemonFormData.ability);
    newUserPokemonData.append("height", userPokemonFormData.height);
    newUserPokemonData.append("weight", userPokemonFormData.weight);
    newUserPokemonData.append("baseExp", userPokemonFormData.baseExp);

    if (image) {
      newUserPokemonData.append("image", image);
    }

    createUserPokemon(newUserPokemonData);
  };

  return (
    <FormStyled className={`${secondaryFont.className}`}>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input
            maxLength={11}
            value={userPokemonFormData.name}
            onChange={handleUserPokemonFormData}
            className="field"
            type="text"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="field-container">
          <label htmlFor="firstType">First type</label>
          <select
            className="field"
            id="firstType"
            value={userPokemonSelectData.firstType}
            onChange={handleUserPokemonSelectData}
          >
            {pokemonInputTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="field-container">
          <label htmlFor="secondType">Second type</label>
          <select
            className="field"
            id="secondType"
            value={userPokemonSelectData.secondType}
            onChange={handleUserPokemonSelectData}
          >
            {pokemonInputTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="field-container">
          <label htmlFor="ability">Ability</label>
          <input
            maxLength={11}
            value={userPokemonFormData.ability}
            onChange={handleUserPokemonFormData}
            className="field"
            type="text"
            autoComplete="off"
            id="ability"
          />
        </div>
        <div className="field-container">
          <label htmlFor="height">Height</label>
          <input
            maxLength={3}
            value={userPokemonFormData.height}
            onChange={handleUserPokemonFormData}
            placeholder="0"
            className="field"
            type="text"
            autoComplete="off"
            id="height"
          />
        </div>
        <div className="field-container">
          <label htmlFor="weight">Weight</label>
          <input
            maxLength={3}
            value={userPokemonFormData.weight}
            onChange={handleUserPokemonFormData}
            className="field"
            type="text"
            placeholder="0"
            autoComplete="off"
            id="weight"
          />
        </div>
        <div className="field-container">
          <label htmlFor="baseExp">Base exp</label>
          <input
            maxLength={3}
            value={userPokemonFormData.baseExp}
            onChange={handleUserPokemonFormData}
            className="field"
            type="text"
            placeholder="0"
            autoComplete="off"
            id="baseExp"
          />
        </div>

        <div className="field-container">
          <span id="Image">Image</span>
          <label
            htmlFor="image"
            className="field field--image"
            aria-labelledby="Image"
          >
            <AddImageIcon />
            <span>Upload image</span>
          </label>
          <input
            type="file"
            id="image"
            className="image-field"
            onChange={handleImage}
          />
          {image && (
            <Image
              src={URL.createObjectURL(image)}
              alt={userPokemonFormData.name}
              height="120"
              width="120"
            />
          )}
        </div>
        <button className="form__button" disabled={areAreaFieldsEmpty}>
          Create Pokémon
        </button>
      </form>
    </FormStyled>
  );
};

export default PokemonForm;
