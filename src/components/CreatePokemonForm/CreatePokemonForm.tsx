import { useState } from "react";
import Image from "next/image";
import { pokemonInputTypes } from "../../data/pokemonTypes";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../../styles/components/FormStyled";
import { UserPokemonFormData, UserPokemonSelectData } from "./types";

const CreatePokemonForm = (): JSX.Element => {
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
    <FormStyled
      onSubmit={onSubmitHandler}
      className={`${secondaryFont.className} form`}
    >
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
          <option key={type} value={type}>
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
          <option key={type} value={type}>
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
        placeholder="0"
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
        placeholder="0"
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
        placeholder="0"
        autoComplete="off"
        id="baseExp"
      ></input>
      <label htmlFor="image" className="form__image-field">
        Image
      </label>
      <input type="file" id="image" onChange={handleImage} />
      {image && (
        <Image
          src={URL.createObjectURL(image)}
          alt={userPokemonFormData.name}
          height="120"
          width="120"
        />
      )}
      <button className="form__button" disabled={areAreaFieldsEmpty}>
        Create Pokémon
      </button>
    </FormStyled>
  );
};

export default CreatePokemonForm;
