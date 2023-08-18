import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import Loading from "./loading/Loading";

interface FirstFormProps {
  setStep: (step: number) => void;
  submitStepOne: (data: any) => void;
  color?: string;
}

const FirstForm: React.FC<FirstFormProps> = ({ setStep, color }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    bvn: "",
    phone: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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
    //await submitStepOne(formData);
    setLoading(true);
    try {
      const res = await axios.post(
        BASE_URL + "/api/guarantor",
        {
          ...formData,
          user_id: "1235678",
          name: formData.fullname,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      if (res.status === 200) {
        setStep(1);
        localStorage.setItem(
          "guarantor_id",
          res?.data?.data?.guarantor?.user_id
        );
      } else {
        alert("An error occurred");
        return;
      }
      setLoading(false);
    } catch (err: string | any) {
      alert(err.response.data.message);
    }
    // Set the step to proceed to the next section
    // setStep(1);
  };

  console.log(color);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 form-container">
        <div className="py-2">
          <h2
            className="text-base font-semibold leading-7 text-gray-900"
            style={{
              color: color,
            }}
          >
            Guarantor Onboarding
          </h2>
          <p>Please provide the guarantor information below</p>
          <div className="form-items mt-[24px]">
            <div className="form-layout">
              <h2
                style={{
                  color: color,
                }}
              >
                Personal Details
              </h2>
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      required
                      autoComplete="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      required
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Address (1234 Main St)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-layout mt-[30px]">
              <h2
                style={{
                  color: color,
                }}
              >
                BVN Verification
              </h2>
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
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
                      className="form-input"
                      placeholder="BVN (12345678901)"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Phone Number (08012345678)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-btn-layout">
            <button
              type="submit"
              className="form-btn-next"
              style={{
                background: color,
                border: `1px solid ${color}`,
              }}
            >
              {loading ? "Please wait..." : "Next"}
            </button>
            <button
              type="button"
              className="form-btn-cancel"
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
