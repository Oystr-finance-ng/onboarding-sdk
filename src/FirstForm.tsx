import React, { useState } from "react";

interface FirstFormProps {
  setStep: (step: number) => void;
  submitStepOne: (data: any) => void;
}

const FirstForm: React.FC<FirstFormProps> = ({ setStep, submitStepOne }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    bvn: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can do something with the formData here, like sending it to an API or storing it in state
    await submitStepOne(formData);
    // Set the step to proceed to the next section
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-4 my-2">
        <div className="border-b border-gray-900/10 pb-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Basic Details for Guarantor
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Full Name */}
            <div className="sm:col-span-4">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    required
                    autoComplete="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="john doe"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="mail@mail.com"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="sm:col-span-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="1234 Main St"
                  />
                </div>
              </div>
            </div>

            {/* BVN */}
            <div className="sm:col-span-4">
              <label
                htmlFor="bvn"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                BVN
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    name="bvn"
                    id="bvn"
                    autoComplete="bvn"
                    value={formData.bvn}
                    maxLength={11}
                    minLength={11}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="12345678901"
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                    placeholder="12345678901"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Next
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              //   onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FirstForm;
