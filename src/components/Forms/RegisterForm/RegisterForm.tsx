import { useState } from "react";
import { secondaryFont } from "../../../styles/fonts";
import FormStyled from "../../../styles/shared/FormStyled";
import { UserCredentials } from "../../../hooks/types";

import useUser from "../../../hooks/userUser/useUser";
import { Field, Form, Formik, FormikHelpers, useFormikContext } from "formik";
import registerSchema from "./registerSchema";
import OpenedEyeIcon from "../../Icons/OpenedEyeIcon";
import ClosedEyeIcon from "../../Icons/ClosedEyeIcon";

const RegisterForm = (): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    email: "",
    password: "",
    username: "",
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { registerUser } = useUser();

  const handleSubmit = (
    userCredentials: UserCredentials,
    actions: FormikHelpers<UserCredentials>
  ) => {
    registerUser(userCredentials);

    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialUserCredentials}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
      validateOnChange={false}
    >
      {({ isValid, errors, values }) => (
        <FormStyled className={`${secondaryFont.className}`}>
          <Form className="form">
            <div className="field-container">
              <label htmlFor="email">Email</label>
              <Field
                autoFocus
                className={`field ${errors.email && "field--invalid"}`}
                type="text"
                autoComplete="off"
                id="email"
                name="email"
                aria-describedby="invalid-email-message"
                aria-invalid={!isValid}
              ></Field>
              <span
                role="alert"
                id="invalid-email-message"
                className="field__invalid-message"
              >
                {errors.email}
              </span>
            </div>
            <div className="field-container">
              <label htmlFor="username">Username</label>
              <Field
                className={`field ${errors.username && "field--invalid"}`}
                type="text"
                autoComplete="off"
                id="username"
                name="username"
                aria-describedby="invalid-username-message"
                aria-invalid={!isValid}
              ></Field>
              <span
                role="alert"
                id="invalid-username-message"
                className="field__invalid-message"
              >
                {errors.username}
              </span>
            </div>
            <div className="field-container">
              <label htmlFor="password">Password</label>
              <Field
                className={`field field--password ${
                  errors.password && "field--invalid"
                }`}
                autoComplete="on"
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                aria-describedby="invalid-password-message"
                aria-invalid={!isValid}
              />
              <button
                className="field__icon"
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                aria-label="Show Password"
              >
                {isPasswordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
              </button>
              <span
                role="alert"
                id="invalid-password-message"
                className="field__invalid-message"
              >
                {errors.password}
              </span>
            </div>
            <button
              className="form__button"
              disabled={
                !isValid ||
                !values.email ||
                !values.password ||
                !values.username
              }
            >
              Sign up
            </button>
          </Form>
        </FormStyled>
      )}
    </Formik>
  );
};

export default RegisterForm;
