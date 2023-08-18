import { useReducer } from "react";
import GeneralReducer from "./GeneralReducer";
import { GET_BUSINESS } from "../types";
import GeneralContext from "./GeneralContext";

const GeneralState = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    business: {},
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const getBusiness = (business: unknown): void => {
    dispatch({
      type: GET_BUSINESS,
      payload: business,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        business: state.business,
        getBusiness,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
