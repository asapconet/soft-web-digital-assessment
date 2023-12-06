"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import { otpSchema, resetEmailSchema } from "@/app/forgot-password/schema";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";

export function OtpForm() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    router.push("/forgot-password");
  };

  return (
    <div className="mt-[95px] flex justify-center items-center min-h-[70vh] ">
      <div className="w-[486px]">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            shouldAutoFocus
            inputStyle="text-primary mx-4 w-[75px] rounded-md h-[75px] bg-input_bg border-[1px] 
             border-input_border text-primary"
            renderSeparator={<span>-</span>}
            renderInput={(props: any) => (
              <input className="px-8" id="opt" {...props} />
            )}
          />

          <p className="text-light_gray text-[1rem] text-center mb-8">
            An OTP code has been sent to segunsolaru@gmail.com. Check your email
            to get the code
          </p>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <SecondaryButton type="submit" className="w-full my-8">
            Next
          </SecondaryButton>
        </form>
      </div>
    </div>
  );
}
