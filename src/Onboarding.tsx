// import { Onboarding } from ".";

import OnboardingPage from "./OnboardingPage"; // Import your OnboardingPage component
import { createRoot } from "react-dom/client";
import GeneralState from "./context/general-context/GeneralState";

export class Onboarding {
  public api_key: string;
  static setup(api_key: string) {
    return new Onboarding(api_key);
  }
  constructor(api_key: string) {
    this.api_key = api_key;
  }
  initialize(data: any) {
    const id = "oystr-onboarding-iframe";
    let iframe = document.getElementById(id) as HTMLIFrameElement;

    if (!iframe) {
      iframe = document.createElement("iframe") as HTMLIFrameElement;
      iframe.id = id;
      iframe.style.border = "none"; // Remove iframe border
      document.body.appendChild(iframe);
    }

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow?.document;

    if (iframeDocument) {
      const containerDiv = iframeDocument.createElement("div");
      containerDiv.id = "oystr-onboarding-container";
      iframeDocument.body.appendChild(containerDiv);
      const root = createRoot(containerDiv!);
      root.render(
        <GeneralState>
          <OnboardingPage api_key={this.api_key} data={data} />
        </GeneralState>
      );
    } else {
      console.error("Failed to access iframe document.");
    }
  }
}
