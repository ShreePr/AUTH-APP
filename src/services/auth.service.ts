//ToDo: Add api calls
const AuthService = {
  signin: (email: string, password: string) => {
    return { email, password };
  },
  signup: (name: string, email: string, password: string) => {
    return { name, email, password };
  },
  logout: () => {
    return null;
  }
};

export default AuthService;
