export { SpinStack } from "./SpinStack";

import { SpinStack } from "./SpinStack";
window.SpinStack = SpinStack;

// add a global type for window
declare global {
  interface Window {
    SpinStack: typeof SpinStack;
  }
}
