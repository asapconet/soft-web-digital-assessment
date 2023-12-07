"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import { otpSchema, resetEmailSchema } from "@/app/forgot-password/schema";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";
import { useVerifyOtp } from "@/api/auth";
import toast from "react-hot-toast";

export function OtpForm({ mailed }: any) {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const { mutate: verifyEmail, data } = useVerifyOtp();

  useEffect(() => {
    if (data?.status === 200) {
      toast.success(data?.data.message);
      router.push("/forgot-password");
      reset();
    } else if (data?.status === 400) {
      console.error("email not verified");
    }
  }, [data, reset, router]);

  const onSubmit = (data: any) => {
    verifyEmail({otp});
    console.log(otp, "otp shhh");
  };

  return (
    <div className="mt-[95px] flex justify-center items-center min-h-[70vh] ">
      <div className="w-[486px]">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            inputStyle="text-primary mx-4 w-[75px] rounded-md h-[75px] bg-input_bg border-[1px] 
             border-input_border text-primary"
            renderSeparator={<span>-</span>}
            renderInput={(props: any) => (
              <input className="px-8" id="opt" {...props} />
            )}
          />

          <p className="text-light_gray text-[1rem] text-center mb-8">
            An OTP code has been sent to {mailed} Check your email to get the
            code
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
