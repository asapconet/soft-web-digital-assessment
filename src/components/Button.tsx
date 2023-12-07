import React from "react";

export const PrimaryButton = ({ children, ...rest }: ButtonProp) => {
  return (
    <button
      onClick={rest.onClick}
      disabled={rest.isLoading}
      className={`flex items-center justify-center min-h-[59px] min-w-[174px] text-dark_gray
      hover:border-[2px] hover:text-border_purple border-border_purple rounded-md
      focus:border-[2px] focus:outline-none focus:text-border_purple  py-[17px]
      duration-200 ${rest.className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, ...rest }: ButtonProp) => {
  return (
    <button
      disabled={rest.isLoading}
      type={rest.type || "button"}
      onClick={rest.onClick}
      className={`flex items-center justify-center min-h-[78px] min-w-[174px]
      hover:border-[2px] hover:text-border_purple text-white bg-border_purple
      hover:bg-white border-border_purple rounded-md duration-200  shadow-btn_shadow
      focus:border-[2px] focus:outline-none focus:text-border_purple  py-[17px]
        ${rest.className}`}
    >
      {children}
    </button>
  );
};
