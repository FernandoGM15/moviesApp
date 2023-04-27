import { URL } from "../environment";
import { UserI } from "./user.service";

/**
 * @description Function to Login
 */
export const login = async (email: string, password: string): Promise<void> => {
    const url = `${URL}/users?email=${email}&password=${password}`;
    const req = await fetch(url);
    if (req.ok) {
        const res: UserI[] = await req.json();
        if (res.length > 0) {
            sessionStorage.setItem('user', JSON.stringify(res));
            return;
        }
        else{
            throw new Error('User not found');
        }
    }
    throw new Error('Invalid Credentials');
}

/**
 * @description Function to Logout
 */
export const logout = (): void => {
    const user = sessionStorage.getItem('user');
    if (user) {
        sessionStorage.removeItem('user');
    }
}