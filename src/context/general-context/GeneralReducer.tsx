import { GET_BUSINESS } from "../types";

const GeneralReducer = (prevState: any, { type, payload }: any) => {
  switch (type) {
    case GET_BUSINESS:
      return {
        ...prevState,
        business: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
