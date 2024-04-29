import { object, string } from "yup";
import invalidFieldMessages from "../../../data/invalidValidationMessages";

const registerSchema = object({
  email: string().email(invalidFieldMessages.email.wrongFormat),
  username: string()
    .min(5, invalidFieldMessages.username.tooShort)
    .max(12, invalidFieldMessages.username.tooLong),
  password: string()
    .matches(/[A-Za-z]/, invalidFieldMessages.pasword.containLetters)
    .matches(/\d/, invalidFieldMessages.pasword.containNumbers)
    .matches(
      /[!@#$%^&*()_+]/,
      invalidFieldMessages.pasword.containSpecialCharacter
    )
    .min(8, invalidFieldMessages.pasword.tooShort)
    .max(20, invalidFieldMessages.pasword.tooLong),
});

export default registerSchema;
