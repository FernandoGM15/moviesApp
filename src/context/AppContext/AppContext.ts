import { createContext } from "react";
import { AppStateI } from "./AppProvider";
import { UserI } from "../../services/user.service";

export interface AppContextI {
  state: AppStateI;
  setSessionStorage: (user: UserI) => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);
export default AppContext;
