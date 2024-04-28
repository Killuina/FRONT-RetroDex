type InvalidFieldMessages = {
  email: {
    wrongFormat: string;
  };
  username: {
    tooShort: string;
    tooLong: string;
  };
  pasword: {
    tooShort: string;
    tooLong: string;
    containLetters: string;
    containNumbers: string;
    containSpecialCharacter: string;
  };
};

const invalidFieldMessages: InvalidFieldMessages = {
  email: {
    wrongFormat: "You must enter a valid email.",
  },
  username: {
    tooShort: "Your username is too short!",
    tooLong: "Your username is too long!",
  },
  pasword: {
    tooShort: "Password must be 8 characters or more.",
    tooLong: "Password can't be more than 20 characters.",
    containLetters: "Password must contain at least 1 letter.",
    containNumbers: "Password must contain at least 1 number.",
    containSpecialCharacter:
      "Password must contain at least 1 special character.",
  },
};

export default invalidFieldMessages;
