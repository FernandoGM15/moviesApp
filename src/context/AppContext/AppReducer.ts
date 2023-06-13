import { UserI } from "../../services/user.service";
import { AppStateI } from "./AppProvider";

export type AppActionI = { type: "SET_USER"; payload: UserI };

const AppReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const { id, name, email } = action.payload;

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          id,
          email,
          name,
        },
      };
    default:
      return state;
  }
};

export default AppReducer;
