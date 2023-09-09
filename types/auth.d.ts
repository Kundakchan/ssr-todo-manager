export type LogIn = (password: string, email: string) => void;
export type Registration = (
  password: string,
  email: string,
  name: string,
) => void;
