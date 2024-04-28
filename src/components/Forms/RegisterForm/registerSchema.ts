import { object, string } from "yup";

const registerSchema = object({
  email: string().email("You must enter a valid email."),
  username: string()
    .min(5, "Your username is too short!")
    .max(15, "Your username is too long!"),
  password: string()
    .matches(/[A-Za-z]/, "Password must contain at least 1 letter.")
    .matches(/\d/, "Password must contain at least 1 number.")
    .matches(
      /[!@#$%^&*()_+]/,
      "Password must contain at least 1 special character."
    )
    .min(8, "Password must be 8 characters or more.")
    .max(20, "Password can't be more than 20 characters."),
});

export default registerSchema;
