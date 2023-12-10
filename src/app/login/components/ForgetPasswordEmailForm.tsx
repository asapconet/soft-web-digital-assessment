"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { resetEmailSchema } from "@/app/forgot-password/schema";
import { MailBox } from "@/app/assets/mailBox";
import { useForgotPasswordEmail } from "@/api/auth";
import toast from "react-hot-toast";

export function ResetPasswordEmailForm({ onNextStep, onPrevStep }: any) {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetEmailSchema),
  });

  const { mutate: sendEmail, data: response } = useForgotPasswordEmail();

  useEffect(() => {
    if (response?.status === 200) {
      toast.success(response.data.message);
      setEmailSent(true);
    } else {
      setEmailSent(false);
      console.error("Email not sent yet"); // to be replaced with pending BE response msg
    }
  }, [response]);

  const handleNextStep = () => {
    onNextStep();
  };

  const onSubmit = (data: any) => {
    sendEmail(data);
    setEmail(data.email);
  };

  return (
    <>
      {emailSent ? (
        <div className="w-[486px] ">
          <div className=" flex flex-col items-center gap-4">
            <div className=" flex flex-col items-center justify-center">
              <MailBox />
            </div>
            <p className="text-light_gray text-center text-[1rem] mb-8">
              An OTP code has been sent to {email} Check your email to get the
              code
            </p>
          </div>
          <>
            <SecondaryButton
              type="button"
              onClick={handleNextStep}
              className="w-full my-8"
            >
              Next
            </SecondaryButton>
          </>
        </div>
      ) : (
        <div className="w-[486px]">
          <IoArrowBackCircleOutline
            onClick={onPrevStep}
            className="text-primary mb-8"
            size={35}
          />
          <p className="text-[3rem] font-[800] text-black font-recoleta">
            Forgot password
          </p>
          <p className="text-light_gray text-[1rem] mb-8">
            Enter your email and well send you a mail on how to reset your
            password.
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <PrimaryInput
              id="email"
              label="Email"
              register={{ ...register("email") }}
            />
            {errors.email && (
              <span className="text-red-500 italic text-[.7rem]">
                {errors.email.message}
              </span>
            )}

            <SecondaryButton type="submit" className="w-full my-8">
              Send email
            </SecondaryButton>
            <div className="flex items-center justify-center text-light_gray gap-2 text-[.8rem] ">
              Or
              <Link href="/login" className="text-border_purple font-[450]">
                Login
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
