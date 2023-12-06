import { SecondaryButton } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import classNames from "classnames";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export const ContactForm = () => {
  return (
    <div className="min-h-[70vh] mt-[96px] relative">
      <div className="h-[268px] bg-primary text-center text-white pt-8">
        <p className="text-[2.1rem] font-bold">Get in touch</p>
        <p className="text-[1.3rem] leading-normal">
          We are here to support you throughout the process of getting your
          business listed.
        </p>
      </div>
      <div className="flex justify-between absolute top-52 w-full px-44">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
      <div className="flex justify-center mt-[12rem] mb-[4rem]">
        <ContactInputs />
      </div>
    </div>
  );
};

function ContactCard() {
  return (
    <div className="w-[413px] h-[197px] flex text-center bg-white z-40 border rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <FiPhoneCall />
          <p className="text-[1.5rem] font-bold text-black">Business address</p>
        </div>
        <p className="text-[1.14rem] text-dark_gray leading-normal ">
          Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001,
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
}

function ContactInputs() {
  return (
    <form className="flex flex-col gap-4 w-[600px]">
      <PrimaryInput
        id="fullName"
        label="Full Name"
        className={classNames("")}
      />

      <PrimaryInput id="email" label="Email" />
      <PrimaryInput id="fullName" label="Full Name" />
      <PrimaryInput id="businessType" label="Business type(optional)" />
      <PrimaryInput id="subject" label="Subject" />
      <PrimaryInput textarea id="message" label="Write your message" />

      <SecondaryButton type="submit" className="w-full my-4">
        Send message
      </SecondaryButton>
    </form>
  );
}
