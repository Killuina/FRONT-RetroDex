import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../LoginForm/LoginFormStyled";

const CreatePokemonForm = (): JSX.Element => {
  return (
    <FormStyled className={`${secondaryFont.className} "form"`}>
      <label htmlFor="name">Name</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="name"
      ></input>
      <label htmlFor="first-type">First type</label>
      <select className="form__field" id="first-type">
        <option value="">None</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Poison">Poison</option>
        <option value="Fairy">Fairy</option>
        <option value="Grass">Grass</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Normal">Normal</option>
      </select>
      <label htmlFor="first-type">Second type</label>
      <select className="form__field" id="first-type">
        <option value="">None</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Poison">Poison</option>
        <option value="Fairy">Fairy</option>
        <option value="Grass">Grass</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Normal">Normal</option>
      </select>
      <label htmlFor="ability">Ability</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="ability"
      ></input>
      <label htmlFor="height">Height</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="height"
      ></input>
      <label htmlFor="weight">Weight</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="weight"
      ></input>
      <label htmlFor="image">Image</label>
      <input type="file" id="image" />
      <label htmlFor="base-exp">Base exp</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="base-exp"
      ></input>
      <button className="form__button">Create Pokémon</button>
    </FormStyled>
  );
};

export default CreatePokemonForm;
