/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.css";

import FirstForm from "./FirstForm";
import Modal from "./Modal";
import OtpForm from "./OtpForm";
import React, { useState, useEffect, useContext } from "react";
import Thanks from "./Thanks";
import GeneralContext from "./context/general-context/GeneralContext";
import { API_KEY, BASE_URL } from "./constants";
import axios from "axios";
import Loading from "./loading/Loading";

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
  const [loadbusiness, setLoadBusiness] = useState<boolean>(false);
  const { business, getBusiness } = useContext(GeneralContext);
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

  const fetchbusinessdetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/business-details`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      if (res.status === 200) {
        setLoadBusiness(true);
        getBusiness(res.data.data.business);
      } else {
        setLoadBusiness(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchbusinessdetails();
  }, []);

  return (
    <>
      {loadbusiness && (
        <div>
          <Modal step={step} setStep={setStep}>
            {step === 0 && (
              <FirstForm
                setStep={setStep}
                submitStepOne={submitStepOne}
                color={business?.colour}
              />
            )}
            {step === 1 && (
              <OtpForm
                setStep={setStep}
                submitStepTwo={submitStepTwo}
                color={business?.colour}
              />
            )}
            {step === 2 && <Thanks />}
          </Modal>
        </div>
      )}
      {!loadbusiness && (
        <Modal step={step} setStep={setStep}>
          <div
            className="form-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        </Modal>
      )}
    </>
  );
};

export default OnboardingPage;
