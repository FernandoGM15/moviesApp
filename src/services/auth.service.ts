import { URL } from "../environment";
import { UserI } from "./user.service";

/**
 * @description Function to Login
 */
export const login = async (email: string, password: string): Promise<void> => {
  const url = `${URL}/users?email=${email}&password=${password}`;
  const req = await fetch(url);
  const res: UserI[] = await req.json();
  if (!req.ok) throw new Error("Invalid Credentials");
  if (res.length === 0) throw new Error("User not found");
  sessionStorage.setItem("user", JSON.stringify(res));
};

/**
 * @description Function to Logout
 */
export const logout = (): void => {
  const user = sessionStorage.getItem("user");
  if (user) sessionStorage.removeItem("user");
};
