interface Paths {
  users: {
    path: string;
    endpoints: {
      login: string;
    };
  };
}

export const routes: Paths = {
  users: {
    path: "/users",
    endpoints: {
      login: "/login",
    },
  },
};
