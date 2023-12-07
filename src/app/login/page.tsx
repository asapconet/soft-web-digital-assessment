"use client";

import RootLayout from "@/layouts";
import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { ResetPasswordEmailForm } from "./components/ForgetPasswordEmailForm";
import { OtpForm } from "./components/otpForm";
import { MailBox } from "../assets/mailBox";
import { SecondaryButton } from "@/components/Button";

function Login() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <LoginForm onNextStep={handleNextStep} />;
      case 2:
        return (
          <ResetPasswordEmailForm
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
          />
        );
      case 3:
        return <OtpForm mailed={"yu"} />;
      default:
        return <LoginForm onNextStep={handleNextStep} />;
    }
  };

  return (
    <RootLayout>
      <div className="mt-[95px] flex justify-center items-center min-h-[70vh] ">
        {renderStep()}
      </div>
    </RootLayout>
  );
}

export default Login;
