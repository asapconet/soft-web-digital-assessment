"use client";

import { AppLogo } from "@/app/assets/appLogo";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { PrimaryButton } from "./Button";
import { NavRoutes } from "@/app/routes";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignUp = () => {
    router.push("/signup");
  };
  return (
    <header className="fixed top-0 w-full z-[100]">
      <nav className="flex items-center px-[2rem] bg-white justify-between gap-2 min-h-[90px] w-full">
        <Link href={"/"}>
          <AppLogo />
        </Link>
        <ul className="flex items-center gap-10">
          <CiSearch size={30} />
          {NavRoutes.map(({ name, link }, idx) => {
            const isPathname = link ? pathname.includes(link) : false;

            return (
              <li
                key={idx}
                className="text-primary_text cursor-pointer text-[1rem]"
              >
                <Link href={link}>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <section className="flex items-center gap-1">
          <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
          <PrimaryButton onClick={handleSignUp}>Sign Up</PrimaryButton>
        </section>
      </nav>
    </header>
  );
};

export default Header;
