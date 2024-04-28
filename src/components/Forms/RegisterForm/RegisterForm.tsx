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
                className={`field ${errors.email && "field--error"}`}
                type="text"
                autoComplete="off"
                id="email"
                name="email"
              ></Field>
              <p className="field__error-message">{errors.email}</p>
            </div>
            <div className="field-container">
              <label htmlFor="username">Username</label>
              <Field
                className={`field ${errors.username && "field--error"}`}
                type="text"
                autoComplete="off"
                id="username"
                name="username"
              ></Field>
              <p className="field__error-message">{errors.username}</p>
            </div>
            <div className="field-container">
              <label htmlFor="password">Password</label>
              <Field
                className={`field field--password ${
                  errors.password && "field--error"
                }`}
                autoComplete="on"
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
              />
              <button
                className="field__icon"
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
              </button>
              <p className="field__error-message">{errors.password}</p>
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
