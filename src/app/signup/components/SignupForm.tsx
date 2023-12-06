"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import Link from "next/link";
import classNames from "classnames";
import { FaUser } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { SlCheck } from "react-icons/sl";
import { signUpSchema } from "../schema";
import { useRegister } from "@/api/auth";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type ApiResponse = {
  message: string;
  token: string;
  data: any;
};

export function SignupForm() {
  const [userType, setUserType] = useState("regular");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate: createUser, data } = useRegister();

  const handleUserTypeChange = (type: any) => {
    setUserType(type);
  };

  console.log(data);

  useEffect(() => {
    if (data?.status === 200) {
      toast.success(data?.data.message);
      router.push("/");
      reset();
    } else if (data?.status !== 200) {
      console.error("something went wrong");
    }
  }, [data, reset, router]);

  const onSubmitUser = (data: any) => {
    createUser({
      name: data.fullName,
      email: data.email,
      phone: data.phoneNumber,
      password: data.confirmPassword,
    });
  };

  const onSubmitProvider: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="my-[95px] flex justify-center items-center min-h-[70vh]">
      <div className="w-[486px]">
        <p className="text-light_gray text-[1rem]">Sign up for free</p>
        <p className="text-[3rem] font-[800] text-black font-recoleta mb-8">
          Get started
        </p>

        <div className="flex justify-between mb-4">
          <div
            className={`flex items-center justify-center cursor-pointer gap-2 relative
            text-[1.3rem] font-medium min-w-[206px] h-[85px] rounded-md border-[1px] ${
              userType === "regular"
                ? "border-primary text-primary_text"
                : "border-border_gray text-disabled_text"
            }`}
            onClick={() => handleUserTypeChange("regular")}
          >
            {userType === "regular" && (
              <SlCheck className="absolute -top-3 -right-4 bg-primary text-white text-3xl rounded-full" />
            )}
            <FaUser /> Regular User
          </div>
          <div
            className={`flex items-center justify-center gap-2 px-4 cursor-pointer relative
            text-[1.3rem] font-medium min-w-[206px] h-[85px]  rounded-md border-[1px] ${
              userType === "serviceProvider"
                ? "border-primary text-primary_text"
                : "border-border_gray text-disabled_text"
            }`}
            onClick={() => handleUserTypeChange("serviceProvider")}
          >
            {" "}
            {userType === "serviceProvider" && (
              <SlCheck className="absolute -top-3 -right-4 bg-primary text-white text-3xl rounded-full" />
            )}
            <BiHome /> Service Provider
          </div>
        </div>

        {userType === "regular" ? (
          <UserRegistrationForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmitUser}
          />
        ) : (
          <ServiceProviderForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmitProvider}
          />
        )}
      </div>
    </div>
  );
}

interface UserRegistrationFormProps {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: SubmitHandler<FieldValues>;
}

function UserRegistrationForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
}: UserRegistrationFormProps) {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        id="fullName"
        label="Full Name"
        className={classNames("")}
        register={{ ...register("fullName") }}
      />
      {errors.fullName && (
        <span className="text-red-500  italic text-[.7rem]">
          {errors.fullName.message}
        </span>
      )}

      <PrimaryInput
        id="email"
        type="email"
        label="Email"
        register={{ ...register("email") }}
      />
      {errors.email && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.email.message}
        </span>
      )}

      <PrimaryInput
        id="phoneNumber"
        type="number"
        label="Phone Number"
        register={{ ...register("phoneNumber") }}
      />
      {errors.phoneNumber && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.phoneNumber.message}
        </span>
      )}

      <PrimaryInput
        id="password"
        label="Password"
        register={{ ...register("password") }}
      />
      {errors.password && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.password.message}
        </span>
      )}

      <PrimaryInput
        id="confirmPassword"
        label="Re-enter Password"
        register={{ ...register("confirmPassword") }}
      />
      {errors.confirmPassword && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.confirmPassword.message}
        </span>
      )}
      <div className="flex items-center my-4">
        <input
          type="checkbox"
          id="agreeTerms"
          {...register("agreeTerms")}
          className="mr-2 text-primary_text bg-light_gray border-primary_text"
        />
        <label htmlFor="agreeTerms" className="text-light_gray text-[.8rem]">
          I agree to Dutiful’s terms and conditions
        </label>
      </div>

      <SecondaryButton type="submit" className="w-full my-4">
        Sign Up
      </SecondaryButton>
      <div className="flex items-center justify-center text-light_gray gap-2 text-[.8rem] ">
        Already have an account?
        <Link href="/login" className="text-border_purple font-[450]">
          Login
        </Link>
      </div>
    </form>
  );
}

function ServiceProviderForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
}: UserRegistrationFormProps) {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        id="fullName"
        label="Full Name"
        className={classNames("")}
        {...register("fullName")}
      />
      {errors.fullName && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.fullName.message}
        </span>
      )}

      <PrimaryInput id="email" label="Email" {...register("email")} />
      {errors.email && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.email.message}
        </span>
      )}

      <PrimaryInput
        id="phoneNumber"
        label="Phone Number"
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.phoneNumber.message}
        </span>
      )}

      <PrimaryInput id="password" label="Password" {...register("password")} />
      {errors.password && (
        <span className="text-red-500  italic text-[.7rem]">
          {errors.password.message}
        </span>
      )}

      <PrimaryInput
        id="confirmPassword"
        label="Re-enter Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <span className="text-red-500 italic text-[.7rem]">
          {errors.confirmPassword.message}
        </span>
      )}

      <div className="flex items-center my-4">
        <input
          type="checkbox"
          id="agreeTerms"
          {...register("agreeTerms")}
          className="mr-2 text-white bg-primary border-primary_text"
        />
        <label htmlFor="agreeTerms" className="text-light_gray text-[.8rem]">
          I agree to Dutiful’s terms and conditions
        </label>
      </div>

      <SecondaryButton type="submit" className="w-full my-4">
        Sign Up
      </SecondaryButton>
      <div className="flex items-center justify-center text-light_gray gap-2 text-[.8rem] ">
        Already have an account?
        <Link href="/login" className="text-border_purple font-[450]">
          Login
        </Link>
      </div>
    </form>
  );
}
