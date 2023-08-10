export { Onboarding } from "./Onboarding";

import { Onboarding } from "./Onboarding";
window.Onboarding = Onboarding;

// add a global type for window
declare global {
  interface Window {
    Onboarding: typeof Onboarding;
  }
}
