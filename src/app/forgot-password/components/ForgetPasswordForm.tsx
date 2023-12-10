"use client";

import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import { confirmResetPasswordSchema, resetEmailSchema } from "../schema";
import { FaArrowCircleLeft } from "react-icons/fa";

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(confirmResetPasswordSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    return data;
  };

  return (
    <div className="mt-[95px] flex justify-center items-center min-h-[70vh] ">
      <FaArrowCircleLeft size={30} />
      <div className="w-[486px] ">
        <p className="text-[3rem] font-[800] text-black font-recoleta">
          Reset password
        </p>
        <p className="text-light_gray text-[1rem] mb-8">
          Set your new password
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <PrimaryInput
            id="newPassword"
            label="Enter new password"
            helperText
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <span className="text-red-500 italic text-[.7rem]">
              {errors.newPassword.message}
            </span>
          )}
          <PrimaryInput
            id="confirmPassword"
            label="Re-enter new password"
            helperText
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 italic text-[.7rem]">
              {errors.confirmPassword.message}
            </span>
          )}

          <SecondaryButton type="submit" className="w-full my-8">
            Reset password
          </SecondaryButton>
          <div className="flex items-center justify-center text-light_gray gap-2 text-[.8rem] ">
            Or
            <Link href="/signup" className="text-border_purple font-[450]">
              Create a new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
