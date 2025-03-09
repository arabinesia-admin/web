"use client";

import React from "react";
import { signUpSchema, TSignUpSchema, TWhatsappData } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { CardContent } from "../ui/card";
import { useState } from "react";
import { sendDataToWhatsapp } from "@/utils/send-message";
import { Country, CountryDropdown } from "@/components/country-dropdown";
import { PhoneInput, CountryData } from "@/components/phone-input";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { Separator } from "../ui/separator";

export function SignUpForm() {
  const [serverResponse, setServerResponse] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(
    null
  );
  const [countryData, setCountryData] = React.useState<CountryData>();
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [successSignup, setSuccessSignup] = useState(false);
  const [waData, setWaData] = useState<TWhatsappData>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      confirmPassword: "",
    },
  });

  async function SignupUser(formData: TSignUpSchema) {
    try {
      const apiData = {
        full_name: formData.full_name,
        age: formData.age,
        job: formData.job,
        country: formData.country,
        phone_number: formData.phone_number,
        package_level: formData.package_level,
        email: formData.email,
        password: formData.password,
      };

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (response.status === 201) {
        const whatsappData = {
          name: formData.full_name,
          age: formData.age,
          job: formData.job,
          phone: formData.phone_number,
          motivation: formData.motivation,
          package_level: formData.package_level,
          email: formData.email,
        };
        sendDataToWhatsapp(whatsappData);
        setWaData(whatsappData);
        setSuccessSignup(true);
      } else {
        const errorData = await response.json();
        setServerResponse(errorData.message);
      }
    } catch (error) {
      setServerResponse("Something went wrong. Please try again.");
    }
  }

  const packages = [
    {
      id: "1",
      name: "شهرية",
      description:
        "المدة 1 شهر 4 مواد فيديو وتمارين 1 وقت للتفاعل مع الأسئلة والأجوبة وحدة التعلم الرقمي",
      price: "$8",
    },
    {
      id: "2",
      name: "المستوى",
      description:
        "المدة 4 أشهر 16 مادة فيديو وتمارين 2 مرات تفاعل أسئلة وأجوبة وحدة التعلم الرقمي شهادة",
      price: "$29",
    },
    {
      id: "3",
      name: "باقات كاملة",
      description:
        "المدة الزمنية 12 شهر 48 مادة فيديو وتمارين 6 مرات تفاعل أسئلة وأجوبة وحدة التعلم الرقمي الشهادة",
      price: "$79",
    },
  ];

  return (
    <div className="flex flex-col gap-6 bg-white rounded-xl border-2 border-gray-300">
      <div className="flex flex-col items-center text-center mt-10">
        <h1 className="text-2xl font-bold text-brand-primary">
          !مرحبا بكم في الدورة أرابينيسيا
        </h1>
        <p className="text-balance text-muted-foreground mb-5">
          Create new account
        </p>
        <div className="absolute mt-16 left-1/2 -translate-x-1/2 w-128 md:w-256 text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:border-b-4 after:border-gray-600"></div>
      </div>
      {successSignup ? (
        <div className="min-h-dvh  flex items-center justify-center p-4 bg-slate-100">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-4 border border-blue-100">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="text-2xl font-bold text-gray-800 mb-2">
                Complete the payment
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Continue the transaction process to the following number, and wait
              for the admin to create your account.{" "}
              <div className="flex">
                <TriangleAlert /> Save/Screenshot the payment result and send it
                to the following number for further processing.
              </div>
            </p>
            <Separator />
            <p className="text-gray-600 mb-4">
              قم بإكمال عملية الدفع إلى الرقم التالي، وانتظر حتى يقوم المسؤول
              بإنشاء حسابك.{" "}
              <div className="flex">
                يُرجى حفظ أو التقاط لقطة شاشة لإثبات الدفع وإرسالها إلى الرقم
                التالي لإكمال العملية.
              </div>
            </p>

            <div className="pt-4 border-t border-gray-100 ">
              <p className="text-gray-500 flex items-center justify-center gap-2">
                <span>Admin Contact:</span>
                <a
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    if (waData) {
                      sendDataToWhatsapp(waData);
                    } else {
                      alert("No data available to send.");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 851-8302-3566
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <CardContent className="p-0 text-right font-sans">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(SignupUser)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
              <div>
                <Label htmlFor="full_name" className="text-right">
                  الاسم :
                </Label>
                <input
                  {...register("full_name")}
                  type="text"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.full_name && (
                  <p className="text-red-500">{`${errors.full_name.message}`}</p>
                )}
              </div>

              <div>
                <Label htmlFor="age" className="text-right">
                  العمر :
                </Label>
                <input
                  {...register("age")}
                  type="number"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.age && (
                  <p className="text-red-500">Input must be a number</p>
                )}
              </div>
              <div>
                <Label htmlFor="job" className="text-right">
                  الوظيفة :
                </Label>
                <input
                  {...register("job")}
                  type="text"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.job && (
                  <p className="text-red-500">{`${errors.job.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="country" className="text-right">
                  المدينة والدولة :
                </Label>
                <input
                  {...register("country")}
                  type="text"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.country && (
                  <p className="text-red-500">{`${errors.country.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="phone_number" className="text-right">
                  رقم واتساب :
                </Label>
                <div className="flex w-full">
                  <CountryDropdown
                    onChange={(country) => {
                      setSelectedCountry(country);
                      setCountryData(country);

                      const countryCode = country.countryCallingCodes[0];
                      const formattedCode = countryCode.startsWith("+")
                        ? countryCode
                        : `+${countryCode}`;
                      setValue("phone_number", formattedCode, {});
                    }}
                    defaultValue={selectedCountry?.alpha3}
                    inline
                    className=" border border-gray-500 px-4 py-5 rounded text-right"
                  />
                  <PhoneInput
                    {...register("phone_number")}
                    placeholder="Enter your number"
                    defaultCountry={selectedCountry?.alpha2 || "ID"}
                    onCountryChange={(country) => {
                      setCountryData(country);
                      setSelectedCountry(country as Country);
                    }}
                    inline
                    className="w-full border border-gray-500 px-4 py-5 rounded text-right"
                  />
                </div>
                {errors.phone_number && (
                  <p className="text-red-500">( + ) Input must start with</p>
                )}
              </div>

              <div>
                <Label htmlFor="motivation" className="text-right">
                  دافعك لتعلم اللغة الإندونيسية :
                </Label>
                <input
                  {...register("motivation")}
                  type="text"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.motivation && (
                  <p className="text-red-500">{`${errors.motivation.message}`}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-right">
                  Email :
                </Label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.email && (
                  <p className="text-red-500">{`${errors.email.message}`}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-right">
                  Password :
                </Label>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.password && (
                  <p className="text-red-500">{`${errors.password.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-right">
                  Confirm Password :
                </Label>
                <input
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full border border-gray-500 px-4 py-2 rounded text-right"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-brand-dark hover:underline"
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>
            </div>
            {/* Radio button */}
            <div className="flex flex-col gap-2  mt-5 text-right">
              <Label>: اختر من باقات الفصل</Label>
              <div className="flex flex-wrap gap-5 md:gap-12 items-center justify-center">
                {packages.map((package_level) => (
                  <label key={package_level.id} className="cursor-pointer">
                    <input
                      type="radio"
                      value={package_level.name}
                      {...register("package_level", {
                        required: "Please select a package_level",
                      })}
                      className="peer sr-only"
                    />
                    <div className="w-80 md:w-3/3 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-slate-600 transition-all hover:shadow peer-checked:text-black peer-checked:ring-brand-dark peer-checked:bg-emerald-200 peer-checked:ring-offset-2">
                      <div className="flex flex-col gap-1">
                        <p className="text-2xl text-center font-bold font-tajawal ">
                          {package_level.name}
                        </p>
                        <hr />
                        <p className="md:text-lg text-sm font-arabic text-right direction-rtl">
                          {package_level.description}
                        </p>
                        <div className="flex items-end justify-between">
                          <p className="text-xl font-bold">
                            {package_level.price}
                          </p>
                          <div>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.package_level && (
                <p className="text-red-500">Please choose one of the plan</p>
              )}
            </div>
            {/* Radio Button end */}
            {serverResponse && (
              <p className="text-center font-bold mt-7 text-red-500">
                {`Error : ${serverResponse}`}
              </p>
            )}

            <div className="flex justify-center items-center mb-2 mt-5">
              <div className="flex text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary justify-center items-center">
                <div>
                  By checking this box, you confirm that you have read,
                  understood, and agree to our
                  <Link
                    className="mx-1"
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service and Privacy Policy
                  </Link>
                  <input
                    type="checkbox"
                    checked={isTermsChecked}
                    onChange={(e) => setIsTermsChecked(e.target.checked)}
                    className="ml-1 mb-0"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !isTermsChecked}
              className="bg-brand-primary disabled:bg-brand-dark hover:bg-brand-dark text-white py-2 rounded w-full"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </CardContent>
      )}
    </div>
  );
}
