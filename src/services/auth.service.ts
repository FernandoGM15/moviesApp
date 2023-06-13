import { URL } from "../environment";
import { UserI } from "./user.service";

/**
 * @description Function to Login
 */
export const login = async (
  email: string,
  password: string
): Promise<UserI> => {
  const url = `${URL}/users?email=${email}&password=${password}`;
  const req = await fetch(url);
  const res: UserI[] = await req.json();
  if (!req.ok) throw new Error("Invalid Credentials");
  if (res.length === 0) throw new Error("User not found");
  const [user] = res;
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
};

/**
 * @description Function to Logout
 */
export const logout = (): void => {
  const user = sessionStorage.getItem("user");
  if (user) sessionStorage.removeItem("user");
};
