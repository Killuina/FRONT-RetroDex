interface Paths {
  users: {
    path: string;
    endpoints: {
      login: string;
    };
  };
}

export const paths: Paths = {
  users: {
    path: "/users",
    endpoints: {
      login: "/login",
    },
  },
};
