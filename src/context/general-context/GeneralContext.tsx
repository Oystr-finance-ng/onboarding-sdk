import { createContext } from "react";

const GeneralContext = createContext({
  business: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getBusiness: (business: unknown): void => {},
});

export default GeneralContext;
