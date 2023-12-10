"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import { LoginSchema } from "../schemas";
import { useLogin } from "@/api/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ToastContext } from "@/app/context/ToastContext";

export function LoginForm({ onNextStep }: any) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { mutate: loginUser, data } = useLogin();

  useEffect(() => {
    if (data?.status === 200) {
      toast.success(data?.data.message);
      router.push("/");
      reset();
    } else if (data?.status === 400) {
      console.error("something went wrong"); // to be replaced with pending BE response msg
    }
  }, [data, reset, router]);

  const onSubmit = (data: any) => {
    loginUser(data);
  };

  return (
    <>
      {/* <ToastContext /> */}
      <div className="w-[486px] ">
        <p className="text-light_gray text-[1rem]">Jump right back in</p>
        <p className="text-[3rem] font-[800] text-black font-recoleta mb-8">
          Login
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
          <PrimaryInput
            id="password"
            label="Password"
            type="password"
            register={{ ...register("password") }}
          />
          <div className="flex justify-between items-center">
            {errors.password && (
              <span className="text-red-500 italic text-[.7rem]">
                {errors.password.message}
              </span>
            )}
            <button
              onClick={onNextStep}
              className="flex justify-end text-[.8rem] text-border_purple font-[450] mt-2"
            >
              Forgot password?
            </button>
          </div>

          <SecondaryButton type="submit" className="w-full my-8">
            Login
          </SecondaryButton>
          <div className="flex items-center justify-center text-light_gray gap-2 text-[.8rem] ">
            Don’t have an account?
            <Link href="/signup" className="text-border_purple font-[450]">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
