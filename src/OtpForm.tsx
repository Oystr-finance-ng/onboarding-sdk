import React, { useState } from "react";

interface OtpFormProps {
  setStep: (step: number) => void;
  submitStepTwo: (data: any) => void;
}

const OtpForm: React.FC<OtpFormProps> = ({ setStep, submitStepTwo }) => {
  const [otp, setOtp] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can do something with the OTP value here, like sending it to an API for verification
    console.log("Entered OTP:", otp);
    await submitStepTwo(otp);
    // Set the step to proceed to the next section
    setStep(2);
  };

  const handleCancel = () => {
    // Handle cancel button click if needed
    // For example: setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-4 my-2">
        <div className="border-b border-gray-900/10 pb-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            An OTP has been sent to the email address of the guarantor
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* OTP */}
            <div className="sm:col-span-4">
              <label
                htmlFor="otp"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                OTP
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    autoComplete="otp"
                    value={otp}
                    maxLength={6}
                    required
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="123456"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
            >
              Next
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OtpForm;
