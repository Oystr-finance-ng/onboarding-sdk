import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import OtpInput from "react-otp-input";

interface OtpFormProps {
  setStep: (step: number) => void;
  submitStepTwo: (data: any) => void;
}

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  numInputs?: number;
  renderSeparator?: JSX.Element;
  renderInput?: (props: any) => JSX.Element;
}

const OtpForm: React.FC<OtpFormProps> = ({ setStep, submitStepTwo }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(60);

  const onChange = (value: string) => setOtp(value);

  const handleSubmit = async () => {
    // You can do something with the OTP value here, like sending it to an API for verification
    console.log("Entered OTP:", otp);
    setLoading(true);
    //await submitStepTwo(otp);
    try {
      const res = await axios.post(
        BASE_URL + "/api/guarantor/validate/otp",
        {
          otp: otp,
          guarantor_id:
            typeof window !== "undefined"
              ? localStorage.getItem("guarantor_id")
              : "",
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      if (res.status === 200) {
        setStep(2);
      } else {
        alert("An error occurred");
        return;
      }
      setLoading(false);
      console.log(res);
    } catch (err: string | any) {
      alert(err.response.data.message);

      setLoading(false);
    }
    // Set the step to proceed to the next section
    //setStep(2);
  };

  const handleCancel = () => {
    // Handle cancel button click if needed
    // For example: setOpen(false);
  };

  useEffect(() => {
    let count = 60;
    const timer = setInterval(() => {
      count--;
      setCounter(count);
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12 mx-4 my-4">
      <div className="py-2 otpform">
        <h2>Enter Guarantor OTP PIN</h2>
        <p className="pt-3">
          Enter the 6-digit otp sent to your Guarantor Email address
        </p>
        <div className="">
          {/* OTP */}

          <div className="sm:col-span-4">
            <div className="mt-6">
              <div className="form-input-groups">
                <OtpInput
                  value={otp}
                  onChange={onChange}
                  numInputs={6}
                  renderSeparator={<span></span>}
                  renderInput={props => <input {...props} />}
                  containerStyle="otp-input-container"
                />
                {counter === 0 ? (
                  <p className="pt-3">
                    Didn’t get the code?
                    <span style={{ color: "#2BA84A" }}> Resend Code</span>
                  </p>
                ) : (
                  <p className="pt-3">
                    Didn’t get the code? Resend in{" "}
                    <span style={{ color: "#2BA84A" }}>{counter} secs</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-btn-layout no-spacing">
        <button onClick={handleSubmit} className="form-btn-next">
          {loading ? "Loading..." : "Next"}
        </button>
        <button
          type="button"
          className="form-btn-cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OtpForm;
