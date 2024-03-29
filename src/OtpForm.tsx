import { API_KEY, BASE_URL } from "./constants";
import React, { useEffect, useState } from "react";

import OtpInput from "react-otp-input";
import axios from "axios";

interface OtpFormProps {
  setStep: (step: number) => void;
  submitStepTwo: (data: any) => void;
  color?: string;
}

// interface OTPInputProps {
//   value: string;
//   onChange: (value: string) => void;
//   numInputs?: number;
//   renderSeparator?: JSX.Element;
//   renderInput?: (props: any) => JSX.Element;
// }

const OtpForm: React.FC<OtpFormProps> = ({ setStep, color }) => {
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
        <h2
          style={{
            color: color,
          }}
        >
          Enter Guarantor OTP PIN
        </h2>
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
                  renderInput={(props: any) => <input {...props} />}
                  containerStyle="otp-input-container"
                />
                {counter === 0 ? (
                  <p className="pt-3">
                    Didn’t get the code?
                    <span style={{ color: color }}> Resend Code</span>
                  </p>
                ) : (
                  <p className="pt-3">
                    Didn’t get the code? Resend in{" "}
                    <span style={{ color: color }}>{counter} secs</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-btn-layout no-spacing">
        <button
          onClick={handleSubmit}
          className="form-btn-next"
          style={{ background: color, border: `1px solid ${color}` }}
        >
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
