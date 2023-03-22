interface ModalMessages {
  loginError: string;
  logoutSuccess: string;
  creatingPokemon: {
    sucess: string;
    error: string;
    conflict: string;
  };
  deletingPokemon: {
    error: string;
    sucess: string;
  };
  editingPokemon: {
    error: string;
    sucess: string;
  };
  gettingPokemonError: string;
  gettingDetailError: string;
}

const modalMessages: ModalMessages = {
  loginError: "Invalid credentials",
  logoutSuccess: "You have been logged out successfully!",
  creatingPokemon: {
    sucess: "Pokémon created!",
    error: "Error creating Pokémon",
    conflict: "Name already exists",
  },
  deletingPokemon: {
    error: "Error deleting Pokémon",
    sucess: "Pokémon deleted!",
  },
  editingPokemon: {
    error: "Error updating Pokémon",
    sucess: "Pokémon updated!",
  },
  gettingPokemonError: "Error getting Pokémon",
  gettingDetailError: "Error getting Pokémon detail",
};

export default modalMessages;
