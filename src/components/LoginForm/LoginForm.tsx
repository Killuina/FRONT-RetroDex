const LoginForm = (): JSX.Element => {
  return (
    <form className="login-form">
      <label htmlFor="username" className="login-form__field">
        Username
        <input type="text" autoComplete="off" id="username"></input>
      </label>
      <label htmlFor="password" className="login-form__field">
        Password
      </label>
      <input type="password" id="password" />
      <button>Sign in</button>
    </form>
  );
};

export default LoginForm;
