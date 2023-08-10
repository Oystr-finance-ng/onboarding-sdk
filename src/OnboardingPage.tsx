import "./index.css";

import FirstForm from "./FirstForm";
import Modal from "./Modal";
import OtpForm from "./OtpForm";
import React from "react";
import Thanks from "./Thanks";

interface OnboardingPageProps {
  // onFormSubmit: (data: any) => void;
  data: Record<string, any>;
  api_key: string;
}
interface stepOneData {
  fullname: string;
  email: string;
  address: string;
  bvn: string;
  phone: string;
}
const OnboardingPage: React.FC<OnboardingPageProps> = () => {
  const [step, setStep] = React.useState(0);
  const submitStepOne = async (data: stepOneData) => {
    // call api to submit data
    console.log(data);
    // wait for 2 sedconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep(1);
  };

  const submitStepTwo = async (otp: string) => {
    // call api to submit data
    console.log(otp);
    // wait for 2 sedconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep(2);
  };
  return (
    <div>
      <Modal step={step} setStep={setStep}>
        {step === 0 && (
          <FirstForm setStep={setStep} submitStepOne={submitStepOne} />
        )}
        {step === 1 && (
          <OtpForm setStep={setStep} submitStepTwo={submitStepTwo} />
        )}
        {step === 2 && <Thanks />}
      </Modal>
    </div>
  );
};

export default OnboardingPage;
