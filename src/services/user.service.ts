import { URL } from "../environment";
import { v4 as uuid } from "uuid";

export interface UserI {
  id: number;
  name: string;
  email: string;
}

type UserParamsI = Partial<Record<keyof UserI, string>>;

/**
 * @description Function to fetches users from the API
 */
export const getUsers = async (params?: UserParamsI): Promise<UserI[]> => {
  const query = params ? new URLSearchParams(params).toString() : "";
  const req = await fetch(`${URL}/users?${query}`);
  if (req.ok) {
    return req.json();
  }
  throw new Error("Error fetching users");
};

/**
 * @description  Function to store a user in the API
 */
export const storeUser = async (
  formElement: HTMLFormElement
): Promise<UserI> => {
  const form = new FormData(formElement);
  form.append("id", uuid());
  const req = await fetch(`${URL}/users`, {
    body: JSON.stringify(Object.fromEntries(form)),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (req.ok) {
    return req.json();
  }
  throw new Error("Error storing user");
};
